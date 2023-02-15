let celsius=document.getElementById('cel');
let fahrenhiet=document.getElementById('far');
celsius.oninput=()=>{
let output=(parseFloat(celsius.value)*9)/5+32;
fahrenhiet.value=parseFloat(output.toFixed(2));
};
fahrenhiet.oninput=()=>{
    let output=(parseFloat(fahrenhiet.value)-32*5)/9;
    celsius.value=parseFloat(output.toFixed(2));
    };