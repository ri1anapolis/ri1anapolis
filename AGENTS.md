# AGENTS.md — ri1anapolis

Official website of the **1º Registro de Imóveis de Anápolis/GO** (a Brazilian real-estate registry office, or "cartório"). It is a small, mostly static **Gatsby 2 + React 16 + Material-UI v4** single-page site hosted on **Netlify**. It has one dynamic feature, protocol lookup, served by a Netlify Function that reads a MongoDB instance on the office's VPS.

- All user-facing text is **Brazilian Portuguese (pt-BR)**. Keep it that way.
- The codebase is small, about 95 tracked files and roughly 4k lines of JS/JSX. It has no TypeScript and no tests.
- The README is **partly outdated**: it still mentions MongoDB Realm/Stitch, Firebase and ReCaptcha. Trust this file and the code over the README.

---

## 1. Commands and toolchain

| What | Command |
|---|---|
| Node version | **14.17.4** (`.nvmrc`). Gatsby 2 does not build on modern Node. The devcontainer image is Node 24, but its `node` feature installs 14.17.4 and makes it the default. |
| Package manager | **yarn 1** (`yarn.lock`). Don't generate a `package-lock.json`. |
| Install | `yarn install` |
| Dev server (frontend only) | `yarn develop` → http://localhost:8000 |
| Dev with functions | `netlify dev` (needs `netlify-cli`, `netlify login`, `netlify link`). Serves at **:8888**, which is what `find-on-db.js` calls in non-production. |
| Production build | `yarn build` (this is the **only real verification step**) |
| Serve build | `yarn serve` |
| Clear Gatsby cache | `yarn clean` (do this when GraphQL or image queries act strangely) |
| Format | `yarn format` (Prettier 2.0.5) |
| Tests | **None.** `yarn test` exits 1 on purpose. There is no ESLint config either. |

**Code style** (`.prettierrc`): **no semicolons**, `arrowParens: "avoid"`, double quotes, 2-space indentation. Files use `.jsx` for components and `.js` for plain modules.

---

## 2. Architecture at a glance

```
Browser (Gatsby SPA)
 ├─ /            src/pages/index.jsx     → Layout (layout2) + 4 sections
 ├─ /certidao    src/pages/certidao.jsx  → LayoutLite + CertidaoPanel
 └─ /404
      │
      ├─ Protocol search ──POST {processId:"RE-12345"}──▶ /.netlify/functions/db
      │                                                   (src/functions/db/db.js)
      │                                                   └─▶ MongoDB on VPS (MONGODB_URI / MONGODB_DB)
      │                                                        processes ⨝ steps ⨝ requirements_notes
      ├─ Banners ──GET──▶ raw.githubusercontent.com/ri1anapolis/ri1anapolis-banners/{main|development}/banners.json
      ├─ Documents / links ──▶ Google Drive files (hard-coded URLs)
      ├─ Certidões ──▶ external SAEC portal (registradores.onr.org.br), links only
      └─ LogRocket (production only, about 20% of visitors, sampled daily)
```

There is **no `gatsby-node.js`**, **no `netlify.toml`** and **no `gatsby-ssr.js`**. Pages come from `src/pages/` by convention. The Netlify functions directory (`src/functions`) and all environment variables are configured in the **Netlify UI**, not in the repo.

An external sync service (in another repo, not part of this one) copies protocol data from the office's internal MySQL ("register") system into the MongoDB database that this site reads.

---

## 3. Directory map

