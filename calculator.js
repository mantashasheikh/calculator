// function call
let store=""
let cal=(value)=>{
    let op=['-','*','%','+','.','/']
    let last=store[store.length-1]
    if(op.includes(last) && op.includes(value)){
        return
    }

    let show=document.querySelector("#display")
    store=store+value  
    show.innerHTML=store

    let button = document.querySelector("#d")
    button.style.backgroundColor=" rgba(39, 38, 38, 1);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    "
    
}
let res=()=>{
    let show=document.querySelector("#display")
    store=eval(store).toString()
    show.innerHTML=store
}
let del=()=>{
    let show=document.querySelector("#display")
    store = store.slice(0,-1)
    show.innerHTML=store
}
let ac=()=>{
    let show=document.querySelector("#display")
    store = ""
    show.innerHTML=store
}



