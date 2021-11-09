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

