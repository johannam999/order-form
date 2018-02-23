'use strict';
var allProducts=[];
var chosenProducts =[];
var clientInfo =[];
var pictureNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu',
  'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

function Product(name) {
  this.name = name;
  this.path = 'img/' + name + '.jpg';
  this.title = name;
  allProducts.push(this);
}

Product.prototype.productSelection = function(){
  var selectProd = document.getElementById('box');
  var pics = document.createElement('img');
  pics.src = this.path;
  pics.title = this.title;
  selectProd.appendChild(pics);

};
function createProducts(){
  for (var i = 0; i < pictureNames.length; i++) {
    var product = new Product(pictureNames[i]);
    product.productSelection();
  }
}
createProducts();

function createList(){
  var items = document.getElementById('products');
  for (var i = 0; i <pictureNames.length; i++){
    var options = document.createElement('option');
    options.textContent = pictureNames[i];
    items.appendChild(options);
  }
}
createList();
var add = document.getElementById('storeData-form');
add.addEventListener('submit', addToCart);


function addToCart(event){
  event.preventDefault();
  var item = event.target.products.value;
  var total = event.target.amount.value;

  chosenProducts.push({ item, total});
  add.reset();
  localStorage.savedProducts = JSON.stringify(chosenProducts);
}


var goCart = document.getElementById('client');
goCart.addEventListener('submit', goToCart);


function goToCart(event){
  event.preventDefault();
  var name = event.target.name.value;
  var street = event.target.street.value;
  var city = event.target.city.value;
  var zipCode = event.target.zipCode.value;
  var phoneNo = event.target.phoneNo.value;

  clientInfo.push({name,street,city,zipCode, phoneNo});
  event.target.reset();
  localStorage.savedProducts = JSON.stringify(clientInfo);
}