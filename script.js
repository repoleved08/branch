const btn = document.getElementById('btn');
const linkZero = document.getElementById('link0');

btn.addEventListener('click', () => {
    alert("Success");
})
linkZero.addEventListener('load', () =>{
    linkZero.innerHTML = "Home Page";
})
