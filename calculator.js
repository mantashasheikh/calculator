// function call
let store=""
let cal=(value)=>{
    let show=document.querySelector("#display")
    store=store+value  
    show.innerHTML=store
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