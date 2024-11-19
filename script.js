// adding element
const container = document.getElementsByTagName("ul")[0];
const inputFeild = document.getElementsByTagName("input")[0];
function addTask(){
    if(inputFeild.value ===''){
        alert("please enter something")
    }
    else{
        const container = document.getElementsByTagName("ul")[0];
        const newElement = document.createElement("li");
        newElement.setAttribute("class","hvr")
        newElement.innerHTML=inputFeild.value;
        container.append(newElement);
        inputFeild.value =''
        const span = document.createElement("span");
        newElement.append(span);
        newElement.addEventListener("click", function(){
            newElement.classList.toggle("chk");
        })
        span.addEventListener("click", function(){
            newElement.remove();
        })
      save();
    }
}


const button = document.getElementById("btn");
button.addEventListener("click", addTask);

function save(){
    const list = document.getElementById("task");
    const listHTML= list.innerHTML;
    localStorage.setItem('listHTML',listHTML);
}