```
gatsby-config.js        siteMetadata (title, long SEO description, preloadDomains) + plugins
gatsby-browser.js       only re-exports onInitialClientRender (LogRocket bootstrap)
src/
  pages/                Gatsby routes: index.jsx, certidao.jsx, 404.jsx
  pagesContent/         Page SECTIONS and drawer panels (the page content lives here)
    protocolos2.jsx       #protocolos section: SearchForm + SearchReport
    servicos2.jsx         #servicos section: buttons that open the Certidões and Documentos drawers
    cartorio2.jsx         #cartorio section: about the office
    contato/              #contato section: address, map, email, phone, WhatsApp, Instagram
    certidaoPanel/        Certidão drawer: now only points to the SAEC portal (see legacy note)
    documentosPanel2/     "Documentos para Registro" drawer
      documentosPanelContent.js   ← THE MOST FREQUENTLY EDITED FILE (see §7)
    lgpdPanel/            LGPD privacy notice drawer (opened from the header menu and the footer)
    bannerHorarioAtendimento.jsx, bannerSolicitaCertidao.jsx   static banner-carousel slides
    voltarSite.jsx        "back to full site" block on /certidao
  components/
    layout2.jsx           main layout: Theme, Header, Banner carousel, children, Footer, BackToTop
    layoutLite.jsx        minimal layout for /certidao
    header/               fixed AppBar, desktop menu, extended dropdown menu (own mini-store)
    banner/               react-multi-carousel, remote banners (getBanners.js) + static children
    searchProtocol2/      protocol search: searchForm/, searchReport/ (incl. notesDownloadDialog), reduxStore.js
    section2.jsx          layout primitives: Article (full-width band, id = anchor), Section, Aside
    styledDrawerComponent.jsx   global drawer system: <StyledDrawer id> + useDrawerToggler()
    simpleAccordion.jsx   used by the Documentos list
    seo.jsx               react-helmet SEO (title template, canonical, preconnect)
    footer2.jsx, backToTopButton2.jsx, styledButton.jsx, styledAlertComponent.jsx,
    helpIconButton.jsx, sectionLoadingFallback.jsx, styledFooterContent.jsx
  config/materialUiTheme2.jsx   MUI theme (primary #c59543 gold, secondary #252220 near-black), Open Sans
  functions/            Netlify Functions (Node, CommonJS)
    db/db.js              protocol lookup (MongoDB aggregate)
    mailer/mailer.js      nodemailer SMTP relay (LEGACY, not called by the UI anymore)
  services/             LogRocket setup and sampling
  utils/                small helpers (simpleRedux, createObserver, debounce, find-on-db, …)
  images/               processed by gatsby-source-filesystem and sharp (queried by relativePath)
```

**Naming:** files ending in `2` (`layout2`, `footer2`, `protocolos2`, `servicos2`, `section2`, `searchProtocol2`, `documentosPanel2`, `materialUiTheme2`) are the **current** versions. The v1 files were deleted long ago. Don't create new `…3` variants. Edit in place.

---

## 4. Key mechanisms

### 4.1 State: the `simpleRedux` mini-stores
`src/utils/simpleRedux.js` is a hand-rolled Redux (`createStore(reducer)` → `{getState, dispatch, subscribe}`). The code has no React context and no real Redux. It uses three module-level singleton stores:

| Store | File | Actions |
|---|---|---|
| Header menu | `components/header/reduxStore.js` | `TOGGLE_MENU`, `CLOSE_MENU` → `{open}` |
| Protocol search | `components/searchProtocol2/reduxStore.js` | `UPDATE_STATE` → merges `{loading, error, data}` |
| Drawers | inside `components/styledDrawerComponent.jsx` | `TOGGLE_DRAWER`/`CLOSE_DRAWER` with `id` → `{[id]: bool}` |

⚠ Components call `store.subscribe(...)` **directly in the render body without unsubscribing**, so listeners pile up on every re-render. The pattern is established and harmless at this scale. **Don't copy it into new code.** Wrap new subscriptions in `useEffect` and return the unsubscribe function.

### 4.2 Drawers
To open a panel from anywhere:
```jsx
const handleDrawer = useDrawerToggler()
<Button onClick={handleDrawer("drawerFoo")}>…</Button>
<StyledDrawer id="drawerFoo" anchor="bottom"><FooPanel /></StyledDrawer>
```
Existing ids are `drawerCertidoes`, `drawerDocumentos2` (both in `servicos2.jsx`) and `drawerLgpd` (in `footer2.jsx`, also opened from the header menu). An open drawer pushes a history entry, so the phone's back button closes it.

