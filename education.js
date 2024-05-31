var data = [
    { certificate:"Certificat en informatique", institution:"Universite de Sherbrooke", year:"2018-2021" }
]

function addEducation(data){
    console.log("aaaa");
    let root = document.createElement("ul");
    root.style = "list-style-type:none";

    let element = document.createElement("li");
    element.innerHTML = "<b>"+ data.institution +"</b>"+"\t\t"+data.year;
    root.appendChild(element);

    let element2 = document.createElement("li");
    element2.innerHTML = data.certificate;
    root.appendChild(element2);

    return root;
}

function renderData(data){
    data.forEach(function(row){
        document.getElementById("education").appendChild(addEducation(row));
        document.getElementById("education").appendChild(document.createElement("hr"))
    })
}

renderData(data);