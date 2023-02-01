

const inputField = document.getElementsByClassName('task-input');


window.onload=function(){
   
const form = document.querySelector('.form');



// const searchInput = document. querySelector('.filter');
const tasks = document.querySelector('.tasks');


const removeAL1Btn = document. querySelector('.cleare-tasks')
const msgBox = document.querySelector('.msg');
form.addEventListener("submit", hundler)
tasks.addEventListener("click",callback)

removeAL1Btn.addEventListener("click",()=>removeAll(tasks))

// searchInput.addEventListener("keyup",search)



  


function hundler(e){
    e.preventDefault()
   
        let li = document.createElement("li")
        li.classList.add("tasks")
        // let text =document.createElement("p")
        // // text.innerHTML="ok abdin"
        // li.appendChild(text)
        
        li.appendChild(document.createTextNode(inputField[0].value))
     
        const div = document.createElement("div")
        div.classList.add("icon")
        let remove = document.createElement("a")  
          
        remove.classList="remove"   
        remove.innerHTML="🔴"
        let done = document.createElement("a")    
        done.classList="done"   
        done.innerHTML="✅"
        div.appendChild(remove)
        div.appendChild(done)
     
        li.appendChild(div)
        tasks.appendChild(li)
        inputField[0].value=""
        
        msgBox.classList.add("hied")
    }

}


const callback = (e)=>{
    if(e.target.classList.contains("remove")){
        e.target.parentElement.parentElement.remove()
    }else if(e.target.classList.contains("done")) {
        e.target.parentElement.parentElement.style.background="#9dd9d2"
        e.target.parentElement.parentElement.style.color="#white"
        
    }
    // const search=(e)=>{
    //    const textInpot = e.target.value.toLowerCase();
    //    document.querySelector(".tasks").forEach(function(item1) {
    //     const item = item1.firstChild.textContent
    //     if(item.toLowerCase().indexOf(textInpot) != -1){
    //         item.style.display = 'block';
            
    //         } else { 
    //             item.style.display = 'none';
            
    //         i}
            
        
    //    });

    // }

}


const removeAll = (tasks)=>{
    if(confirm("are you sure")){
        tasks.innerHTML=""
    }

   
    


}

const searchInput = document.querySelector('.filter-input'); 
console.log(searchInput)
const tasks = document.querySelector('.tasks'); 
const search = (e) => { 
   const textInpot = e.target.value.toLowerCase(); 
   const taskList = document.querySelectorAll(".tasks"); 
   taskList.forEach(function(item) { 
    const taskText = item.firstChild.textContent;
    if(taskText.toLowerCase().indexOf(textInpot) != -1){ 
        item.style.display = 'block'; 
         
        } else {  innerHeight;
            item.style.display = 'none'; 
         
        } 
   }); 
} 

searchInput.addEventListener("keyup", search)