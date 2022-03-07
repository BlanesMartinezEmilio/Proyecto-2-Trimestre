//Creamos una colección con la información de los productos
db.ventas.aggregate([
    {
        $unwind: {
            path: "$item"
        }
    },
    {
        $project: {
            _id:0,
            id:1,
            nombre:"$item.nombre",
            precioVenta:"$item.precioVenta",
            precioCompra:"$item.precioCompra",
            unidades:"$item.unidades",
            características:"$item.características",
        }
    },
    {
        $out:"productos"
    }
])
//Creamos una colección con la informacion de los vendedores
db.ventas.aggregate([
    {
        $project:{
            _id:0,
            id:1,
            vendedor:1,
            cliente:"$cliente.nombre"
        }
    },
    {
        $out:"VendedorCliente"
    }
])
//Creamos una colección con los proveedores y las veces que han proporcionado productos en estas ventas
db.ventas.aggregate([
    {
        $project:{
            nombre:{
                $concatArrays:[
                    "$item.características.marca"
                ]
            }
        }
    },
    {
        $unwind: {
            path: "$nombre"
        }
    },
    {
        $group:{
            _id: "$nombre",
            nProvisiones: {
                $sum:1
            }
        }
    },
    {
        $project:{
            _id:0,
            nombre:"$_id",
            nProvisiones:"$nProvisiones"
        }
    },
    {
        $sort:{
            provisiones: -1
        }
    },
    {
        $out: "proveedores"
    }
])
//Beneficio generado por cada vendedor ordenado de mayor a menor
db.ventas.aggregate([
    {
        $unwind: {
            path: '$item'
        }
    },
    {
        $project: {
            _id: 0,
            vendedor: '$vendedor',
            costeTotal: {
                $multiply: [
                    '$item.precioCompra',
                    '$item.unidades'
                ]
            },
            dineroTotal: {
                $multiply: [
                    '$item.precioVenta',
                    '$item.unidades'
                ]
            }
        }
    },
    {
        $group: {
            _id: '$vendedor',
            beneficioTotal: {
                $sum: {
                    $subtract: [
                        '$dineroTotal',
                        '$costeTotal'
                    ]
                }
            }
        }
    },
    {
        $sort:{
            beneficioTotal:-1
        }
    }
])

/* RESULTADO: 
[
  { _id: 'Juan', beneficioTotal: 279 },
  { _id: 'Lucas', beneficioTotal: 195 },
  { _id: 'Daniel', beneficioTotal: 128 },
  { _id: 'Manuel', beneficioTotal: 88 }
]
*/

//Media de dinero generado por venta
db.ventas.aggregate([
    {
        $unwind: {
            path: '$item'
        }
    },
    {
        $project: {
            _id: 0,
            id: 1,
            dineroTotal: {
                $multiply: [
                    '$item.precioVenta',
                    '$item.unidades'
                ]
            }
        }
    },
    {
        $group: {
            _id: '$id',
            media: {
                $avg: {
                    $sum: '$dineroTotal'
                }
            }
        }
    },
    {
        $project: {
            _id: 1,
            media: {
                $round: ['$media',0]
            }
        }
    },
    {
        $sort: {
            _id: 1
        }
    }
])

/* RESULTADO: 
[
  { _id: 1, media: 220 },
  { _id: 2, media: 265 },
  { _id: 3, media: 778 },
  { _id: 4, media: 309 },
  { _id: 5, media: 199 },
  { _id: 6, media: 279 },
  { _id: 7, media: 394 },
  { _id: 8, media: 399 },
  { _id: 9, media: 279 },
  { _id: 10, media: 220 }
]
*/

//Las ventas realizadas por Manuel o Lucas que no han hecho envio 
db.ventas.aggregate([
    {
        $match: {
            $and: [{$or: [{vendedor: 'Manuel'},{vendedor: 'Lucas'}]},{'envío': false}]
        }
    },
    {
        $project: {
            _id:0,
            id:1,
            envío:1,
            vendedor:1
        }
    }
])

/* RESULTADO: 
[
  { id: 2, 'envío': false, vendedor: 'Manuel' },
  { id: 6, 'envío': false, vendedor: 'Manuel' },
  { id: 7, 'envío': false, vendedor: 'Lucas' }
]
*/

//Desde la colección vendedorcliente, ver las ventas con envio junto con el vendedor y el cliente
db.VendedorCliente.aggregate([
    {
        $lookup: {
            from: 'ventas',
            localField: 'id',
            foreignField: 'id',
            as: 'venta'
        }
    }, {
        $unwind: {
            path: '$venta'
        }
    }, {
        $project: {
            _id: 0,
            id: 1,
            vendedor: 1,
            cliente: 1,
            envio: '$venta.envío'
        }
    }, {
        $match: {
            envio: true
        }
    }
])

/* RESULTADO: 
[
  { id: 1, vendedor: 'Lucas', cliente: 'Claudio Quero', envio: true },
  { id: 3, vendedor: 'Daniel', cliente: 'Martin Morcillo', envio: true },
  { id: 4, vendedor: 'Juan', cliente: 'Roberto Patiño', envio: true },
  { id: 9, vendedor: 'Manuel', cliente: 'Alexander Coll', envio: true },
  { id: 10, vendedor: 'Juan', cliente: 'Enrique Pineda', envio: true }
]
*/