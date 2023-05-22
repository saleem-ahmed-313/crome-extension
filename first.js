let myleads=[]
let inputEl=document.getElementById("input-el")
let ulEl=document.getElementById("ul-el")
let saveBtn=document.querySelector("#input-btn")
let deleteBtn=document.querySelector("#delete-btn")

const myleadsfroml=JSON.parse(localStorage.getItem("myleads"))

deleteBtn.addEventListener("dblclick",function(e)
{
    if(myleadsfroml)
    localStorage.clear()
    myleads=[]
    read()
})

if(myleadsfroml)
{
    myleads=myleadsfroml
    read()
}

let tabBtn=document.getElementById("tab-btn")
tabBtn.addEventListener("click",function(e)
{
    chrome.tabs.query({active:true , currentWindow:true} , function(tabs){
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads",JSON.stringify(myleads))
        read()
    })
})


saveBtn.addEventListener("click",function(e)
{
    myleads.push(inputEl.value)
    inputEl.value=null
    localStorage.setItem("myleads",JSON.stringify(myleads))
    read()
})

    function read()
    {
    let listItem=""
    for(let i=0 ; i<myleads.length;i++)
    {
        /*let li=document.createElement("li")
        li.textContent+=myleads[i]
        ulEl.append(li) */
        listItem+=`
        <li>
        <a href='${myleads[i]}' target='_blank'>${myleads[i]}</a>
        </li>`
    }
    ulEl.innerHTML=listItem
}
