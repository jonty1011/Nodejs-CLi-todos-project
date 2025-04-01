const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const todos =[];

const showMenu =()=> {
  console.log("1: Add a Tasks");
  console.log("2: View Tasks");
  console.log("3: Exit");
  rl.question("Choose Options...:",HandleInput)
}

const HandleInput = (choose)=> {
    if(choose === "1"){
        
        rl.question("Enter the Task:", (task)=> {
            todos.push(task);
            console.log("Task added SuccessFully",task);
            showMenu(); 
        })
       
    }else if(choose === "2"){
        console.log("View your Todos");
        todos.forEach((task,indexes)=>{
            console.log(`${indexes + 1} .${task}`);
            
        })
        showMenu();
       
    }else if(choose === "3"){
        console.log("ThankYou For Choosing the Todos");
        rl.close(); 
    }else{
        
            console.log("Invalid choice. Please try again.");
            showMenu();
       
    }
    
}
showMenu();