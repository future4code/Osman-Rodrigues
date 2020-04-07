/*Input funcionalities*/
const daysList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

let creatTask = () =>{
    let task = document.getElementById('taskCatcher');
    let day = document.getElementById('daySelector')
    
    switch(day.value){
        case daysList[0]:
            document.getElementById('mondayBox').innerHTML += "<p>"+task.value+"</p>"
            break;
        case daysList[1]:
            document.getElementById('tuesdayBox').innerHTML += "<p>"+task.value+"</p>"
            break;
        case daysList[2]:
            document.getElementById('wednesdayBox').innerHTML += "<p>"+task.value+"</p>"
            break;
        case daysList[3]:
            document.getElementById('thursdayBox').innerHTML += "<p>"+task.value+"</p>"
            break;
        case daysList[4]:
            document.getElementById('fridayBox').innerHTML += "<p>"+task.value+"</p>"
            break;
        case daysList[5]:
            document.getElementById('saturdayBox').innerHTML += "<p>"+task.value+"</p>"
            break;
        case daysList[6]:
            document.getElementById('sundayBox').innerHTML += "<p>"+task.value+"</p>"
            break;
        default:
            document.getElementById('mondayBox').innerHTML += "<p>"+task.value+"</p>"
            break;
    }
    task.value = '';
}



