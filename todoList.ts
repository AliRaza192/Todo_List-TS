import inquirer from "inquirer";


// interface Answers {
//     todo: string,
//     addMore: boolean,
// }


// const todos: string [] = []
// let addMore: boolean = true;
// while(addMore) {
// const answer: Answers = await inquirer
//         .prompt([
//         {
//             type: "string",
//             name: "todo",
//             message: "Enter Your Todo List: "
//         },

//         {
//             type: "confirm",
//             name: "addMore",
//             message: "Enter More List: ",
//             default: false,
//             when(answer){
//                 return answer.todo
//             }
//         },

        
//     ]);


//     const {todo, addMore } = answer;
//     if(answer.todo){
//         todos.push(todo)
//     }
//     else{
//         console.info("Kindly Enter Any Value: ")
//     }

    

//     if(todos.length > 0){
//         console.info("Your ToDo List: ")
//         todos.forEach((t) => console.info(t))
//     }
//     else{
//         console.info("No ToDos in the List: ")
//     }


// }


let todos: string[] = [];
let loop = true;

while(loop){
    const answers : {
        TODO: string,
        addMore: boolean,
    } = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "Enter ToDo Items: "
        },

        {
            type: "confirm",
            name: "addMore",
            message: "Enter More Items: ",
            default: false,
        },
    ])

    const {TODO, addMore} = answers;
    console.log(answers);
    
    loop = addMore;

    if(TODO){
        todos.push(TODO)
    }
    else{
        console.log("Kindly Enter Value: ");
        
    }   
}

    if(todos.length > 0){
        console.log("Your Todo Items: ");
            todos.forEach(todo => {
            console.log(todo);
            
        });
    }

    else{
        console.log("No ToDo Found.");
        
    }























