function get_robot_choice(){
    let choice = Math.floor(Math.random() * 3);
    switch(choice)
    {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

const rock_btn = document.querySelector("#rock");
const human_score = document.querySelector(".human_score");
const robot_score = document.querySelector(".robot_score");

rock_btn.addEventListener("click", function(e) {
    let robot_choice = get_robot_choice();
    if(robot_choice === "rock"){
        alert("You drew! Rock vs Rock");
    }
    else if(robot_choice === "paper"){
        let new_robot_score = parseInt(robot_score.textContent, 10);
        new_robot_score++;
        robot_score.textContent = new_robot_score.toString();
        alert("You lost! Rock vs Paper");
    }
    else{
        let new_human_score = parseInt(human_score.textContent, 10);
        new_human_score++;
        human_score.textContent = new_human_score.toString();
        alert("You win! Rock vs Scissors");
    }
});

const paper_btn = document.querySelector("#paper");
paper_btn.addEventListener("click", function(e) {
    let robot_choice = get_robot_choice();
    if(robot_choice === "rock"){
        let new_human_score = parseInt(human_score.textContent, 10);
        new_human_score++;
        human_score.textContent = new_human_score.toString();
        alert("You win! Paper vs Rock");
    }
    else if(robot_choice === "paper"){
        alert("You drew! Paper vs Paper");
    }
    else{
        let new_robot_score = parseInt(robot_score.textContent, 10);
        new_robot_score++;
        robot_score.textContent = new_robot_score.toString();
        alert("You lost! Paper vs Scissors");
    }
});

const scissors_btn = document.querySelector("#scissors");
scissors_btn.addEventListener("click", function(e) {
    let robot_choice = get_robot_choice();
    if(robot_choice === "rock"){
        let new_robot_score = parseInt(robot_score.textContent, 10);
        new_robot_score++;
        robot_score.textContent = new_robot_score.toString();
        alert("You lost! Paper vs Rock");
    }
    else if(robot_choice === "paper"){
        let new_human_score = parseInt(human_score.textContent, 10);
        new_human_score++;
        human_score.textContent = new_human_score.toString();
        alert("You won! Scissors vs Paper");
    }
    else{
        alert("You drew! Scissors vs Scissors");
    }
});

function stop_game(){
    let buttons = document.querySelector(".buttons")
    for(let child of buttons.children){
        child.parentNode.replaceChild(child.cloneNode(true), child);
    }
}

const buttons = document.querySelector(".buttons")
for(const child of buttons.children){
    child.addEventListener("click", function(e){
        if(human_score.textContent === "5"){
            alert("You won the game!");
            stop_game();
        }
        else if(robot_score.textContent === "5"){
            alert("You lost the game!");
            stop_game();
        }
    });
}

