var data = [
    { job:"Developper",comp:"Université de Sherbrooke, 2020",desc:"Javascript, frontend" },
    { job:"Developper",comp:"Stingray Music, 2019",desc:"Java, Gradle, Micro-Service, backend" },
    { job:"Developper",comp:"Banque Nationale Du Canada, 2019",desc:"SQL, powershell" },
    { job:"Auxiliaire Enseignement",comp:"Universite de Sherbrooke, 2020",desc:"Auxiliaire d'enseignement pour le cours ift099 " },
    { job:"Correcteur",comp:"Université de Sherbrooke, 2019-2020",desc:"Programation Orientée Objets (3x), Système d'exploitation (2x), Structure de donnees (1x)" },
]

function addExperience(data){
    let root = document.createElement("ul");
    root.style = "list-style-type:none";
    createListItem("li",data.job, root, true);
    createListItem("li",data.comp, root, false);
    createListItem("li",data.desc, root, false);
    return root;
}

function createListItem(tag, text, parent, bold){
    let element = document.createElement(tag);
    if(bold === true){
        element.innerHTML = "<b>"+ text +"</b>";
    }else{
        element.innerText = text;
    }
    parent.appendChild(element);
}


function renderData(data){
    data.forEach(function(row){
        document.getElementById("work").appendChild(addExperience(row));
    })
}

renderData(data);