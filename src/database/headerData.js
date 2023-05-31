import T1 from "../assest/img/i1.png";
import c3 from "../assest/img/c3.png";
import f1 from "../assest/img/f1.png";
import r1 from "../assest/img/r1.png";

export const headerData = [
  { id: "1673062197207", name: "Icecream", decs: "Chocolate & vanilla", price: "99", img: T1 },
  { id: "1673062328128", name: "Strawberries", decs: "Fresh Strawberries", price: "199", img: f1 },
  { id: "1673062261431", name: "Chicken kebab", decs: "Mixed Kebab Plate", price: "149", img: c3 },
  { id: "1673062408402", name: "Veg Pulav", decs: "Rice", price: "199", img: r1 },
];

export const categories = [
  {
    id: 1,
    name: "South-Indian",
    subcategory: [
      {
        name: "Dosa",
        items: [
          { id: "1", name: "Dosa", url: "Dosa1" },
          { id: "2", name: "Dosa", url: "Dosa2" },
          { id: "3", name: "Dosa", url: "Dosa3" },
          { id: "4", name: "Dosa", url: "Dosa4" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Nortg-Indian",
    subcategory: [
      {
        name: "Samosa",
        items: [
          { id: "1", name: "Samosa", url: "Samosa1" },
          { id: "2", name: "Samosa", url: "Samosa2" },
          { id: "3", name: "Samosa", url: "Samosa3" },
          { id: "4", name: "Samosa", url: "Samosa4" },
        ],
      },
    ],
  },

  {
    id: 3,
    name: "West-Indian",
    subcategory: [
      {
        name: "Kachori",
        items: [
          { id: "1", name: "Kachori", url: "Kachori1" },
          { id: "2", name: "Kachori", url: "Kachori2" },
          { id: "3", name: "Kachori", url: "Kachori3" },
          { id: "4", name: "Kachori", url: "Kachori4" },
        ],
      },
      {
        name: "bhel",
        items: [
          { id: "1", name: "bhel", url: "bhel1" },
          { id: "2", name: "bhel", url: "bhel2" },
          { id: "3", name: "bhel", url: "bhel3" },
          { id: "4", name: "bhel", url: "bhel4" },
        ],
      },
    ],
  },
];
