
const display=document.getElementById("text");
const but=document.querySelectorAll("#button button")
let evaluted=false;
but.forEach(button=>{
    button.addEventListener(("click"),()=>{

        let value=button.textContent
        if(value==="AC")
        {
            display.value="";
        }
        else if (value==="DEL")
        {
            display.value=display.value.slice(0,-1);
        }
        else if(value==="=")
        {
            display.value=eval(display.value);
            evaluted=true;
        }
        else
        {
            if(evaluted)
            {
                display.value="";
                evaluted=false;
            }
            display.value+=value;
        }
    })
})


