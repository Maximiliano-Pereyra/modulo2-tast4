const api = "https://mh-amazing.herokuapp.com/amazing";
fetch(api)
    .then(response => response.json())
    .then(data => mainArray(data))
const mainArray = (data) => {
    let id = new URLSearchParams(location.search).get('id');
    const persona = data.events.find(item => item.id === id)
    console.log(persona)

    const div = document.getElementById("containerDetail")
    div.innerHTML =
        ` <div class="container card" height="60vh%" width="80vw" >
<img src="${persona.image}" class="container" style="border-solid-dark" alt="..." width="280px" height="200px" </img>
                           <h5 class="card-title"> ${persona.name}</h5>
                           <p class="card-text"> Date: ${persona.date}</p>
                           <p class="card-text"> Description: ${persona.description}</p>
                           <p class="card-text"> Category: ${persona.category}</p>
                           <p class="card-text"> Place: ${persona.place}</p>
                           <p class="card-text"> Capacity: ${persona.capacity}</p>
                           <p class="card-text"> Assistance/Estimate: ${persona.assistance ? persona.assistance : persona.estimate}</p>  
                           <p>Price: ${persona.price}</p>
                           <a href="/htmls/details.html?id${persona.id}" class="btn btn-primary btnCard">Buy</a>
                           </div>
                           `
}