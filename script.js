const resume={
    "name":"A.shek mohamed",
    "age":21,
    "emial":"shek3757@gmail.com",
    "phone No":999471481,

    "address":[{
        "Do.No":1,
        "street":"mullai street",
        "city":"v.chathiram",
        "distric":"erode",
        "state":"tamil nadu",
        "pin code":638004
    }],

    "education":[{
    
        "degree":"B.com.CA",
        "major":"arts",
        "collage":"SSM collage of arts and since",
        "graduation year":2023
       
        
    }],
    "skills":[
        "javascript",
        "HTML",
        "css"
    ]


}

//using for loop:

for (let key in resume){
  console.log(key,":",resume[key]);
}
 
//using for...in loop:
for(let key in resume){
  if(resume.hasOwnProperty(key)){
    console.log(key,":",resume[key]);
  }
}

//using for...of loop:

for (let address of resume.address){
  console.log("street:",address.street);
  console.log("city:",address.city);
  console.log("distric:",address.distric);
  console.log("stat:",address.state);
} 


//using for each:

resume.education.forEach((edu)=>{
  console.log("degree:",edu.degree);
  console.log("major:",edu.major);
  console.log("collage:",edu.collage);
  console.log("graduation year:",edu["graduation year"]);
})

  

  