
var band = false;
var bandM = false;

function limpiarB(){
    if(!band){
        console.log("entre",band);
        lugar_div = document.getElementById('crear_preguntaB');
        lugar = document.createElement("div");
        lugar.setAttribute("id","generalB");
        lugar.setAttribute("class","columns");
        lugar_div.appendChild(lugar);
        
        lugar1 = document.createElement("div");
        lugar1.setAttribute("class","column is-6");
        lugar.appendChild(lugar1);
    
        lugar2 = document.createElement("div");
        lugar2.setAttribute("class","column is-6");
        lugar.appendChild(lugar2);
    
        pregunta = document.createElement("label"); // crea un elemento html
        contenido_pre = document.createTextNode("Monto: "); // crea un texto para un elemento.
        pregunta.appendChild(contenido_pre); // agrega un texto en un elemento.
        lugar1.appendChild(pregunta);
        
        div_input = document.createElement("div");
        div_input.setAttribute("class","control has-icons-left has-icons-right");
        pregunta_texto = document.createElement("input"); // crea un elemento html
        pregunta_texto.setAttribute("type","texto");
        pregunta_texto.setAttribute("name","Monto");
        pregunta_texto.setAttribute("id","Monto");
        pregunta_texto.setAttribute("class","input");
        div_input.appendChild(pregunta_texto);
        
        span = document.createElement("span");
        span.setAttribute("class","icon is-small is-right");
        i =  document.createElement("i");
        i.setAttribute("id","Mcheck");
        i.setAttribute("class","fas");
        span.appendChild(i);
        
        div_input.appendChild(span);
        lugar1.appendChild(div_input);
    
        pregunta = document.createElement("label"); // crea un elemento html
        contenido_pre = document.createTextNode("REFERENCIA: "); // crea un texto para un elemento.
        pregunta.appendChild(contenido_pre); // agrega un texto en un elemento.
        lugar2.appendChild(pregunta);
    
        div_input = document.createElement("div");
        div_input.setAttribute("class","control");
        pregunta_texto = document.createElement("input"); // crea un elemento html
        pregunta_texto.setAttribute("type","texto");
        pregunta_texto.setAttribute("name","Referencia");
        pregunta_texto.setAttribute("class","input");
        div_input.appendChild(pregunta_texto);
        lugar2.appendChild(div_input);
        band = true;
      }
    else {
        console.log("aca voy",band);
            var div = document.getElementById("generalB");
            if(div){
                console.log("ya existe",band);
                div.remove();
            }
            band=false;
        }
 
    };
    function limpiarM(){
        if(!bandM){
            lugar_div = document.getElementById('crear_preguntaM');
            lugar = document.createElement("div");
            lugar.setAttribute("id","generalM");
            lugar.setAttribute("class","columns");
            lugar_div.appendChild(lugar);
            
            lugar1 = document.createElement("div");
            lugar1.setAttribute("class","column is-6");
            lugar.appendChild(lugar1);
        
            lugar2 = document.createElement("div");
            lugar2.setAttribute("class","column is-6");
            lugar.appendChild(lugar2);
        
            pregunta = document.createElement("label"); // crea un elemento html
            contenido_pre = document.createTextNode("Monto: "); // crea un texto para un elemento.
            pregunta.appendChild(contenido_pre); // agrega un texto en un elemento.
            lugar1.appendChild(pregunta);
            
            div_input = document.createElement("div");
            div_input.setAttribute("class","control");
            pregunta_texto = document.createElement("input"); // crea un elemento html
            pregunta_texto.setAttribute("type","texto");
            pregunta_texto.setAttribute("name","Monto");
            pregunta_texto.setAttribute("class","input");
            div_input.appendChild(pregunta_texto);
            lugar1.appendChild(div_input);
        
            pregunta = document.createElement("label"); // crea un elemento html
            contenido_pre = document.createTextNode("REFERENCIA: "); // crea un texto para un elemento.
            pregunta.appendChild(contenido_pre); // agrega un texto en un elemento.
            lugar2.appendChild(pregunta);
        
            div_input = document.createElement("div");
            div_input.setAttribute("class","control");
            pregunta_texto = document.createElement("input"); // crea un elemento html
            pregunta_texto.setAttribute("type","texto");
            pregunta_texto.setAttribute("name","Referencia");
            pregunta_texto.setAttribute("class","input");
            div_input.appendChild(pregunta_texto);
            lugar2.appendChild(div_input);
        
        
            bandM = true;
          }
        else{
            console.log("aca voy",band);
            var div = document.getElementById("generalM");
            if(div){
                console.log("ya existe",bandM);
                div.remove();
            }
            bandM=false;
          }
      };

    function cheked(){
       console.log("entro");
    };

function pregunta(){
    if (confirm('¿Estas seguro de enviar este formulario?')){
    }
    console.log("hola");
    var userInput = prompt("Please enter a value:");
  };
    


