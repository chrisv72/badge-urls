// This file was auto-generated. Do not modify it by hand and instead modify the scraper or code generator files.

import { ShieldsIOOptions, urlWithOptions } from "../../options";

/** Label for Packagist Version (custom server) (/packagist/v/:user/:repo?server=https%3A%2F%2Fpackagist.org) */
export const label = `Packagist Version (custom server)`;
/** URL for Packagist Version (custom server) (/packagist/v/:user/:repo?server=https%3A%2F%2Fpackagist.org) */
export const url = (user: string, repo: string, options?: ShieldsIOOptions) => urlWithOptions(`/packagist/v/${user}/${repo}?server=https%3A%2F%2Fpackagist.org`, options);