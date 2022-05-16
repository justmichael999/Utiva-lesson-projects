// console.log("Hello World!!!")
// const firstName= "John";
// console.log(firstName);

// const lastname="Smith";
// const age= 28;
// const adult=true;

// console.log(firstName);
// console.log(lastname);
// console.log(age);
// console.log(adult);

// // const job;
// let container= "someething";
// console.log(container);


// container= 1;

// console.log(container);

// // console.log(job);
// const thisYear =2022;

// const johnYear= thisYear -28;
// const markYear= thisYear -34;

// console.log(markYear)
// console.log(johnYear)
// console.log(johnYear>markYear)

// // typeof operator
// console.log(typeof thisYear)

// /************** 
// *if and else statement
// */

// const firstName= "John";
// const maritalStatus="single";

// if (maritalStatus ==="married"){
//     console.log(`${firstName} is married.`);
// } else{
//     console.log(`${firstName} will hopefully marry soon`);
// // }

// /******************
//  *Arrays
//  */
//     const names= ["John", "Mark", "Jane",]

//     console.log(names);
//     console.log(names[0]);
//     console.log(names.length);

//     names[4]= "Mary";
//     console.log(names);

//     names.push("Vick");
//     names.unshift("Ola");
//     console.log(names);

    /*************
     * Objects
     */

    const john ={
        picture: "https://www.where-my-picture-is.jpg",
        name: "John Smith",
        phone:"09010785968",
        email:"michaeloparah3@gmail.com",
        age: "20",
        isMarried: true,
    };
    
        const mark ={
        picture: "https://www.where-my-picture-is.jpg",
        name: "John Smith",
        phone:"09010785968",
        email:"michaeloparah3@gmail.com",
        age: "20",
        isMarried: true,
    };

    const people = [john, mark];

    console.log(john);


    const onlyHisEmail = john.email;
    console.log(onlyHisEmail);

    delete john.isMarried;
    console.log(john);






