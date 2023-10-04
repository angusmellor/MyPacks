const colourPalette = [
  "custBlue",
  "custBlue2",
  "custGreen",
  "custPink",
  "custPurp",
  "custBrown",
  "custOrng",
];
const dbName = "mypacks";
let baseUrl: string;

if (process.env.NODE_ENV === "production") {
  baseUrl = "http://mypacks.io";
} else {
  baseUrl = "http://localhost:3000"; // Development API base URL
}

export { baseUrl, colourPalette, dbName };
