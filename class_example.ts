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

