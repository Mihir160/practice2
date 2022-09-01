
const student = {

    name: 'Pandey',
    job:'Khai andey',
    ball:function(){
        console.log('throw the ball')
    },
    salary: 10000,
    friend: ['mihir', 'ashiq', 'salaheen', 'antor']
}

const info = ` 
 my friend name is ${student.friend[2]}
 my name is ${student.name}
 my job ${student.job}

`
console.log(info)