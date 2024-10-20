fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {

        const tablaContainer = document.getElementById("tabla");
        let tabla = '';
        
        data.forEach(function(datos) {
            tabla += `<tr>
                        <td>${datos.id}</th>
                        <td>${datos.title}</td>
                        <td>${datos.body}</td>
                        <td>${datos.userId}</td>
                    </tr>`
        })
        tablaContainer.innerHTML= tabla;

        
      })

fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then(response => response.json())
      .then(dataCard => {
        
        const cardContainer = document.getElementById("card");
        let card = `<div class="col">
                <div class="card">
                <img src="${dataCard[0].url}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3 class="card-title">${dataCard[0].id}</h5>
                        <h5 class="card-title">${dataCard[0].title}</h5>
                        <p class="card-text">${dataCard[0].albumId}</p>
                    </div>
                </div>
            </div>`;
        cardContainer.innerHTML = card;
      })



    