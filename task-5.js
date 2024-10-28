const product = {
  type: "t-shirt",
  color: "green",
  brand: "Awesome Tees",
  price: 19.99,
};

const newKey = "material";
const newValue = "wool";

product.material = newValue;

let names = Object.keys(product);

for(let name of names){
  console.log(`${name}: ${product[name]}`);
}