### 4.3 In-page navigation
The home page is a one-page layout. Sections are `<Article id="protocolos|servicos|cartorio|contato">`, and menus link to them with `react-anchor-link-smooth-scroll` and **`offset="89"`**, which matches the 90px fixed header (`header/styles.jsx`). Links whose `href` doesn't start with `#` open in a new tab with `noopener noreferrer`. The header menu arrays live in `components/header/index.jsx` (`defaultMenus` for desktop, `extendedMenus` for the dropdown). Footer links are in `footer2.jsx`. Some external URLs (the circunscrição map, the custas table) are **duplicated** in the header and the footer, so update both.

### 4.4 Code splitting and performance
Everything below the fold is loaded with `@loadable/component` and a `SectionLoadingFallback height="…"` placeholder, which keeps layout shift low. Drawer panels are preloaded when their trigger button scrolls into view (`utils/createObserver.js` with IntersectionObserver). Follow this pattern for any new heavy section.

### 4.5 Styling
MUI v4 JSS: `makeStyles` / `withStyles` from `@material-ui/styles` or `@material-ui/core/styles`, plus `clsx`. **Don't** introduce MUI v5 (`@mui/*`), `sx` props, `styled-components` or Tailwind. `@emotion` is installed but unused. Many header styles use `!important` because of the `injectFirst` ordering. Brand colors are gold `#c59543` / `#AA7E3D`, dark `#252220` and info `#4373C5`. Images come from `useStaticQuery` + `gatsby-image` (`fixed`/`fluid`), queried by `relativePath` under `src/images`.

---

## 5. Protocol search (the only dynamic feature)

1. `searchForm/index.jsx` keeps only digits. The search button is enabled at **5 or more digits**, and the value is sent as **`RE-<digits>`**.
2. `utils/find-on-db.js` → `POST /.netlify/functions/db` with `{processId}`. In non-production it uses base URL `http://localhost:8888` (`netlify dev`).
3. `functions/db/db.js` runs a `MongoClient` aggregate on the `processes` collection:
   `$match {name: processId}` → `$lookup steps (step → step_id) as step` → `$lookup requirements_notes (name → _id)`. It returns an **array**.
4. `searchReport/index.jsx` reads `data.at(0)` and renders:
   - `name` ("RE-12345"; the number after the dash is displayed), `nature`, `email`
   - `step[0].name`, `step[0].description`
   - when `step[0].allow_notes_download` and `requirements_notes[0].encrypted_url` are set → the **Nota Devolutiva** download dialog
   - an empty array → "protocolo não foi encontrado"; `{error}` → an error alert (`handleErrors.jsx`)
5. **Nota Devolutiva download** (`notesDownloadDialog.jsx`) works **client-side**. The user types the "código verificador" printed on the receipt (8 or more digits). If `HmacMD5(input, GATSBY_CRYPTO_KEY) === requirements_notes[0].hash`, the URL is decrypted with `AES.decrypt(encrypted_url, GATSBY_CRYPTO_KEY)` and the Download button enables. The key is a `GATSBY_` variable, so it is **shipped in the browser bundle**. It only obscures the URL. Don't treat it as real secrecy, and don't change the scheme without changing the sync service too.

