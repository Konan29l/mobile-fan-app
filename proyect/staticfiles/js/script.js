document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".filtros input[type='checkbox']");
    const productos = document.querySelectorAll(".producto");

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", filtrarProductos);
    });

    function filtrarProductos() {
        let filtros = {
            marca: [],
            capacidad: []
        };

        document.querySelectorAll(".filtros input[type='checkbox']:checked").forEach(checkbox => {
            const parentText = checkbox.parentNode.innerText.trim().toLowerCase();
            const categoryHeader = checkbox.closest("ul").previousElementSibling.innerText;

            if (categoryHeader === "Marca") {
                filtros.marca.push(parentText);
            } else if (categoryHeader === "Capacidad") {
                filtros.capacidad.push(parentText);
            }
        });

        productos.forEach(producto => {
            let coincideMarca = filtros.marca.length === 0 || filtros.marca.includes(producto.dataset.marca);
            let coincideCapacidad = filtros.capacidad.length === 0 || filtros.capacidad.includes(producto.dataset.capacidad);

            producto.style.display = coincideMarca && coincideCapacidad ? "block" : "none";
        });
    }
});