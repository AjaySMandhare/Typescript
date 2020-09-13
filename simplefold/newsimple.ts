 export class NewSimple{

    name:String;
    Salary:Number;
    role:String;

    constructor(name,salary,role){
        this.name=name;
        this.Salary=salary;
        this.role=role;
    }
    
    display(){

            console.log(`
            ----------------------------------------------
            Name is :: ${this.name}
            Salary is :: ${this.Salary}
            Role is :: ${this.role} 
            `);
    }
}