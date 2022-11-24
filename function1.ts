function getTime(): number {
    return new Date().getTime();
}
console.log(getTime());

function printHello(): void {
    console.log("Hello");
}
printHello();

function multiply(a: number , b:number):number {
    return a * b ;
}

console.log(multiply(1,2));

function add(a: number , b:number , c?:number):number {
    return a + b + (c || 0);
}

console.log(add(1,2,3));
console.log(add(1,2));

function pow(value: number , exponent = 10):number {
    return  value ** exponent ;
}

console.log(pow(10));
console.log(pow(10,2));

function divide({dividend, divisor }: {dividend: number ,divisor: number }) {
    return dividend / divisor;
}
console.log(divide({dividend: 100 ,divisor:10}));









