const addTask = document.querySelector("#addTask")
const taskshead = ['name','adress','age']
const readDataFormStorage=(StorageKey)=>{
    let data=[]
    try{
     data =JSON.parse(localStorage.getItem(StorageKey))|| []
     if(!Array.isArray(data)) throw new Error("is not array")
    }catch(e){
        data= []
    }
    return date
    }
    const writeDataStorage=(data, storageKey)=>{
        localStorage.setItem(storageKey, JSON.stringify(data))
    }
    const formSubmit = function(e){
        e.preventDefault()
        let customer = {id:Date.now()} 
        taskshead.forEach(head=>{
            customer[head]= this.elements[head].value
        })
        const tasks = readDataFromStorage("tasks")
        tasks.push(customer)
        writeDataToStorage(tasks, "tasks")
    }
    addTask.addEventListener("submit", formSubmit)
