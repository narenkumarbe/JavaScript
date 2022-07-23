const apiUrl = "https://fakestoreapi.com/products";
fetch(apiUrl)
  .then((data) => {
    //   console.log(data);
    return data.json();
  })
  .then((completedata) => {
    // console.log(completedata);
    let data1 = "";
    completedata.map((values) => {
      data1 += `<div class="card">
        <h1 class="title">${values.title}</h1>
        <img src= ${values.image} alt="img" class="images" />
        <p>${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
      </div>`;
    });
    console.log(data1);
    document.getElementById("cards1").innerHTML = data1;
  })
  .catch((err) => {
    console.log(err);
  });
