function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

new Student("Петр Иванов");
new Student("Иван Сидоров");
new Student("Мария Петрова");

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    let marksProperty = this.hasOwnProperty("marks");
    if(marksProperty === true) {
        this.marks.push(...marks);
    }
  
}

Student.prototype.getAverage = function () {
    let marksProperty = this.hasOwnProperty("marks");
    if(marksProperty === false) {
        return 0;
    } else {
        return this.marks.reduce((acc, item)=> 
            acc+=item/this.marks.length, 0);
        } 
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
