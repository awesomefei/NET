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

const skyBlue = '#87CEFA';
enum ProductStatus {
    InStock, OutOfStock, Unknown
}
let available = ProductStatus.OutOfStock;
console.log(available);