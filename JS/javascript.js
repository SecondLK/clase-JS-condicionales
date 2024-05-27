
let PrecioFinal;
let helado = 100;
let Oreo = 10
let KitKat = 15 
let Kinder = 25
let topping;
let precio;

if (topping == Oreo) {
    PrecioFinal = helado + Oreo;
    console.log( "El helado cuesta $" + PrecioFinal)
} else if ( topping == KitKat) {
    PrecioFinal = helado + KitKat;
    console.log("El helado cuesta $" + PrecioFinal);

} else if ( topping == Kinder) {
    PrecioFinal = helado + Kinder;
    console.log( "El helado cuesta $" + PrecioFinal)
} else{ 
    console.log("No tenemos ese topping")
}



let expr = "abc"

switch(expr) {
    case "carne":
    case "Carne":
    case "menu de carne":
    case "Menu de carne":
        console.log("Quiere vino tinto?")
        break;
    case "pescado":
    case "Pescado":
    case "menu de pescado":
    case "Menu de pescado":
        console.log("Quiere vino blanco?")
        break;   
    case "verduras":
    case "Verduras":
    case "menu de verduras":
    case "Menu de verduras":
        console.log("Quiere agua?")
        break;
    default:
        console.log("porfavor indique que menu quiere")
        break;
}


let ListaDeMenus = ["de Carne", "de Pescado", "de Verduras"];

for ( let menus = 0; menus < ListaDeMenus.length; menus++){
    console.log("Tenemos menu " + ListaDeMenus[menus])
}

ListaDeMenus.push("Mixto")
for ( let menus = 0; menus < ListaDeMenus.length; menus++){
    console.log("Tenemos menu " + ListaDeMenus[menus])
}


let numero = 0;
while( numero < 11) {
    console.log(numero + " es mas chico que 11");

    numero++;}
    
    function saludar(){
        let nombre = prompt("Como te llamas?");
        let saludo = ("Hola " + nombre);
        
        switch(nombre) {
          case "Segundo":
            text = "Buen dia Segundo";
            break;
          case "Valentino":
            text  = "Como estas, Valentino?";
            break;
          case "Martin":
            text = "Todo bien, Martin?";
            break;
         default:
            text = "Por favor ingrese su nombre";
        }
    alert(saludo)   
    }
saludar();
