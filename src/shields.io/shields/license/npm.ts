// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for NPM (/npm/l/:packageName) */
export const label = `NPM`;
/** URL for NPM (/npm/l/:packageName) */
export const url = (packagename: string, options?: ShieldsIOOptions) => urlWithOptions(`/npm/l/${packagename}`, options);