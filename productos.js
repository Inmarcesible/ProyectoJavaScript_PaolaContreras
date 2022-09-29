class Producto{
    constructor(tipoproducto, id, nombre, precio, cantidad){
        this.tipoproducto = tipoproducto;
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
  }

productos = [
    new Producto("Mermelada",1,"Frambueza",1000,5),
    //new Producto("Mermelada",2,"Mora",1000,5),
    //new Producto("Mermelada",3,"Uva",1000,2),
    //new Producto("Conserva",1,"Durazno",1000,6),
    //new Producto("Conserva",2,"Guinda",1000,6),
]

let accion;
let tipo;
let identif;
let desc;
let valor;
let cant;

function imprimirtodo(){
    let mensaje = "Stock\n";

    for(const item of productos){
        mensaje = mensaje + "Producto: " +  item.tipoproducto + ", ID: "+item.id+", Nombre: "+item.nombre+", Precio: "+item.precio+", Cantidad: "+item.cantidad+"\n";
    } 

    return mensaje;
}

function avaluoTotalProductos(){
    let total = 0;
    for(const item of productos){
        total = total + (item.precio*item.cantidad);
    } 
    return total;
}

function BuscarTipoProducto(ptipo){
    let filtrados = productos.filter(item => item.tipoproducto.toLowerCase() === ptipo.toLowerCase());

    if (!filtrados) {
        return "El tipo de producto "+ptipo+"no se encuentra en stock";
    }
    
    let mensaje = "El stock de productos tipo "+ptipo+" es de : \n";
    filtrados.forEach(item => {
            mensaje = mensaje + `[ID: ${item.id}, Nombre: ${item.nombre}, Precio: ${item.precio}, Cantidad: ${item.cantidad}]\n`;
    }) 
    return mensaje;
}

function BuscarProducto(pnombre){
    let filtrados = productos.filter(item => item.nombre.toLowerCase() === pnombre.toLowerCase());

    if (!filtrados) {
        return "El tipo de producto "+pnombre+"no se encuentra en stock";
    }
    
    let mensaje = "Detalle stock productos "+pnombre+": \n";
    filtrados.forEach(item => {
            mensaje = mensaje + `Producto: ${item.tipoproducto}, ID: ${item.id}, Precio: ${item.precio}, Cantidad: ${item.cantidad}`;
    }) 
    return mensaje;
}

function VenderProducto(ptipo,pnombre){
    let venta;
    for(const item of productos){
        if (item.tipoproducto.toLowerCase() === ptipo & item.nombre.toLowerCase() === pnombre){
            if (item.cantidad > 0){
                item.cantidad = item.cantidad-1;
                venta = true;
            }
        }
    } 
    if (venta===true){
        return "Venta exitosa";
    }
    else {
        return "Producto no existe en stock";
    }
}


//accion = 1;
/*
do {
    
    do {
        accion = parseInt(prompt("Que desea hacer:\n 1- Ingresar un nuevo producto\n 2- Ver los productos\n 3- El monto total en mercancia \n 4- Buscar un tipo de producto \n 5-Buscar un producto por el Nombre\n 6- Vender un producto\n 7- TERMINAR & VER EL HTML.").toUpperCase());
    } while (accion > 7 || accion <= 0 || accion === null || accion === "" || isNaN(accion))  
    
    //accion = accion +1;
    switch (accion) {
        
        case 1:
            // ingresa un producto
            do {
                tipo = prompt("Ingrese el tipo de Producto").toUpperCase();
            } while (tipo === null || tipo === "") 

            do {
            identif = parseInt(prompt("Ingrese id del producto").toUpperCase());
            } while (identif === null || identif === "" || isNaN(identif))  
            
            do {
                desc = prompt("Ingrese el detalle del producto (nombre)").toUpperCase();
            } while (desc === null || desc === "") 

            do {
                valor = parseInt(prompt("Ingrese el precio del producto").toUpperCase());
            } while (valor === null || valor === "" || isNaN(valor)) 
            
            do {
                cant = parseInt(prompt("Ingrese stock del producto").toUpperCase());
            } while (cant === null || cant === "" || isNaN(cant)) 
            
            productonuevo = new Producto(tipo,identif,desc,valor,cant);
            productos.push(productonuevo);

            break;

        case 2:
            //console.log(imprimirtodo()); 
            alert(imprimirtodo());
            break;
        
        case 3:
            //console.log("El total monetario en mercancia es de :"+ avaluoTotalProductos()); 
            alert("El total monetario en mercancia es de : $"+ avaluoTotalProductos());
            break;

        case 4:
            let tipoProd = prompt("Ingrese el Tipo de producto a buscar");//"Mermelada";
            //console.log(BuscarTipoProducto(tipoProd));
            alert(BuscarTipoProducto(tipoProd));
            break;
        
        case 5:
            let desnombre = prompt("Ingrese el Nombre del producto a buscar");//"Frambueza";
            //console.log(BuscarProducto(desnombre));
            alert(BuscarProducto(desnombre));
            break;

        case 6:
            let tipoProdv = prompt("Ingrese el Tipo de producto a buscar").toLowerCase();
            let descripcion = prompt("Ingrese el Nombre del producto a buscar").toLowerCase();
            //console.log(VenderProducto(tipoProdv,descripcion));
            alert(VenderProducto(tipoProdv,descripcion));
            break;
    }

} while (accion != 7) 
*/

let formulario = document.getElementById("formulario");
let contenido = document.getElementById("contenido");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    contenido.innerHTML = "";
    let inputs = e.target.children;
    console.log(inputs[1].value);
    console.log(inputs[3].value);
    console.log(inputs[5].value);
    console.log(inputs[7].value);
    console.log(inputs[9].value);

    let productonuevo = new Producto(inputs[1].value,inputs[3].value,inputs[5].value,inputs[7].value,inputs[9].value);
    productos.push(productonuevo);
  
    contenido.innerHTML = "<h4>Productos</h4>";
    for (const item of productos){ //for (const item of productos){
        let div = document.createElement("div");
        div.innerHTML = `<div class="col-12 col-sm-6 col-md-4 col-xl-3">
            <div><b class="detalleprod">Clasificacion: ${item.tipoproducto}</b></div>
            <div><p class="detalleprod">ID: ${item.id}</p></div>
            <div><p class="detalleprod">Nombre: ${item.nombre}</p></div>
            <div><p class="detalleprod">Precio: $${item.precio}</p></div>
            <div><p class="detalleprod">Stock: ${item.cantidad}</p></div>
        </div>`;
        contenido.append(div);
    }
  
    inputs[1].value = "";
    inputs[3].value = "";
    inputs[5].value = "";
    inputs[7].value = "";
    inputs[9].value = "";
  })



