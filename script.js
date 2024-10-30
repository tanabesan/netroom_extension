window.addEventListener("load", function() {
    let load = sessionStorage.getItem("load");

    if (load === null) {
        load = 0;
        const splashScreen = document.getElementById("splash-screen");
        splashScreen.style.display = "flex"; 

        setTimeout(function() {
            splashScreen.style.opacity = "0";
            splashScreen.style.transition = "opacity 0.5s ease";

            setTimeout(function() {
                splashScreen.style.display = "none"; 
                sessionStorage.setItem("load", 1); 
            }, 500); 
        }, 1850); 
    } else {
        const splashScreen = document.getElementById("splash-screen");
        splashScreen.style.display = "none"; 
    }
});
