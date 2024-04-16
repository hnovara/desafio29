const fs = require('node:fs');
const util = require('node:util');

const readFile = () => {
    const file = fs.readFileSync("./archivo.txt");
    const data = file.toString()

    const varProcess = util.inspect(process)
    console.log(varProcess)

    const rows = data.split("\n")
    const rowsNumber = rows.length;
    console.log(`Número de líneas en el archivo: ${rowsNumber}`);

    const words = data.split(/\s+/).filter(Boolean);
    const wordsNumber = words.length;
    console.log(`Número de palabras en el archivo: ${wordsNumber}`);

    const dataWithoutEscapes = data.replace(/\r?\n/g, '');
    const characterNumber = dataWithoutEscapes.length;
    console.log(`Número de caracteres en el archivo: ${characterNumber}`);

}

readFile()


