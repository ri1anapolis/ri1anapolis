import React, { useState } from "react"
import { Modal, Backdrop, Fade } from "@material-ui/core"
import { Typography, Divider } from "@material-ui/core"
import { Avatar, Button, IconButton } from "@material-ui/core"
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import CloseIcon from "@material-ui/icons/Close"

const useStyles = makeStyles(themes => ({
  modal: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "50px 10px",
    overflowY: "scroll",
  },
  card: {
    outline: 0,
    minWidth: "320px",
    maxWidth: "600px",
    width: "100%",
  },
  cardMedia: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  avatar: {
    backgroundColor: props => props.color,
  },
  button: {
    padding: "5px 20px",
    fontWeight: 500,
  },
}))

const StyledModalComponent = props => {
  const classes = useStyles(props)
  const { autoOpenModal, title, subtitle, image, links, children } = props
  const [openModal, setOpenModal] = useState(autoOpenModal)
  const handleClose = () => setOpenModal(false)

  const handleButtonOnClick = event => {
    function goToAnchorAndStripHash() {
      window.location.href = event.currentTarget.href
      setTimeout(() => {
        // when called the code below without the timeout, it work but, somehow,
        // the url bar get the hash again. the way I found to prevent this behaviour was setting a timeout
        window.history.replaceState(
          "",
          document.title,
          window.location.pathname + window.location.search
        )
      }, 50)
    }

    goToAnchorAndStripHash()
    handleClose()
  }

  const modalButtons = links.map((link, index) => (
    <Button
      key={index}
      size="small"
      color={link.color || "primary"}
      variant={link.variant}
      href={link.href}
      className={classes.button}
      onClick={event => handleButtonOnClick(event)}
    >
      {link.text}
    </Button>
  ))

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      className={classes.modal}
    >
      <Fade in={openModal}>
        <Card className={classes.card}>
          <CardHeader
            id="modal-title"
            title={title}
            subheader={subtitle}
            avatar={
              <Avatar className={classes.avatar}>
                <strong>!</strong>
              </Avatar>
            }
            action={
              <IconButton
                size="small"
                onClick={handleClose}
                aria-label="Fechar"
              >
                <CloseIcon />
              </IconButton>
            }
          />
          {!image && <Divider />}
          <CardMedia className={classes.cardMedia} image={image} />
          <CardContent>
            <Typography id="modal-description" variant="body2" align="justify">
              {children}
            </Typography>
          </CardContent>
          {modalButtons.length > 0 && <Divider />}
          <CardActions className={classes.cardActions}>
            {modalButtons}
          </CardActions>
        </Card>
      </Fade>
    </Modal>
  )
}

export default StyledModalComponent
