class Task {
    constructor( title, desc, deadline, assignee ) {
        this.title = title;
        this.desc = desc;
        this.deadline = deadline;
        this.assignee = assignee || "";
        this.completed = false;
    }
}

const taskQueue = [];

document.querySelector( "form" ).addEventListener( "submit", e => {
    e.preventDefault();
    const title = document.getElementById( "taskTitle" ).value;
    const desc = document.getElementById( "taskDesc" ).value;
    const deadline = document.getElementById( "dueDate" ).value;
    const assignee = document.getElementById( "assignedTo" ).value;

    const newTask = new Task( title, desc, deadline, assignee );
    taskQueue.push( newTask );

    renderTasks( taskQueue );
} );


function renderTasks ( tasks ) {
    const container = document.getElementById( "taskContainer" );
    container.innerHTML = "";

    tasks.forEach( ( task, index ) => {
        const div = document.createElement( "div" );
        div.classList.add( "taskCard" );

        const checkbox = document.createElement( "input" );
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener( "change", () => toggleCompleted( index ) );
        div.appendChild( checkbox );
        const title = document.createElement( "p" );
        title.type = "title";
        checkbox.checked = task.title;
        div.appendChild( title );

        // Continue filling out HTML tags for Title, Description, Deadline, Assignee, etc.

        container.appendChild( div );
    } );
}

function toggleCompleted ( index ) {
    taskQueue[ index ].completed = !taskQueue[ index ].completed;
    renderTasks( taskQueue );
}


function applyFilter ( filterFunc ) {
    const filteredTasks = taskQueue.filter( filterFunc );
    renderTasks( filteredTasks );
}

document.getElementById( "highPriorityBtn" ).addEventListener( "click", () => {
    applyFilter( task => task.priority === "High" );
} );

document.getElementById( "urgentDeadlineBtn" ).addEventListener( "click", () => {
    applyFilter( task => moment().diff( moment( task.deadline ), "days" ) <= 3 );
} );

// Implement similar event listeners for low priority, medium priority, etc.


window.addEventListener( "beforeunload", () => {
    localStorage.setItem( "taskQueue", JSON.stringify( taskQueue ) );
} );

document.addEventListener( "DOMContentLoaded", () => {
    const savedData = localStorage.getItem( "taskQueue" );
    if ( savedData ) {
        taskQueue = JSON.parse( savedData );
    }

    renderTasks( taskQueue );
} );