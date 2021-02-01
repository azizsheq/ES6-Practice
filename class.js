class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "School Name";
    }
}

const student1 = new Student(12, "Shuvo");
const student2 = new Student(13, "Mahi");
console.log(student1, student2);
