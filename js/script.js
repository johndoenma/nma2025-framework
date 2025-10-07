document.addEventListener("DOMContentLoaded", () => {

    // ENABLE MOBILE MENU 
    const sitenav = document.querySelector(".site-nav");
    const menubutton = document.querySelector(".menubutton");

    menubutton.onclick = () => {
        // IF MENU IS CLOSED, OPEN IT, ELSE CLOSE IT
        if (sitenav.getAttribute("data-menustate") === "open" ) {
            sitenav.setAttribute("data-menustate", "closed");
        } else {
            sitenav.setAttribute("data-menustate", "open");
        };
    };

    // Remove the data-attribute on resize to fix drawer nav animation
    window.onresize = () => {
        sitenav.removeAttribute("data-menustate");
    };

});

