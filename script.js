document.addEventListener("DOMContentLoaded", function () {
    // Jerarquía
    const jerarquiaList = document.querySelector("#jerarquia ul");
    const jerarquiaData = [
        { title: "Voluntario de Segunda (En Comisión)", description: "Formación inicial y apoyo en tareas diarias." },
        { title: "Voluntario de Segunda", description: "Participación en entrenamientos y misiones bajo supervisión." },
        { title: "Voluntario de Primera", description: "Apoyo operativo y participación en patrullas." },
        // ... agregar más elementos a la jerarquía
    ];
    jerarquiaList.innerHTML = jerarquiaData
        .map((item, index) => {
            return `
                <li>
                    <span>${index + 1}</span>
                    <strong>${item.title}</strong>
                    <p>${item.description}</p>
                </li>
            `;
        })
        .join("");

    // Reglamento
    const reglamentoList = document.querySelector("#reglamento ul");
    const reglamentoData = [
        { title: "ARTÍCULO 1: Comunicación" },
        { title: "ARTÍCULO 2: Conducta Inapropiada" },
        { title: "ARTÍCULO 3: Publicidad y Promociones" },
        { title: "ARTÍCULO 4: Respeto y Convivencia" },
        { title: "ARTÍCULO 5: Sanciones" },
        { title: "ARTÍCULO 6: Contacto con los Moderadores" },
        { title: "ARTÍCULO 7: Soporte Técnico y Ayuda" },
    ];
    reglamentoList.innerHTML = reglamentoData
        .map((item, index) => {
            return `
                <li>
                    <strong>${index + 1}</strong>
                    <p>${item.title}</p>
                </li>
            `;
        })
        .join("");
});