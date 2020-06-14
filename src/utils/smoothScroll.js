import scrollTo from "gatsby-plugin-smoothscroll"

export default function smoothScroll(event) {
  const anchor = event.currentTarget.href.split("#")
  if (anchor.length > 1) {
    event.preventDefault()
    scrollTo(`#${anchor[1]}`)
  }
}
