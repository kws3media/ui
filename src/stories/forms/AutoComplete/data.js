import { sleep } from "../../../utils";

export let characters = [
  { label: "Tony Stark", value: "Tony Stark" },
  { label: "Bruce Banner", value: "Bruce Banner" },
  { label: "Steve Rogers", value: "Steve Rogers" },
  { label: "Natasha Romanoff", value: "Natasha Romanoff" },
  { label: "Thor", value: "Thor" },
  { label: "Hulk", value: "Hulk" },
  { label: "Wolverine", value: "Wolverine" },
  { label: "Jean Grey", value: "Jean Grey" },
  { label: "Wanda Maximoff", value: "Wanda Maximoff" },
  { label: "Clint Barton", value: "Clint Barton" },
  { label: "Peter Parker", value: "Peter Parker" },
  { label: "Diana Prince", value: "Diana Prince" },
  { label: "Nick Fury", value: "Nick Fury" },
  { label: "Stephen Strange", value: "Stephen Strange" },
  { label: "Norman Osborn", value: "Norman Osborn" },
  { label: "Peter Quill", value: "Peter Quill" },
  { label: "Gamora", value: "Gamora" },
  { label: "Drax", value: "Drax" },
  { label: "Rocket Raccoon", value: "Rocket Raccoon" },
  { label: "Groot", value: "Groot" },
  { label: "Nebula", value: "Nebula" },
  { label: "Mantis", value: "Mantis" },
  { label: "Quicksilver", value: "Quicksilver" },
  { label: "Vision", value: "Vision" },
  { label: "Scarlet Witch", value: "Scarlet Witch" },
];

export let characters_string_only = [
  "Tony Stark",
  "Bruce Banner",
  "Steve Rogers",
  "Natasha Romanoff",
  "Thor",
  "Hulk",
  "Wolverine",
  "Jean Grey",
  "Wanda Maximoff",
  "Clint Barton",
  "Peter Parker",
  "Diana Prince",
  "Nick Fury",
  "Stephen Strange",
  "Norman Osborn",
  "Peter Quill",
  "Gamora",
  "Drax",
  "Rocket Raccoon",
  "Groot",
  "Nebula",
  "Mantis",
  "Quicksilver",
  "Vision",
  "Scarlet Witch",
];

export const fetchCharacters = async (filters) => {
  await sleep(1000);
  if (filters.length) {
    let cache = {};

    filters.forEach((word, idx) => {
      let options = [...characters_string_only].filter((item) => {
        return item.toLowerCase().indexOf(word.toLowerCase()) > -1;
      });

      delete cache[idx + 1];
      cache[idx] = options;
    });
    return Object.values(cache)
      .flat()
      .filter((v, i, self) => self.indexOf(v) === i);
  } else {
    return [];
  }
};