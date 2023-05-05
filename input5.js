
let arr1=JSON.parse(localStorage.getItem("members"))||[]


    fetch("https://repulsive-rose-hat.cyclic.app/user/",{
        method:"GET",
        headers:{
           
            "Authorization":localStorage.getItem("token")
        },
        
    }).then(res=>res.json()).then(res=>{
        localStorage.setItem("members",JSON.stringify(res.msg))
       
        console.log(res.msg)
    } ).catch((err)=>console.log(err))
    
   
   
    

mytable(arr1) 

function mytable(arr1){
arr1.forEach(function (ele,i){
    let r=document.createElement("tr")
    let name=document.createElement("th")
    let email=document.createElement("th")
    let gender=document.createElement("th")

    let role=document.createElement("th")
    let btn=document.createElement("th")
    btn.innerText="Delete"
   btn.addEventListener("click",function(){
    deletfav(ele,i)
    
   })
   
 
   
    name.innerText=ele.name
  email.innerText=ele.email
  gender.innerText=ele.gender
  role.innerText=ele.role
 
  r.append(name,email,gender,role,btn)
  document.querySelector("tbody").append(r)
});
} 

function deletfav(ele,i){
    arr1.splice(ele,1)
    console.log(arr1)
    localStorage.setItem("members",JSON.stringify(arr1))
    mytable(arr1)
    }