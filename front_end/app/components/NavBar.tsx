import React from 'react'
import "@/components_styles/NavBar.css"
import { useEffect } from "react";

import { Body as Body, Link as Link } from "@webstudio-is/sdk-components-react-router";
import { HtmlEmbed as HtmlEmbed } from "@webstudio-is/sdk-components-react";

export const NavBar = () => {
  return (
    <>
    <div
className={`w-element`}>
<Link
href={"https://webstudio.is/?via=badge"}
target={"_blank"}
id={"Built by Sicelo_Link"}
className={`w-element w-built-by-sicelo-link`}>
</Link>
<div
id={"NavBar_Container"}
style={{ top: 0 }}
className={`w-element w-nav-bar-container ${"NavBar"}`}>
<div
id={"NavBar_Think_Board_Home_Container"}
className={`w-element ${"NavBar"}`}>
<div
id={"NavBar_Think_Board_Home_ContainerHome_Link_Wrapper"}
className={`w-element w-nav-bar-think-board-home-container-home-link-wrapper ${"NavBar"}`}>
<Link
id={"NavBar_Home_Link"}
href={"/"}
className={`w-element w-nav-bar-home-link ${"NavBar"}`}>
<HtmlEmbed
code={"<img width=\"100%\" height=\"100%\" src=\"https://img.icons8.com/fluency/48/think-do.png\" alt=\"think-do\"/>"}
className={`w-html-embed w-nav-bar-home-icon`} />
<h4
id={"NavBar_Home_Text"}
className={`w-element w-nav-bar-home-text ${"NavBar"}`}>
{"Think Board"}
</h4>
</Link>
</div>
</div>
<div
id={"NavBar_Add_NewNote_Container"}
className={`w-element ${"NavBar"}`}>
<div
id={"NavBar_Add_New_Note_Link_Wrapper"}
className={`w-element w-nav-bar-add-new-note-link-wrapper ${"NavBar"}`}>
<Link
id={"NavBar_Add_New_Note_Link"}
href={"/create"}
className={`w-element w-nav-bar-add-new-note-link ${"NavBar"}`}>
<HtmlEmbed
code={"<img width=\"100%\" height=\"100%\" src=\"https://img.icons8.com/fluency/48/add-file.png\" alt=\"add-file\"/>"}
className={`w-html-embed w-nav-bar-add-new-note-icon`} />
<h4
id={"NavBar_Add_New_Note_Text"}
className={`w-element w-nav-bar-add-new-note-text ${"NavBar"}`}>
{"New Note"}
</h4>
</Link>
</div>
</div>
</div>
</div>
    </>
  )
}
