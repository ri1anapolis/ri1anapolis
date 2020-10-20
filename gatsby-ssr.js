import React from "react"

const HeadComponents = [
  <script
    key="reCaptcha"
    src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
    type="text/javascript"
    async
    defer
  />,
]

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents(HeadComponents)
}
