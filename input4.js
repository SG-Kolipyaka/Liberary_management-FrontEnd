
let arr1=JSON.parse(localStorage.getItem("books"))||[]


    fetch("https://repulsive-rose-hat.cyclic.app/books/",{
        method:"GET",
        headers:{
           
            "Authorization":localStorage.getItem("token")
        },
        
    }).then(res=>res.json()).then(res=>{
        localStorage.setItem("books",JSON.stringify(res))
       
        console.log(res)
    } ).catch((err)=>console.log(err))
    
   
   
    

mytable(arr1) 

function mytable(arr1){
arr1.forEach(function (ele,i){
    let r=document.createElement("tr")
    let name=document.createElement("th")
    let category=document.createElement("th")
    let status=document.createElement("th")

    let author=document.createElement("th")
   
 
   
    name.innerText=ele.name
  category.innerText=ele.category
  status.innerText=ele.status
  author.innerText=ele.author
 
  r.append(name,category,author,status)
  document.querySelector("tbody").append(r)
});
} 

