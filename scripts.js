const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostrarForm(){
    form.style.left = "50%"
    form.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"
}

function esconderForm() {
    form.style.left = "-300px";
    form.style.transform = "translatex(0)";
    mascara.style.visibility = "hidden";
}

function ajustarVolume(volume) {
    const audio = document.getElementById("myAudio");
    audio.volume = volume;
  }

  // Ajuste de volume inicial
  ajustarVolume(0.50); // Define o volume inicial para 20%