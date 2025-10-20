import React from 'react'
import type { Route } from './+types/home';
import toast from 'react-hot-toast';
import axios from 'axios';
import { format } from "date-fns";
import { useState, useEffect } from 'react';
import {Hero_Section} from '@/components/Hero_Section';
import { Card_Section } from '@/components/Card_Section';
import { Test } from '@/Test';

// ------------------ Web Studio -------------------

import { Body as Body, Link as Link } from "@webstudio-is/sdk-components-react-router";
import { HtmlEmbed as HtmlEmbed, Text as Text } from "@webstudio-is/sdk-components-react";
import { Tooltip as Tooltip, TooltipTrigger as TooltipTrigger, TooltipContent as TooltipContent } from "@webstudio-is/sdk-components-react-radix";

// ------------------ Web Studio -------------------



export function meta({}: Route.MetaArgs) {
  return [
    { title: "TaskHub" },
    { name: "description", content: "Welcome to TaskHub!" },
  ];
}

type Note = {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
};

function Homepage
() {
  const [Notes_read_key, Notes_set_function_key] = useState<Note[]>([]);

  const get_Notes_dataObject = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/notes");
      // console.log(res.data);
      Notes_set_function_key(res.data);
      toast.success("Notes data fetched successfully!");
    } catch (error) {
      console.log("Error fetching Notes", error);
      toast.error("Failed to fetch Notes data.");
    }
  };
    useEffect(() => {
      get_Notes_dataObject();
    }, []);

    // console.log(Notes_read_key[0].createdAt);
    return (
    <>
  <Hero_Section />
  <div className={`w-element`}>
    <div
      id={"Card_Section"}
      className={`w-element w-card-section ${"Card_Section"}`}
    >
      {/* ----------------------------------------------------------------------------- */}
      {Notes_read_key.map((note) => (
        <div
          id={"Card_Section_Wrapper"}
          className={`w-element w-card-section-wrapper ${"Card_Section"}`}
        >
          <div
            id={"Card_Section_Heading_Wrapper"}
            className={`w-element w-card-section-heading-wrapper ${"Card_Section"}`}
          >
            <h3
              id={"Card_Section_Heading"}
              className={`w-element w-card-section-heading ${"Card_Section"}`}
            >
              {note.title}
            </h3>
          </div>
          <div
            id={"Card_Section_Body_Wrapper"}
            className={`w-element ${"Card_Section"}`}
          >
            <h4
              id={"Card_Section_Body_Text"}
              className={`w-element w-card-section-body-text ${"Card_Section"}`}
            >
              {note.content}
            </h4>
          </div>
          <div
            id={"Card_Section_Date_Edit_Delete_Wrapper"}
            className={`w-element w-card-section-date-edit-delete-wrapper ${"Card_Section"}`}
          >
            <div
              id={"Card_Section_Date_Wrapper"}
              className={`w-element ${"Card_Section"}`}
            >
              <Tooltip delayDuration={100}>
                <TooltipTrigger>
                  <h4
                    id={"Card_Section_Created_Date"}
                    className={`w-element w-card-section-created-date ${"Card_Section"}`}
                  >
                    {format(new Date(note.createdAt), "yyyy / MM / dd - HH:mm")}
                  </h4>
                </TooltipTrigger>
                <TooltipContent
                  side={"bottom"}
                  align={"start"}
                  className={`w-tooltip-content w-card-section-creation-date-tooltip-content`}
                >
                  <Text
                    id={"Card_Section_Creation_Date_Tooltip_Text"}
                    className={`w-text ${"Card_Section"}`}
                  >
                    {"* Note Creation Date *"}
                  </Text>
                </TooltipContent>
              </Tooltip>
            </div>
            <div
              id={"Card_Section_Edit_Delete_Wrapper"}
              className={`w-element w-card-section-edit-delete-wrapper ${"Card_Section"}`}
            >
              <div
                id={"Card_Section_Edit_Wrapper"}
                className={`w-element ${"Card_Section"}`}
              >
                <Tooltip open={false} delayDuration={100}>
                  <TooltipTrigger>
                    <Link
                      id={"Card_Section_Edit_Link"}
                      href={`/edit/${note._id}`} // 👈 pass the note id
                      className={`w-element w-card-section-edit-link ${"Card_Section"}`}
                    >
                      <HtmlEmbed
                        code={
                          '<img width="100%" height="100%" src="https://img.icons8.com/fluency/48/edit-text-file.png" alt="edit-text-file"/>'
                        }
                        className={`w-html-embed w-card-section-edit-icon`}
                      />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    side={"bottom"}
                    align={"start"}
                    className={`w-tooltip-content w-card-section-edit-tooltip-content`}
                  >
                    <Text
                      id={"Card_Section_Edit_Tooltip_Text"}
                      className={`w-text w-card-section-edit-tooltip-text ${"Card_Section"}`}
                    >
                      {"* Edit Note *"}
                    </Text>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div
                id={"Card_Section_Delete_Wrapper"}
                className={`w-element ${"Card_Section"}`}
              >
                <Tooltip open={false} delayDuration={100}>
                  <TooltipTrigger>
                    <Link
                      id={"Card_Section_Delete_Link"}
                      href={"/delete"}
                      className={`w-element w-card-section-delete-link ${"Card_Section"}`}
                    >
                      <HtmlEmbed
                        code={
                          '<img width="100%" height="100%" src="https://img.icons8.com/fluency/48/delete-trash.png" alt="delete-trash"/>'
                        }
                        className={`w-html-embed w-card-section-delete-icon`}
                      />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    side={"bottom"}
                    align={"start"}
                    className={`w-tooltip-content w-card-section-delete-tooltip-content`}
                  >
                    <Text
                      id={"Card_Section_Delete_Tooltip_Text"}
                      className={`w-text w-card-section-delete-tooltip-text ${"Card_Section"}`}
                    >
                      {"* Delete Note *"}
                    </Text>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      ))}
      ;{/* -------------------------------------------------------- */}
    </div>
  </div>
  ;
</>

  )
}

export default Homepage
