let fom=document.querySelector("form").addEventListener("submit",myform);
let title=localStorage.getItem("title1")
function myform(event){
    event.preventDefault();

    let email=document.querySelector("#task1").value
    let password=document.querySelector("#task2").value
    
   
 
    let obj={
      email,password
    }


    fetch("https://repulsive-rose-hat.cyclic.app/user/login",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(obj)
    }).then(res=>res.json()).then(res=>{
        console.log(res)
        localStorage.setItem("token",res.token)
        localStorage.setItem("title1",res.msg)
    } ).catch((err)=>console.log(err))
    myTable(title)
    document.querySelector("form").reset();

}



function myTable(title){
    let hh=document.querySelector("#display-respo1")
    hh.innerText=title
}


