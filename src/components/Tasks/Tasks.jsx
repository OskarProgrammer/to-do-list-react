import {useState} from 'react'

function Tasks(){
    let [tasks, setTasks] = useState([{id: 0, title:"task1", desc: "Short desc"},
    {id: 1,title:"task2", desc: "Something"}])

    let i = tasks.length

    const addNewTask = () => {
        let title = document.querySelector("input[name='ftitle']").value
        let desc = document.querySelector("input[name='fdesc']").value
        
        if (title == "" || desc == ""){
          return
        }
        setTasks([...tasks, {id: i++, title: title, desc: desc}])
    }

    const removeTask = (id) => {
      setTasks(tasks.filter(item => item.id !== id))
      tasks = tasks.filter(item => item.id !== id)
      i--
    }

    const editDesc = (id) => { 
      const newDesc = prompt("Please write new desc to task")
      tasks.map((item)=> {
        let temp_title = item.title
        if (item.id == id){
          removeTask(id)
          setTasks([...tasks, {id: id, title: temp_title, desc: newDesc}])
        }else{
          return
        }
      })
    }

    const editTitle = (id) => { 
        const newTitle = prompt("Please write new desc to task")
        tasks.map((item)=> {
          let temp_desc = item.desc
          if (item.id == id){
            removeTask(id)
            setTasks([...tasks, {id: id, title: newTitle, desc: temp_desc}])
          }else{
            return
          }
        })
      }

    return(
        <>
            <p>New Task Title: <input type="text" name="ftitle"/></p>
            <p>New Task Desc: <input type="text" name="fdesc"/></p>
            <button onClick={addNewTask}>Add task</button>
        

            {tasks.map((item) => {
              return (
              <div className="task" key={item.id}>
                  <h2 className="task_title">{item.title}</h2>
                  <p>{item.desc}</p>
                  <span id={item.id}>
                    <button className="task_buttons" onClick={() => removeTask(item.id)}>Delete</button>
                    <button className="task_buttons" onClick={() => editDesc(item.id)}>Edit desc</button>
                    <button className="task_buttons" onClick={() => editTitle(item.id)}>Edit title</button>
                  </span>
              </div>)
            })}
        </>
    )
}

export default Tasks