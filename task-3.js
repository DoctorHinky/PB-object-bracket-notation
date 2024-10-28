const product = {
  type: "t-shirt",
  brand: "Awesome Tees",
  price: 19.99,
  colors: ["green", "yellow", "pink"], 
  sizes: ["S", "M", "L"],
  material: "organic cotton",
};
const names = Object.keys(product);


for(let i = 0; i < names.length; i++){
  console.log(product[names[i]]);
}

console.log('');


for(let name of names){
  console.log(product[name]);
}