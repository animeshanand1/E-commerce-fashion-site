const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

fetch("https://fakestoreapi.com/products")
  .then((response) => {
    //console.log(response.json());
    return response.json();
  })
  .then((data) => {
    // console.log(data[2].title);
    let Data1 = "";
    data.map((values) => {
      Data1 += 
      `<div class="card">
      
            <h2 class="title">${values.title}</h2>
            <img src=${values.image} alt="img" class='images'/>
            <p class='description'>${values.description}</p>
            <div class='card-footer'>
            <p class="category">${values.category}</p>
            <h4 class="price">${values.price}$</h4></div>
        </div>`;
    });
    document.getElementById("cards").innerHTML = Data1;
  })
  .catch((error) => {
    console.log(error);
  });
