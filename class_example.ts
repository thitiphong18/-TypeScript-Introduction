class Person {
    public constructor(private readonly name:string){
    }
    public getName(): string {
        return this.name;
    } 
}

const person = new Person("Jane");
console.log(person);
console.log(person.getName());

interface Shape {
    getArea: () => number;
}
class Rectangle1 implements Shape {
    public constructor(protected readonly width:number,protected readonly height:number) {}
    public getArea():  number {
        return this.width * this.height;
    }
}

const rect:Rectangle1 = new Rectangle1(50, 10) ;
console.log(rect);
console.log(rect.getArea());

