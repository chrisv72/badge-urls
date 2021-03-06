// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for PowerShell Gallery (/powershellgallery/p/:packageName) */
export const label = `PowerShell Gallery`;
/** URL for PowerShell Gallery (/powershellgallery/p/:packageName) */
export const url = (packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/powershellgallery/p/${packagename}`, options);