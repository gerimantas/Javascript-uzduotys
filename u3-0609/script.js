window.onload = function() {
    let zodis= "kava";
    console.log(zodis);
    let operacija = zodisAtvirksciai(zodis);
    console.log(operacija)
    
 
}

function zodisAtvirksciai (zodis) {
    let b = zodis[0];
    let b1 = zodis[1];
    let b2 = zodis[2];
    let b3 = zodis[3];
    return b3+b2+b1+b;
}

