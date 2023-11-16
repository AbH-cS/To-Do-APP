let add = document.getElementById("add")
let inputBox = document.getElementById("input")
let list = document.getElementById("listc")
let delete1 = document.getElementById("delete")

function addtask(){
    if(inputBox.value == ''){
        alert("You must write something")

        saveData()
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        list.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)

        saveData()
    }
    inputBox.value = ''
    saveData()
}

list.addEventListener('click',function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")

        saveData()
    }

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()

        saveData()
    }
})

function saveData(){
    localStorage.setItem("todo",list.innerHTML)
}

function displayData(){
   list.innerHTML = localStorage.getItem("todo")
}
displayData();

function del(){
    delete1.addEventListener('click',function(e){
        list.innerHTML = localStorage.clear()
        list.innerHTML = ''
    })
}
del()



