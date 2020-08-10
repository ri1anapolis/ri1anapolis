import React, { useEffect } from "react"
import { createStore, useStore } from "react-hookstore"
import { Typography, Button, IconButton } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"

import Drawer from "../components/drawer"

const toggleCertidaoDrawerStore = createStore("drawerStore", false)

const useCertidaoDrawerToggler = () => {
  const [drawer, setDrawer] = useStore(toggleCertidaoDrawerStore)
  return () => setDrawer(!drawer)
}

const CertidaoDrawer = props => {
  const [drawer, setDrawer] = useStore(toggleCertidaoDrawerStore)
  const anchor = props.anchor || "bottom"
  const variant = props.variant || "temporary"

  useEffect(() => {
    function handleBrowserBackButton(event) {
      setDrawer(false)
    }

    if (drawer) {
      window.history.pushState(null, document.title, document.location.href)
      window.addEventListener("popstate", handleBrowserBackButton, {
        passive: true,
      })
    }
    return () =>
      window.removeEventListener("popstate", handleBrowserBackButton, {
        passive: true,
      })
  }, [drawer, setDrawer])

  return (
    <Drawer
      anchor={anchor}
      variant={variant}
      open={drawer}
      onClose={() => setDrawer(false)}
    >
      <IconButton
        size="small"
        style={{ float: "right" }}
        onClick={() => setDrawer(false)}
      >
        <CloseIcon fontSize="small" />
      </IconButton>

      <Typography variant="h5">Solicitação de Certidão</Typography>
      <Typography variant="caption">
        Faça o pedido de certidão online!
      </Typography>
    </Drawer>
  )
}

export default CertidaoDrawer
export { CertidaoDrawer, useCertidaoDrawerToggler }
