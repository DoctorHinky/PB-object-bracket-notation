const product = {
  type: "t-shirt",
  brand: "Awesome Tees",
  price: 19.99,
  colors: ["green", "yellow", "pink"], 
  sizes: ["S", "M", "L"],
  material: "organic cotton",
};

const keys = ["type", "brand", "id", "material", "details"];


for(let key of keys){
  let msg = product[key] ? product[key] : `this product does not have a ${key} property`

  console.log(msg);
}
