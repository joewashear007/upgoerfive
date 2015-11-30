/// <reference path="./typings/tsd.d.ts"/>

import wordlist from "./data/wordlist";
import * as inflection from "inflection";
import "./es6Mods";
var thesaurus = require("./data/thesaurus.json");






/**
 * Check a string to against word list. Returns all strings that are NOT in the word list
 * @param str String to check
 * @param [delim] Optional deliminter, default ' '
 */
export function checkString(str: string, delim?: string): string[] {
  delim = delim || " ";
  return str.split(delim).map(prep).filter(q => wordlist.indexOf(q) < 0);
}


/**
 * Replaces the bad words with the good ones
 * @param str String to make replacements on
 * @param [delim] Optional deliminter, default ' '
 */
export function replace(str: string, delim?: string): string {
  delim = delim || " ";
  return str
    .split(delim)
    .map( prep)
    .map(q => {
      q = q.toLowerCase();
      if (wordlist.indexOf(q) > -1) {
        return q;
      } else {
        if (q in thesaurus) {
          var options: string[] = thesaurus[q]
          return options[Math.floor(Math.random() * options.length)];
        } else {
          return "**Missing**"
        }
      }
    })
    .join(delim);
}

/** cleans up the word by remove punc, purals, etc. */
function prep(str: string): string {
  str = inflection.singularize( str.toLowerCase() );
  if (str.endsWith("'s")) {
    str = str.substr(0, str.length - 3);
  }
  str = str.trim().replace(/[^a-z0-9\s']/gi, '');
  return str;
}
