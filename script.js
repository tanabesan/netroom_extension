if (typeof load === "undefined") {
    var load = 0
} 

if (load === 0) {
    window.addEventListener("load", function() {
        const splashScreen = document.getElementById("splash-screen");
        setTimeout(function() {
            splashScreen.style.opacity = "0";
            splashScreen.style.transition = "opacity 0.5s ease";
            setTimeout(function() {
                splashScreen.style.display = "none"; 
            }, 500); 
        }, 1850); 
    });
    load = 1
}



