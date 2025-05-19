const Base_URL = 'https://taskmangement-fastapi-gtb4egenbkayg3f5.canadacentral-01.azurewebsites.net'

export const getTasks = async() =>{
    const res = await fetch(`${Base_URL}/tasks`)
    return res.json()

}

export const addTask =  async(task) =>{
    
    const res = await fetch(`${Base_URL}/tasks`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(task),
        
    })
    return res.json()
}


export const updateTask = async (id, task) => {
    const res = await fetch(`${Base_URL}/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    return res.json();
  };



export const deleteTask = async(id) =>{
    await fetch(`${Base_URL}/tasks/${id}`,{
        method:'DELETE'

    })
    

}