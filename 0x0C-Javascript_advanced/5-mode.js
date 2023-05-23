function changeMode(size, weight, transform, background, color)  {
    return () =>  {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
   }
 }

function main(){
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    let p = document.createElement("P");
    p.innerText = "Welcome Holberton!";
    document.body.appendChild(p);

    let spookyBtn = document.createElement("BUTTON");
    spookyBtn.innerText = "Spooky";
    document.body.appendChild(spookyBtn);
    spookyBtn.addEventListener("click", spooky); 

    let darkModeBtn = document.createElement("BUTTON");
    darkModeBtn.innerText = "Dark mode";
    document.body.appendChild(darkModeBtn);
    darkModeBtn.addEventListener("click", darkMode); 

    let screamModeBtn = document.createElement("BUTTON");
    screamModeBtn.innerText = "Scream mode";
    document.body.appendChild(screamModeBtn);
    screamModeBtn.addEventListener("click", screamMode); 
}


main();
