let fom=document.querySelector("form").addEventListener("submit",myform);
let title=localStorage.getItem("title2")

function myform(event){
    event.preventDefault();
    let name=document.querySelector("#task1").value
    let gender=document.querySelector("#task2").value
    let role=document.querySelector("#task3").value
    let email=document.querySelector("#task4").value
    let password=document.querySelector("#task5").value
    
   
 
    let obj={
      name,gender,email,role,password
    }


    fetch("https://repulsive-rose-hat.cyclic.app/user/signup",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(obj)
    }).then(res=>res.json()).then(res=>{
        console.log(res)
        
        localStorage.setItem("title2",res.msg)
    } ).catch((err)=>console.log(err))
    myTable(title)
    document.querySelector("form").reset();
   

}


function myTable(title){
    let hh=document.querySelector("#display-respo")
    hh.innerText=title
}