import React from 'react'
import "../../components_styles/Built_by.css"
import { Body as Body, Link as Link } from "@webstudio-is/sdk-components-react-router";
import { HtmlEmbed as HtmlEmbed } from "@webstudio-is/sdk-components-react";

export const Built_by = () => {
  return (
    <>
  <div className={`w-element`}>
    <Link
      href={"https://webstudio.is/?via=badge"}
      target={"_blank"}
      id={"Built by Sicelo_Link"}
      className={`w-element w-built-by-sicelo-link`}
    >
      <HtmlEmbed
        code={
          '<img width="100%" height="100%" src="https://img.icons8.com/fluency/48/github.png" alt="github"/>'
        }
        className={`w-html-embed w-github-icon`}
      />
      <div
        id={"Built by Sicelo_Text_Wrapper"}
        className={`w-element w-built-by-sicelo-text-wrapper`}
      >
        <span id={"Built by Sicelo_Text"} className={`w-element`}>
          {"Sicelo Mduna"}
        </span>
      </div>
    </Link>
  </div>
</>

  )
}
