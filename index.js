const botonA = document.getElementById("botonA")
const botonS = document.getElementById("botonS")
const botonP = document.getElementById("botonP")
const botonC = document.getElementById("botonC")

const sectionA = document.getElementById("presentacion")
const sectionB = document.getElementById("skills")
const sectionC = document.getElementById("paginas")
const sectionD = document.getElementById("contactos")

document.addEventListener("DOMContentLoaded", () => {
    window.location.hash = "#inicio"

    botonA.addEventListener("click", () => {
        scrollToSection("presentacion");
      });

    botonS.addEventListener("click", () => {
      scrollToSection("skills");
    });

    botonP.addEventListener("click", () => {
      scrollToSection("paginas");
    });

    botonC.addEventListener("click", () => {
      scrollToSection("contactos");
    });

    function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",

        });
      }
    }
  });

window.addEventListener("scroll", function() {
  pintar (sectionA, botonA)
  pintar (sectionB, botonS)
  pintar (sectionC, botonP)
  pintar (sectionD, botonC)

  });

  function pintar (section, boton) {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    const windowPosition = window.scrollY;
  
    if (windowPosition >= sectionTop && windowPosition < sectionBottom) {
      boton.style.color = "yellow";
      boton.style.fontWeight = "bold";
    } else {
      boton.style.color = "white";
      boton.style.fontWeight = "normal";
    }
  }


const botonDescarga = document.getElementById("descargar")


