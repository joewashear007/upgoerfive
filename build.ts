import * as moby from 'moby';
import {writeFile} from 'fs';
import wordlist from "./data/wordlist";

console.log(moby.search('mad'))

var thesaurus: { [key: string]: string[] } = {};

wordlist.forEach(q => {
  var results = moby.search(q);
  results.forEach(w => {
    if (!(w in thesaurus) || w == "constructor") {
      thesaurus[w] = [];
    }
    console.log(`${q} => ${w} : [${thesaurus[w]}]`)
    thesaurus[w].push(q);
  });
});

writeFile("data/thesaurus.json", JSON.stringify(thesaurus), e => {
  console.log(" Saved!");
});
