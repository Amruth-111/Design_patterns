function Developer(name){
    this.name=name
    this.type='developer'
}

function Tester(name){
    this.name=name
    this.type="tester"
}

function Employee(){
    this.create=function(name,type){
        switch(type){
            case 1:
                return new Developer(name)
                break;
            case 2:
                return new Tester(name)
                break;
        }
    };

}

function say(){
    console.log(`${this.name} is a ${this.type},`)
}

const employeeFactory=new Employee()
const employees=[]
employees.push(employeeFactory.create("Amruth",1))
employees.push(employeeFactory.create("Krishna",2))
employees.push(employeeFactory.create("Karthik",2))
employees.push(employeeFactory.create("Naina",1))


employees.forEach(ele=>{
    say.call(ele)
})