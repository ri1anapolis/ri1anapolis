import React, { useState, useEffect } from "react"
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

  //BUG: Close the modal and go to the link/anchor is not working on mobile.
  //     God knows I tried, but I coul not understand why it behaves this way
  //     on mobiles.
  //TODO: Fix problem with anchor links on mobile devices.
  const handleClose = () => setOpenModal(false)

  useEffect(() => {
    return () => {
      // Use this to strip the hash from the URL when using an anchor as href on buttons.
      window.history.replaceState(
        "",
        document.title,
        window.location.pathname + window.location.search
      )
    }
  })

  const modalButtons = links.map((link, index) => {
    const { color, variant, href, text, target } = link
    return (
      <Button
        key={index}
        size="small"
        color={color || "primary"}
        variant={variant}
        href={href}
        target={target || "_self"}
        className={classes.button}
        onClick={handleClose}
      >
        {text}
      </Button>
    )
  })

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
