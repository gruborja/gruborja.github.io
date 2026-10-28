/* =========================================================
   GRUBORJA — PÁGINA DE INICIO
   Muestra los proyectos marcados con  destacado: true
   en data/proyectos.js
   ========================================================= */

const contenedorDestacados = document.querySelector("#destacados-grid");

if (contenedorDestacados) {
  PROYECTOS
    .filter((proyecto) => proyecto.destacado)
    .slice(0, 3) // máximo 3 para mantener la fila completa
    .forEach((proyecto) => {
      contenedorDestacados.appendChild(crearTarjetaProyecto(proyecto));
    });

  // Flechas del carrusel (solo se ven en tablet y móvil)
  document.querySelectorAll("[data-carrusel]").forEach((boton) => {
    boton.addEventListener("click", () => {
      const tarjeta = contenedorDestacados.querySelector("li");
      if (!tarjeta) return;
      const paso = tarjeta.getBoundingClientRect().width + 16;
      const sentido = boton.dataset.carrusel === "next" ? 1 : -1;
      contenedorDestacados.scrollBy({ left: paso * sentido, behavior: "smooth" });
    });
  });
}
