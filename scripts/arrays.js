
//Arrays con objetos.

const Libros = [
{
    id:1,
    nombre: "libro de Harry potter",
    precio: 3000,
},
{
    id:2,
    nombre: "Game of thrones",
    precio: 5000,
},
{
    id:3,
    nombre: "El señor de los anillos",
    precio: 4000,
},
{
    id:4,
    nombre: "Avangers",
    precio: 6000,
}
]
console.log(Libros);

for (let i = 0;i<Libros.length;i++)
{
    console.log(Libros[i]);
}