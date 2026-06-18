function verificar() {

    const cursos = [
     ["Engenharia Civil", "Exatas"],
     ["Ciência da Computação", "Exatas"],
     ["Matemática", "Exatas"],
     ["Direito", "Humanas"],
     ["História", "Humanas"],
     ["Geografia", "Humanas"],
     ["Medicina", "Natureza"],
     ["Biologia", "Natureza"],
     ["Enfermagem", "Natureza"],
     ["Letras", "Linguagens"],
     ["Jornalismo", "Linguagens"],
     ["Publicidade", "Linguagens"]
    ];

    const select = document.getElementById("selecione-area");
    const lista = document.getElementById("lista-curso");
    const areaSelec = select.value;
    const filtro = cursos.filter(curso => curso[1]  === areaSelec);

    lista.innerHTML = "";

    filtro.forEach(curso => {
        const li = document.createElement("li");
        li.innerText = curso[0];
        lista.appendChild(li);
    });
}