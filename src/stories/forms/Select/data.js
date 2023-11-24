import { sleep } from "../../../utils";

export let brands = [
  { id: 1, name: "Acer" },
  { id: 2, name: "Alcatel" },
  { id: 3, name: "Allview" },
  { id: 4, name: "Amazon" },
  { id: 5, name: "Amio" },
  { id: 6, name: "Apple" },
  { id: 7, name: "Archos" },
  { id: 8, name: "Asus" },
  { id: 9, name: "AT&T" },
  { id: 10, name: "Benefon" },
  { id: 11, name: "BenQ" },
  { id: 12, name: "BenQ-Siemens" },
  { id: 13, name: "Bird" },
  { id: 14, name: "Blackberry" },
  { id: 15, name: "Blackview" },
  { id: 16, name: "BLU" },
  { id: 17, name: "Bosch" },
  { id: 18, name: "BQ" },
  { id: 19, name: "Casio" },
  { id: 20, name: "Cat" },
  { id: 21, name: "Celkon" },
  { id: 22, name: "Chea" },
  { id: 23, name: "Coolpad" },
  { id: 24, name: "Dell" },
  { id: 25, name: "Emporia" },
  { id: 26, name: "Energizer" },
  { id: 27, name: "Ericsson" },
  { id: 28, name: "Eten" },
  { id: 29, name: "Fairphone" },
  { id: 30, name: "Fujitsu Semienx" },
  { id: 31, name: "Garmin-Asus" },
  { id: 32, name: "Gigabyte" },
  { id: 33, name: "Gionee" },
  { id: 34, name: "Google" },
  { id: 35, name: "Haier" },
  { id: 36, name: "Honor" },
  { id: 37, name: "HP" },
  { id: 38, name: "HTC" },
  { id: 39, name: "Huawei" },
  { id: 40, name: "i-mate" },
  { id: 41, name: "i-mobile" },
  { id: 42, name: "Icemobile" },
  { id: 43, name: "Infinix" },
  { id: 44, name: "Innostream" },
  { id: 45, name: "iNQ" },
  { id: 46, name: "Intex" },
  { id: 47, name: "Jolla" },
  { id: 48, name: "Karbonn" },
  { id: 49, name: "Kyocera" },
  { id: 50, name: "Lava" },
  { id: 51, name: "LeEco" },
  { id: 52, name: "Lenovo" },
  { id: 53, name: "LG" },
  { id: 54, name: "Maxon" },
  { id: 55, name: "Maxwest" },
  { id: 56, name: "Meizu" },
  { id: 57, name: "Micromax" },
  { id: 58, name: "Microsoft" },
  { id: 59, name: "Mitac" },
  { id: 60, name: "Mitsubishi" },
  { id: 61, name: "Modu" },
  { id: 62, name: "Motorala" },
  { id: 63, name: "MWg" },
  { id: 64, name: "NEC" },
  { id: 65, name: "Neonode" },
  { id: 66, name: "NIU" },
  { id: 67, name: "Nokia" },
  { id: 68, name: "Nothing" },
  { id: 69, name: "Nvidia" },
  { id: 70, name: "O2" },
  { id: 71, name: "OnePlus" },
  { id: 72, name: "Oppo" },
  { id: 73, name: "Orange" },
  { id: 74, name: "Palm" },
  { id: 75, name: "Panasonic" },
  { id: 76, name: "Pantech" },
  { id: 77, name: "Parla" },
  { id: 78, name: "Posh" },
  { id: 79, name: "Prestigio" },
  { id: 80, name: "Qmobile" },
  { id: 81, name: "Qtek" },
  { id: 82, name: "Razer" },
  { id: 83, name: "Realme" },
  { id: 84, name: "Sagen" },
  { id: 85, name: "Samsung" },
  { id: 86, name: "Sendo" },
  { id: 87, name: "Sewon" },
  { id: 88, name: "Sharp" },
  { id: 89, name: "Siemens" },
  { id: 90, name: "Sonim" },
  { id: 91, name: "Sony" },
  { id: 92, name: "Sony Ericsson" },
  { id: 93, name: "Spice" },
  { id: 94, name: "T-Mobile" },
  { id: 95, name: "TCL" },
  { id: 96, name: "Tecno" },
  { id: 97, name: "Tel.Me." },
  { id: 98, name: "Telit" },
  { id: 99, name: "Thuraya" },
  { id: 100, name: "Toshiba" },
  { id: 101, name: "Ulefone" },
  { id: 102, name: "Unnecto" },
  { id: 103, name: "Vertu" },
  { id: 104, name: "Verykool" },
  { id: 105, name: "Vivo" },
  { id: 106, name: "VK Mobile" },
  { id: 107, name: "Vodafone" },
  { id: 108, name: "Wiko" },
  { id: 109, name: "WND" },
  { id: 110, name: "XCute" },
  { id: 111, name: "Xiaomi" },
  { id: 112, name: "XOLO" },
  { id: 113, name: "Yezz" },
  { id: 114, name: "Yota" },
  { id: 115, name: "YU" },
  { id: 116, name: "ZTE" },
  { id: 0, name: "Zero" },
  { id: "", name: "Empty String" },
];

export let brands_string_only = [
  "Acer",
  "Alcatel",
  "Allview",
  "Amazon",
  "Amio",
  "Apple",
  "Archos",
  "Asus",
  "AT&T",
  "Benefon",
  "BenQ",
  "BenQ-Siemens",
  "Bird",
  "Blackberry",
  "Blackview",
  "BLU",
  "Bosch",
  "BQ",
  "Casio",
  "Cat",
  "Celkon",
  "Chea",
  "Coolpad",
  "Dell",
  "Emporia",
  "Energizer",
  "Ericsson",
  "Eten",
  "Fairphone",
  "Fujitsu Semienx",
  "Garmin-Asus",
  "Gigabyte",
  "Gionee",
  "Google",
  "Haier",
  "Honor",
  "HP",
  "HTC",
  "Huawei",
  "i-mate",
  "i-mobile",
  "Icemobile",
  "Infinix",
  "Innostream",
  "iNQ",
  "Intex",
  "Jolla",
  "Karbonn",
  "Kyocera",
  "Lava",
  "LeEco",
  "Lenovo",
  "LG",
  "Maxon",
  "Maxwest",
  "Meizu",
  "Micromax",
  "Microsoft",
  "Mitac",
  "Mitsubishi",
  "Modu",
  "Motorala",
  "MWg",
  "NEC",
  "Neonode",
  "NIU",
  "Nokia",
  "Nothing",
  "Nvidia",
  "O2",
  "OnePlus",
  "Oppo",
  "Orange",
  "Palm",
  "Panasonic",
  "Pantech",
  "Parla",
  "Posh",
  "Prestigio",
  "Qmobile",
  "Qtek",
  "Razer",
  "Realme",
  "Sagen",
  "Samsung",
  "Sendo",
  "Sewon",
  "Sharp",
  "Siemens",
  "Sonim",
  "Sony",
  "Sony Ericsson",
  "Spice",
  "T-Mobile",
  "TCL",
  "Tecno",
  "Tel.Me.",
  "Telit",
  "Thuraya",
  "Toshiba",
  "Ulefone",
  "Unnecto",
  "Vertu",
  "Verykool",
  "Vivo",
  "VK Mobile",
  "Vodafone",
  "Wiko",
  "WND",
  "XCute",
  "Xiaomi",
  "XOLO",
  "Yezz",
  "Yota",
  "YU",
  "ZTE",
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
