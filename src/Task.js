 export const Task = (props)=> {
    return (
        <div classname="task" style={{display:"flex", alignItems: "center"}}>
         <h1 style={{marginRight:"10px"}}>{props.taskName}</h1>
         <button className ="todo-button" onClick={() => props.deleteTask(props.id)}> Done </button>
        </div>
        );
}