document.addEventListener("DOMContentLoaded", function (event) {
  cargarImagen();
});

function cargarImagen() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    let imgUrl = JSON.parse(this.responseText).results[0].picture.large;
    document.getElementById("foto").src = imgUrl;
  }
  xhttp.open("GET", "https://randomuser.me/api/?gender=male");
  xhttp.send();
};

function EnviarContacto(ev) {
  if (document.getElementById("inputNombre").value == "") {
    alert("Ingresar nombre.");
    CancelarEnvio("inputNombre", ev);
    return false;
  }
  if (document.getElementById("inputApellido").value == "") {
    alert("Ingresar apellido.");
    CancelarEnvio("inputApellido", ev);
    return false;
  }
  
  let mail = document.getElementById("inputEmail");
  if (mail.value == "" || !mail.validity.valid) {
    alert("Ingresar un Email válido.");
    CancelarEnvio("inputEmail", ev);
    return false;
  }
  
  if (document.getElementById("inputDescripcion").value == "") {
    alert("Ingresar la descripción del puesto.");
    CancelarEnvio("inputDescripcion", ev);
    return false;
  }
  let msg = "Muchas gracias por contactarme " + document.getElementById("inputNombre").value;
  alert(msg + ".\nMe pondré en contacto contigo a la brevedad.");
};

function CancelarEnvio(id, ev) {
  document.getElementById(id).focus();
  ev.preventDefault();
};