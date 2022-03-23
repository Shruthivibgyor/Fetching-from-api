//1.FetchMethod performs request,returns promise
//if fullfill the promise,to display the data-then methd used
//2.converting json file into object and passing it in console
//3.declaring a variable
//4.map method to access all the data,takes 3args(current value,indexnumber,array which we are working)
//5.

fetch('https://fakestoreapi.com/products').then((data)=>{
    //console.log(data)
    return data.json();
}).then((completedata)=>{
    //console.log(completedata);
    //document.getElementById('root').innerHTML=completedata[2].title;
  let data1="";
  completedata.map((values)=>{
      data1+= `<div class="card">
      <h1 class="title">${values.title}</h1>
      <img src=${values.image} alt="img" class="images">
      <p>${values.description}</p>
      <p class="category">${values.category}</p> 
      <p class="price">${values.price}</p>
  </div>`

  });
  document.getElementById("cards").innerHTML=data1;
}).catch((e)=>{
    console.log(e);

})
