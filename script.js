document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");

  ramos.forEach(ramo => {
    const prereqs = ramo.dataset.prerrequisitos.split(',').filter(Boolean);
    if (prereqs.length > 0 && !prereqs.every(id => localStorage.getItem(id) === "aprobado")) {
      ramo.classList.add("bloqueado");
      ramo.onclick = null;
    } else {
      ramo.onclick = () => toggleRamo(ramo);
    }

    if (localStorage.getItem(ramo.dataset.id) === "aprobado") {
      ramo.classList.add("aprobado");
    }
  });
});

function toggleRamo(ramo) {
  if (ramo.classList.contains("bloqueado")) return;

  const id = ramo.dataset.id;
  if (ramo.classList.contains("aprobado")) {
    ramo.classList.remove("aprobado");
    localStorage.removeItem(id);
  } else {
    ramo.classList.add("aprobado");
    localStorage.setItem(id, "aprobado");
  }

  location.reload(); // recarga para actualizar bloqueos
}
