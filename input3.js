let fom=document.querySelector("#form-1").addEventListener("submit",myform);

function myform(event){
    event.preventDefault();
    let name=document.querySelector("#task1").value
    let author=document.querySelector("#task2").value
    let status=document.querySelector("#task3").value
    let category=document.querySelector("#task4").value
   
    
   
 
    let obj={
      name,author,category,status
    }


    fetch("https://repulsive-rose-hat.cyclic.app/books/add",{
        method:"POST",
        headers:{
            "Content-type":"application/json",
            "Authorization":localStorage.getItem("token")
        },
        body:JSON.stringify(obj)
    }).then(res=>res.json()).then(res=>console.log(res) ).catch((err)=>console.log(err))
    
    document.querySelector("form").reset();
    // let hh=document.querySelector("#display-respo")
    // hh.innerText=title

}


