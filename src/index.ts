// import App from './components/app/app';
import './global.css';

// const app: App = new App();
// app.start();


import Model from "./components/model/model";

const getPrice = new Model;
// console.log(getPrice.getDataFilterByPrice(10, 14));
// console.log(getPrice.getDataFilterByStock(2, 68));
// console.log(`category: ${getPrice.getDataFilterByCategory("smartphones")}`)

// console.log(`brand: ${getPrice.getDataFilterByBrand("Apple")}`)
console.log(getPrice.StartOrResetFilters())
// console.log(getPrice.getDataSortByNameIncrease())
// console.log(getPrice.getDataSortByNameDecrease())
// console.log(getPrice.getDataSortByDiscountDecrease())
// console.log(getPrice.getDataFilterBySearch('ded'))
// console.log(getPrice.getDataById(8))