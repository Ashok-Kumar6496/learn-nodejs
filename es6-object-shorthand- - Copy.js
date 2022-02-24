//Object shorthand property
const name = 'Andrew';
const userAge = 23;

const user = {
    name,
    userAge
}

console.log(user)

//Object destructuring

const product = {
    pName:"Ice Cream",
    cost: 3,
    rating: 'good',
    manufacturer: 'Arun'
}

console.log(product);

const {rating, cost, pName:productName , isavailable=false} = product;
console.log(rating, cost, productName, isavailable)

const calculateProduct = (quantity, {cost, pName}) => {
    console.log('Total amount : ', quantity*cost);
    console.log("Product Name :" , pName);
}

calculateProduct(3, product);

