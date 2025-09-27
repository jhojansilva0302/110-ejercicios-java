// 73. Array de Objetos
// Ordena un array de objetos por una propiedad (ejemplo: edad)

// Definimos un array de objetos
let personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 20 },
  { nombre: "Carlos", edad: 30 }
];

// Usamos sort para ordenar por la propiedad "edad"
personas.sort((a, b) => a.edad - b.edad);

// Mostramos el array ordenado
console.log("Personas ordenadas por edad:", personas);
