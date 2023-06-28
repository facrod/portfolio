document.addEventListener('DOMContentLoaded', () => {
    window.location.hash = "#inicio"
    const botonA = document.getElementById("botonA")
    const botonS = document.getElementById("botonS")
    const botonP = document.getElementById("botonP")
    const botonC = document.getElementById("botonC")

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
          behavior: "smooth"
        });
      }
    }
  });


  window.addEventListener("scroll", function() {
    const elemento = document.getElementById("presentacion");
    const posicionElemento = elemento.getBoundingClientRect().top;
    const alturaVentana = window.innerHeight;
  
    if (posicionElemento < alturaVentana) {
      elemento.classList.add("presentacion");
    }
  });
