const student = {
    studentName : 'Rahul',
    age: 25,
    mark:80,
    isCleaned: true,
    exam: function(){
        return this.mark
    }
    ,
    adress:{
       first: '35/A dinajpur',
       second:'third'
    },
    friend:['lala', 'lili']

}

const {studentName, age, ...adress} = student;

console.log(adress)
