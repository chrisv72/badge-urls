// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Wercker CI Run (/wercker/ci/:applicationId/:branch) */
export const label = `Wercker CI Run`;
/** URL for Wercker CI Run (/wercker/ci/:applicationId/:branch) */
export const url = (applicationid: string, branch: string, options?: ShieldsIOOptions) => urlWithOptions(`/wercker/ci/${applicationid}/${branch}`, options);