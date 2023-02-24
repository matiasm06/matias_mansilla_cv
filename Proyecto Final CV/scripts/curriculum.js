document.addEventListener("DOMContentLoaded", function(event) { 
    cargarImagen();
  });

function cargarImagen() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        let imgUrl = JSON.parse(this.responseText).results[0].picture.large;
        document.getElementById("foto").src = imgUrl;
    }
    xhttp.open("GET", "https://randomuser.me/api/?gender=male");
    xhttp.send();
  };

function EnviarContacto(){
  let msg = "Muchas gracias por contactarme " + document.getElementById("inputNombre").value;
  alert(msg + ".\nMe pondré en contacto contigo a la brevedad.");
};