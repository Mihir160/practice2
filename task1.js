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

const info = student.exam()
console.log(info)
const info1 = student.friend
console.log(info1)

