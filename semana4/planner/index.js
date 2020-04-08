/*Input funcionalities*/
const daysList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
let task = document.getElementById('taskCatcher');
let hour = document.getElementById('hourCatcher').value;
let taskIndex = 1;
let creatTask = () =>{
    let hour = document.getElementById('hourCatcher').value;
    let day = document.getElementById('daySelector')
    if((task.value).trim() === ''){
        alert('Insira algum texto!')
    }else{
        
        switch(day.value){
            case daysList[0]:
                document.getElementById('mondayBox').innerHTML += "<p class='task' id='task"+taskIndex+"' onclick='lineThrough("+taskIndex+")'>"+task.value+"("+hour+"h)"+"</p>"
                taskIndex ++
                break;
            case daysList[1]:
                document.getElementById('tuesdayBox').innerHTML += "<p class='task' id='task"+taskIndex+"' onclick='lineThrough("+taskIndex+"h)'>"+task.value+"("+hour+"h)"+"</p>"
                taskIndex ++
                break;
            case daysList[2]:
                document.getElementById('wednesdayBox').innerHTML += "<p class='task' id='task"+taskIndex+"' onclick='lineThrough("+taskIndex+"h)'>"+task.value+"("+hour+"h)"+"</p>"
                taskIndex ++
                break;
            case daysList[3]:
                document.getElementById('thursdayBox').innerHTML += "<p class='task' id='task"+taskIndex+"' onclick='lineThrough("+taskIndex+"h)'>"+task.value+"("+hour+"h)"+"</p>"
                taskIndex ++
                break;
            case daysList[4]:
                document.getElementById('fridayBox').innerHTML += "<p class='task' id='task"+taskIndex+"' onclick='lineThrough("+taskIndex+"h)'>"+task.value+"("+hour+"h)"+"</p>"
                taskIndex ++
                break;
            case daysList[5]:
                document.getElementById('saturdayBox').innerHTML += "<p class='task' id='task"+taskIndex+"' onclick='lineThrough("+taskIndex+"h)'>"+task.value+"("+hour+"h)"+"</p>"
                taskIndex ++
                break;
            case daysList[6]:
                document.getElementById('sundayBox').innerHTML += "<p class='task' id='task"+taskIndex+"' onclick='lineThrough("+taskIndex+"h)'>"+task.value+"("+hour+"h)"+"</p>"
                taskIndex ++
                break;
            default:
                document.getElementById('mondayBox').innerHTML += "<p class='task' id='task"+taskIndex+"' onclick='lineThrough("+taskIndex+"h)'>"+task.value+"("+hour+"h)"+"</p>"
                taskIndex ++
                break;
        }
    }
    task.value = '';
    hour = "";
}

let lineThrough =(indexOfTask) => {
    let modifTask = document.getElementById("task"+indexOfTask+"");
    modifTask.style.textDecoration = "line-through";
}
let clearTasks = (idDayBox)  =>{
    let tasksContainer = document.getElementById(idDayBox);
    tasksContainer.innerHTML = ""   
}



