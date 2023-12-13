const inputs = document.querySelectorAll("input");
document.querySelector("button").addEventListener("click",(e)=>{
    e.preventDefault();
    inputs.forEach((input)=>{
        console.log(input.value);
    })
})