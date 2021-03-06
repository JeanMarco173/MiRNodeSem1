const faker = require("faker");
const fs = require("fs");

//Esta función te permite crear una lista con los 1000 nombres utilizando la libreria faker
function generateName() {
  const names = [];
  for (let i = 1; i < 1001; i++) {
    names.push(`\n${i}) ${faker.name.findName()}`);
  }
  return names;
}
//Esta función te permite crear el archivo de texto utilizando la libreria fs
const writeNames = (path, text) => {
  fs.appendFile(path, text.toString(), (err) => {
    console.log(
      `${err ? "Error creando el archivo" : "Archivo creado con éxito"}`
    );
  });
};
//Esta función te permite verificar si el archivo de texto ya existe
const verify = (path) => {
  fs.access(path, fs.constants.R_OK, (err) => {
    `${
      err
        ? writeNames(path, generateName())
        : console.log("El archivo ya existe")
    }`;
  });
};

verify("./NewFile.txt");
