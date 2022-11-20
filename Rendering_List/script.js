let ul=document.getElementById("ul-list");
let li=document.createElement("li");


let addItem = () => {
    let inputValue=document.getElementById("input").value;
    li.innerHTML=inputValue;
  
    ul.appendChild(li);
     //console.log();
}
let btn=document.getElementById("btn");
btn.addEventListener("click",addItem);