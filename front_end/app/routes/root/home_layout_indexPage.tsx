import React from 'react'
import type { Route } from './+types/home';
import toast from 'react-hot-toast';
import axios from 'axios';
import { format } from "date-fns";
import { useState, useEffect } from 'react';
import { Test } from '@/Test';

// ------------------ Web Studio -------------------

import { Body as Body, Link as Link } from "@webstudio-is/sdk-components-react-router";
import { HtmlEmbed as HtmlEmbed, Text as Text } from "@webstudio-is/sdk-components-react";
import { Tooltip as Tooltip, TooltipTrigger as TooltipTrigger, TooltipContent as TooltipContent } from "@webstudio-is/sdk-components-react-radix";

// ------------------ Web Studio -------------------



export function meta({}: Route.MetaArgs) {
  return [
    { title: "App 1" },
    { name: "App 1", content: "Welcome to App 1" },
  ];
}



function Homepage
() {
  
    
    return (
    <>

    <h1>Welcome this is the Home Page</h1>
  
    </>

  )
};

export default Homepage
