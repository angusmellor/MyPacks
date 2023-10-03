const colourPalette = [ 'custBlue', 'custBlue2', 'custGreen', 'custPink', 'custPurp', 'custBrown', 'custOrng']
const dbName = 'mypacks'
let baseUrl: string;

if (process.env.NODE_ENV === 'production') {
    baseUrl = '';
} else {
    baseUrl = 'http://localhost:3000'; // Development API base URL
}

export { colourPalette, dbName, baseUrl }