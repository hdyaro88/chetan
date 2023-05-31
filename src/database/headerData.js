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
    id: 4,
    name: "Thai",
    subcategory: "Momos"
    items: [
      { id: "1", name: "Momos", url: "Momos1" },
      { id: "2", name: "Momos", url: "Momos2" },
      { id: "3", name: "Momos", url: "Momos3" },
      { id: "4", name: "Momos", url: "Momos4" },
    ],
  },
  {
    id: 5,
    name: "South-Indian",
    subcategory: "Dosa"
    items: [
      { id: "1", name: "Dosa", url: "Dosa1" },
      { id: "2", name: "Dosa", url: "Dosa2" },
      { id: "3", name: "Dosa", url: "Dosa3" },
      { id: "4", name: "Dosa", url: "Dosa4" },
    ],
  },
  {
    id: 5,
    name: "South-Indian",
    subcategory: "Idli"
    items: [
      { id: "1", name: "Idli", url: "Idli1" },
      { id: "2", name: "Idli", url: "Idli2" },
      { id: "3", name: "Idli", url: "Idli3" },
      { id: "4", name: "Idli", url: "Idli4" },
    ],
  },
];
