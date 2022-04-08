import { sleep } from "../../../utils";

export let brands = [
  { id: 1, name: "LG" },
  { id: 2, name: "Samsung" },
  { id: 3, name: "Xiaomi" },
  { id: 4, name: "Nokia" },
  { id: 5, name: "Oppo" },
  { id: 6, name: "Vivo" },
  { id: 7, name: "Huawei" },
  { id: 8, name: "Sony" },
  { id: 9, name: "HTC" },
  { id: 0, name: "Zero" },
  { id: "", name: "Empty String" },
  { id: 10, name: "Blackberry" },
  { id: 11, name: "Apple" },
];

export let brands_string_only = [
  "LG",
  "Samsung",
  "Xiaomi",
  "Nokia",
  "Oppo",
  "Vivo",
  "Huawei",
  "Sony",
  "HTC",
  "Blackberry",
  "Apple",
];

export const fetchBrands = async (filter) => {
  await sleep(1000);
  if (filter) {
    return brands_string_only.filter((brand) => {
      return brand.toLowerCase().indexOf(filter.toLowerCase()) > -1;
    });
  } else {
    return [];
  }
};

export const fetchObjBrands = async (filter, search_key) => {
  await sleep(Math.random() * 1000);
  if (filter) {
    return brands.filter((brand) => {
      return brand[search_key].toLowerCase().indexOf(filter.toLowerCase()) > -1;
    });
  } else {
    return [];
  }
};
