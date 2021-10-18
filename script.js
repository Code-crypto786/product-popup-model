//totals products and jason data
const jasonData = [ {
    "title": "Handfhones",
    "imgSrc": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    "price": "$124",
    "description": "This is the description of the product.",
    "id": "01"
},
{
    "title": "Camera",
    "imgSrc": "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "price": "$199",
    "description": "This is the description of the product.",
    "id": "02"
}, 
{
    "title": "beuti products",
    "imgSrc": "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    "price": "$59",
    "description": "This is the description of the product.",
    "id": "03"
},
{
    "title": "unsplash creem",
    "imgSrc": "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    "price": "$199",
    "description": "This is the description of the product.",
    "id": "04"
   
}, {
    "title": "headfree",
    "imgSrc": "https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    "price": "$49",
    "description": "This is the description of the product.",
    "id": "05"
},
{
    "title": "creem",
    "imgSrc": "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    "price": "$109" ,
    "description": "This is the description of the product.",
    "id": "06"
   
}
]



//card show
let html = "";
jasonData.forEach(function(element, index) {
  html += `
  <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${element.imgSrc}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">
                <h3>${element.price}</h3>
                
                </p>
                <button onclick="myFun(${index})"  class="btn btn-primary">check description</button>
            </div>
        </div>
        
        `;
    
        
});
let productElm = document.getElementById("product");
if (jasonData.length != 0) {
  productElm.innerHTML = html;
} else {
  productElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
}
//model SHOW
function myFun(index){
    document.getElementById('id01').style.display='block';
    document.getElementById('price').innerHTML= jasonData[index].price;
    document.getElementById('description').innerHTML = jasonData[index].description;
}



var modal = document.getElementById('id01');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}