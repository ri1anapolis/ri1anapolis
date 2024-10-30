import React from "react"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import Button from "@material-ui/core/Button"
import useTheme from "@material-ui/styles/useTheme"
import clsx from "clsx"
import {
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core"
import useStyles from "./styles"
import { Email, Person } from "@material-ui/icons"

const LgpdPanel = props => {
  const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <Container id="lgpd-container">
      <Grid container>
        <Grid item className={clsx(classes.sections, classes.title)} sm={6}>
          <Typography variant="h5">
            Lei Geral de Proteção de Dados (LGPD)
          </Typography>
        </Grid>

        <Grid item xs={12} className={classes.sections}>
          <Typography paragraph>
            O 1º Registro de Imóveis de Anápolis-GO declara que os seus dados
            compartilhados conosco são respeitados e guardados com total
            privacidade. Utilizamos os melhores equipamentos, softwares e
            práticas disponíveis para trazer a maior segurança possível.
          </Typography>

          <Typography paragraph>
            Os dados pessoais compartilhados presencialmente e/ou por meio dos
            canais de comunicações são tratados e mantidos nessa Serventia e
            demais locais de armazenamento como total segurança, sempre com o
            intuito de proteção e privacidade das informações
          </Typography>

          <Typography paragraph>
            Firmamos o compromisso de constante empenho ao resguardar e proteger
            os seus dados pessoais.
          </Typography>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              color="primary"
              variant="contained"
              href="https://drive.google.com/file/d/1IK6bWaJJjxA6KGfsPjWeMrpU1sYJv2Ki/view?usp=sharing"
              target="_blank"
            >
              Conheça nosso Aviso de Privacidade
            </Button>
          </div>

          <Divider style={{ margin: "2rem" }} />

          <Typography paragraph>
            Entre em contato com o Encarregado de Proteção de Dados Pessoais com
            a finalidade de exercer os seus direitos:
            <List>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Person />
                </ListItemAvatar>
                <ListItemText>Wesley Oliveira da Costa</ListItemText>
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Email />
                </ListItemAvatar>
                <ListItemText>
                  <Link
                    color="inherit"
                    href="mailto:privacidade.ri1anapolis@gmail.com"
                  >
                    privacidade.ri1anapolis@gmail.com
                  </Link>
                </ListItemText>
              </ListItem>
            </List>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default LgpdPanel
