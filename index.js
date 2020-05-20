document.getElementById('jsonBtn').addEventListener('click', cargarJSON);

function cargarJSON(){


    fetch("super.json")

    .then(function(res){
    return res.json()
    })

    .then(function(data){

        const heroinas = data.filter( personaje => personaje.Rol == "Heroína")
       
        let html =""
        
        heroinas.forEach(function(chicas){
            html += `
            <img src = "${chicas.foto}">
            <li> Nombre: ${chicas.Nombre} <br> Poderes: ${chicas.Poderes}</li>
            <br>
            `

        })

        document.getElementById("resultado").innerHTML = html;
    })
    
}

document.getElementById('jsonBtnV').addEventListener('click', cargarJSONV);

function cargarJSONV(){


    fetch("super.json")

    .then(function(res){
    return res.json()
    })

    .then(function(data){

        const villanos = data.filter( personaje => personaje.Rol == "Villano")
       
        let html =""
        
        villanos.forEach(function(chicas){
            html += `
            <img src = "${chicas.foto}">
            <li> Nombre: ${chicas.Nombre} <br> Puesto: ${chicas.Color}</li>
            <br>
            `

        })

        document.getElementById("resultado").innerHTML = html;
    })
    
}



