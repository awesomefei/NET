// function add1(int:number):string{
//     var x = int + 1;
//     return x.toString();
// }
// var name1 = 'hello';
// var list = [];
// list.push(name1.split(''));
// console.log(list);
// list.forEach(function (ele){
//     console.log(ele + 1);
// })
// class Greeter {
//     constructor(
//         public name: string,
//     ){
//     }
//     public sayHello(): void{
// console.info('Hello, ' + this.name);
// console.info(`Hello,  ${this.name}`);
//         $('body h1').html(`Hello,  ${this.name}`);
//     }
// }
// var greeter = new Greeter('kids');
// greeter.sayHello();
var skyBlue = '#87CEFA';
var ProductStatus;
(function (ProductStatus) {
    ProductStatus[ProductStatus["InStock"] = 0] = "InStock";
    ProductStatus[ProductStatus["OutOfStock"] = 1] = "OutOfStock";
    ProductStatus[ProductStatus["Unknown"] = 2] = "Unknown";
})(ProductStatus || (ProductStatus = {}));
var available = ProductStatus.OutOfStock;
console.log(available);
//# sourceMappingURL=app.js.map