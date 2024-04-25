var articulos = [
    { nombre: "Bici", costo: 3000}, 
    { nombre: "Tv", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700},
];

// Retornamos costro de los articulo mayor o igual a 500
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

// Retornamos el nombre de los articulos
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

// Encontrar cierto articulo
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop" //{nombre: 'Laptop', costo: 20000
});

// Mostrar el nombre de todos los articulos
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});