Document shape the UI expects (produced by the external sync service):
```js
{ name: "RE-12345", nature: "…", email: "…",
  step: [{ step_id, name, description, allow_notes_download: bool }],
  requirements_notes: [{ _id: "RE-12345", encrypted_url, hash }] }
```
If you change the field names, change them in `db.js`, `searchReport/index.jsx` and `notesDownloadDialog.jsx` together. The Oct 2025 VPS migration needed a string of hotfix PRs (#35–#43) because of this kind of mismatch.

---

## 6. Environment variables

`gatsby-config.js` loads `.env.${NODE_ENV}` (`.env.development` / `.env.production`). All `.env*` files are git-ignored. Production values live in Netlify.

| Var | Used by | Notes |
|---|---|---|
| `GATSBY_CRYPTO_KEY` | notesDownloadDialog | HMAC and AES key (client-visible) |
| `GATSBY_LOGROCKET_APP_ID` | services/setupLogRocket | |
| `GATSBY_LOGROCKET_LOCAL_STORAGE` | services/* | localStorage key for the daily sampling flag (**missing from the README**) |
| `GOOGLE_TRACKING_ID` | gatsby-plugin-gtag | |
| `SITE_URL` | gatsby-config | fallback after Netlify's `URL` / `DEPLOY_URL` |
| `MONGODB_URI`, `MONGODB_DB` | functions/db | VPS MongoDB. Netlify function env only. |
| `SMTP_HOST/PORT/USER/PASS/FROM/TO`, `SMTP_USE_TLS` | functions/mailer | legacy |
| `GATSBY_MONGODB_APP_ID/KEY`, `GATSBY_RECAPTCHA_KEY` | — | **obsolete** (Realm/ReCaptcha were removed) |

Never commit `.env*` files or print these values.

---

## 7. Recipe: editing the "Documentos para Registro" list

This is the most common change. The non-developer "Suporte" GitHub account usually makes it through the GitHub web editor, and it goes straight to `master` with a PR merge. The file is `src/pagesContent/documentosPanel2/documentosPanelContent.js`, a plain array rendered as accordions (`simpleAccordion.jsx`).

Entry shape:
```js
{
  title: "Nome da Natureza",            // accordion title
  // description: "optional caption",   // supported by the Accordion, currently unused
  links: [
    { text: "1. Lista de Documentos", href: "https://drive.google.com/file/d/<ID>/view" },
    { text: "2. Requerimento Pessoa Física", href: "https://drive.google.com/file/d/13aigCcyNqAV_-pAzTuavciFsMw413Pgj/view" },
    { text: "2. Requerimento Pessoa Jurídica", href: "https://drive.google.com/file/d/1AfD-kQbnjWCPnNlCsQd_jRm4--n5Q9YM/view" },
  ],
},
```
Rules:
- Keep entries sorted **alphabetically by `title`** (about 40 entries, from "Abertura de Matrícula" to "Usucapião Extrajudicial").
- Number link texts to show order (`1.`, `2.`, `3.`…). The PF and PJ requerimentos both use `2.`.
- Many entries share the same PF/PJ requerimento, "Declarações Exigidas por Lei" and COAF documents. When a **shared** Drive file is replaced, update **every** occurrence (search the file for the old ID).
- Use Google Drive `…/file/d/<ID>/view` links. Links open in a new tab automatically. Optional `target`, `rel`, `color` and `startIcon` are passed through to the MUI Button.
- Mind the trailing commas and the double quotes. The file is plain JS, so one syntax error breaks the Netlify build. Run `yarn build` before pushing. For a quick syntax-only check, run `npx prettier --check <file>`, which fails on a parse error.

Other content spots:

| Content | File |
|---|---|
| Header menus | `components/header/index.jsx` |
| Footer links | `components/footer2.jsx` |
| Contact details | `pagesContent/contato/index.jsx` (+ `contatoMap.jsx`) |
| Office hours banner | `pagesContent/bannerHorarioAtendimento.jsx` |
| LGPD text | `pagesContent/lgpdPanel/index.jsx` |
| Temporary announcements | the **external** `ri1anapolis-banners` repo (`banners.json`: `[{title, subtitle?, body: [..], actionLinks?: [{href, text}]}]`; title and `body[0]` need at least 3 characters). No deploy is needed. |

`src/pages/index.jsx` also has a commented-out "Nota Pública" modal. It is a template for re-enabling a site-wide announcement modal. Leave it alone unless asked.

---

## 8. Legacy and unused code (keep it, don't extend it)

These are **intentionally kept but unused**. Don't delete them without being asked, don't "fix" them, and don't wire new features into them:

- `pagesContent/agendamentoPanel.jsx` (Setmore iframe), `bannerAgendamento.jsx`, `bannerCoronaVirus.jsx`
- The old in-site certidão request form: `certidaoPanel/formTextField.jsx`, `formHint.jsx`, `styledPopover.jsx`, `formValidationSchemaCertidao.js`, `components/muiMaskedInputs.jsx`, `utils/triggerEvent.js`, `utils/formatMailPayload.js`, `utils/mailer.js`, `functions/mailer/`. They were dropped because CNJ Provimento 89/2019 art. 33 moved certidão requests to the SAEC portal.
- `utils/firstCharIsNaN.js`, `services/onServiceWorkerUpdateReady.js` (the service worker was removed with `gatsby-plugin-remove-serviceworker`)
- Dependencies that are no longer imported: `@apollo/react-hooks`, `apollo-boost`, `apollo-link-context`, `graphql-tag`, `mongodb-stitch-browser-sdk`, `@hookform/resolvers`, `react-hook-form`, `yup`, `@emotion/*`, `react-loadable-visibility`, `react-typography`, `gatsby-background-image`
- `siteMetadata.preloadDomains` still lists `stitch.mongodb.com` and Setmore.

## 9. Known quirks (check before "fixing"; many are harmless)

- `services/LogRocketMate.js`: `if (isAbleToGather)` tests the function reference, so it is always true. In practice the gate is `onInitialClientRender` (production and sampled only).
- `components/header/index.jsx`: the `useEffect` cleanup calls `addEventListener` instead of `removeEventListener`.
- `functions/db/db.js` logs `MONGODB_URI` and the full query results to the function logs. Avoid adding more logging of sensitive data.
- `banner/index.jsx`: `children?.length || 0 + onlineBanners?.length || 0` has an operator-precedence bug.
- `getBanners` uses a 500 ms timeout on purpose. A slow GitHub response just means no remote banners.
- The PWA/service worker is disabled, so the README note about it is stale.
- Header and footer contain some duplicate hard-coded URLs (see §4.3).

## 10. Working agreements for agents

- Make **small, surgical changes**. This is a production site for a public office with no tests. Verify with `yarn build` on Node 14.
- Don't upgrade Gatsby, React, MUI or Node as a side effect. A framework upgrade is a separate, explicit project.
- Keep the UI copy in pt-BR, with a formal tone and correct legal terms (e.g., *matrícula*, *averbação*, *nota devolutiva*, *protocolo*, *serventia*, *natureza*).
- Match the existing idioms: functional components, MUI v4 JSS, `loadable()` for below-the-fold content, the drawer system for panels, the Prettier style above.
- Commits use a Conventional-Commit-ish style (`feat:`, `fix:`, `refactor:`, `chore:`). Changes land on `master` through PRs.

## Glossary (pt-BR → meaning)

| Term | Meaning |
|---|---|
| Cartório / Serventia | registry office |
| Registro de Imóveis (RI) | real-estate registry |
| Circunscrição | the geographic jurisdiction the office covers |
| Protocolo | a filed request, tracked by number ("RE-…") |
| Natureza | the type of legal act of a protocolo |
| Etapa | the processing step of a protocolo |
| Nota Devolutiva | a notice listing requirements or defects the requester must fix |
| Código Verificador | verification code on the receipt; unlocks the nota devolutiva download |
| Matrícula | a property's registry record number |
| Averbação | an annotation added to a matrícula |
| Certidão | certificate; now requested via SAEC/ONR |
| Custas | official fee table |
| Selo | TJGO electronic seal, verifiable at see.tjgo.jus.br |
| LGPD | Brazil's data-protection law |
| TJGO / CNJ | Goiás state court / National Council of Justice (regulators) |
