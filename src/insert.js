db.ventas.drop()
db.ventas.insertMany([
    {
        id:01,
        item:[
            {
                nombre:"A171WEG-9AEF",
                precioVenta:80,
                precioCompra:59,
                unidades:2,
                características:{
                    marca:"Casio",
                    peso:46,
                    profundidad:40,
                    tipo:"Digital"
                }
            },
            {
                nombre:"Elite 1513895",
                precioVenta:279,
                precioCompra:250,
                unidades:1,
                características:{
                    marca:"Hugo Boss",
                    peso:119,
                    profundidad:50,
                    tipo:"Analógico"
                }
            }
        ],
        fechaVenta: new Date("2019-07-28"),
        envío: true, 
        cliente:{
            nombre:"Claudio Quero",
            DNI:"49316098G"
        },
        vendedor:"Lucas"
    },
    {
        id:02,
        item:[
            {
                nombre:"Classic 19101-GD354130",
                precioVenta:265,
                precioCompra:235,
                unidades:1,
                características:{
                    marca:"Continental",
                    peso:45,
                    profundidad:30,
                    tipo:"Analógico"
                }
            }
        ],
        fechaVenta: new Date("2015-12-15"),
        envío: false, 
        cliente:{
            nombre:"Juan Carlos Arana",
            DNI:"83043748V"
        },
        vendedor:"Manuel"
    },
    {
        id:03,
        item:[
            {
                nombre:"16601-LT101831",
                precioVenta:389,
                precioCompra:345,
                unidades:2,
                características:{
                    marca:"Continental",
                    peso:45,
                    profundidad:30,
                    tipo:"Analógico"
                }
            }
        ],
        fechaVenta: new Date("2020-02-10"),
        envío: true, 
        cliente:{
            nombre:"Martin Morcillo",
            DNI:"16497016J"
        },
        vendedor:"Daniel"
    },
    {
        id:04,
        item:[
            {
                nombre:"Kappa AR80029",
                precioVenta:279,
                precioCompra:250,
                unidades:1,
                características:{
                    marca:"Emporio Armani",
                    peso:45.94,
                    profundidad:30,
                    tipo:"Analógico"
                }
            },
            {
                nombre:"Sigma AR11218",
                precioVenta:249,
                precioCompra:200,
                unidades:1,
                características:{
                    marca:"Emporio Armani",
                    peso:68,
                    profundidad:50,
                    tipo:"Analógico"
                }
            },
            {
                nombre:"Hero 1513767",
                precioVenta:399,
                precioCompra:350,
                unidades:1,
                características:{
                    marca:"Hugo Boss",
                    peso:148,
                    profundidad:50,
                    tipo:"Analógico"
                }
            }
        ],
        fechaVenta: new Date("2021-12-21"),
        envío: true, 
        cliente:{
            nombre:"Roberto Patiño",
            DNI:"32726329C"
        },
        vendedor:"Juan"
    },
    {
        id:05,
        item:[
            {
                nombre:"GBX-100-2ER",
                precioVenta:199,
                precioCompra:159,
                unidades:1,
                características:{
                    marca:"Casio",
                    peso:66,
                    profundidad:200,
                    tipo:"Digital"
                }
            }
        ],
        fechaVenta: new Date("2017-05-17"),
        envío: false, 
        cliente:{
            nombre:"Ricardo Jimenez",
            DNI:"73495140C"
        },
        vendedor:"Daniel"
    },
    {
        id:06,
        item:[
            {
                nombre:"Kappa AR80029",
                precioVenta:279,
                precioCompra:250,
                unidades:1,
                características:{
                    marca:"Emporio Armani",
                    peso:45.94,
                    profundidad:30,
                    tipo:"Analógico"
                }
            }
        ],
        fechaVenta: new Date("2022-01-03"),
        envío: false, 
        cliente:{
            nombre:"Federico Quiroga",
            DNI:"34405946Q"
        },
        vendedor:"Manuel"
    },
    {
        id:07,
        item:[
            {
                nombre:"GBX-100-2ER",
                precioVenta:199,
                precioCompra:159,
                unidades:2,
                características:{
                    marca:"Casio",
                    peso:66,
                    profundidad:200,
                    tipo:"Digital"
                }
            },
            {
                nombre:"16601-LT101831",
                precioVenta:389,
                precioCompra:345,
                unidades:1,
                características:{
                    marca:"Continental",
                    peso:45,
                    profundidad:30,
                    tipo:"Analógico"
                }
            }
        ],
        fechaVenta: new Date("2018-11-24"),
        envío: false, 
        cliente:{
            nombre:"Fabio Casado",
            DNI:"54059451K"
        },
        vendedor:"Lucas"
    },
    {
        id:08,
        item:[
            {
                nombre:"Hero 1513767",
                precioVenta:399,
                precioCompra:350,
                unidades:1,
                características:{
                    marca:"Hugo Boss",
                    peso:148,
                    profundidad:50,
                    tipo:"Analógico"
                }
            }
        ],
        fechaVenta: new Date("2019-04-08"),
        envío: false, 
        cliente:{
            nombre:"Miquel Minguez",
            DNI:"28025036L"
        },
        vendedor:"Juan"
    },
    {
        id:09,
        item:[
            {
                nombre:"Elite 1513895",
                precioVenta:279,
                precioCompra:250,
                unidades:1,
                características:{
                    marca:"Hugo Boss",
                    peso:119,
                    profundidad:50,
                    tipo:"Analógico"
                }
            }
        ],
        fechaVenta: new Date("2015-11-16"),
        envío: true, 
        cliente:{
            nombre:"Alexander Coll",
            DNI:"17312212C"
        },
        vendedor:"Manuel"
    },
    {
        id:10,
        item:[
            {
                nombre:"GBX-100-2ER",
                precioVenta:199,
                precioCompra:159,
                unidades:1,
                características:{
                    marca:"Casio",
                    peso:66,
                    profundidad:200,
                    tipo:"Digital"
                }
            },
            {
                nombre:"A171WEG-9AEF",
                precioVenta:80,
                precioCompra:59,
                unidades:3,
                características:{
                    marca:"Casio",
                    peso:46,
                    profundidad:40,
                    tipo:"Digital"
                }
            }
        ],
        fechaVenta: new Date("2020-07-18"),
        envío: true, 
        cliente:{
            nombre:"Enrique Pineda",
            DNI:"38298865R"
        },
        vendedor:"Juan"
    }
])