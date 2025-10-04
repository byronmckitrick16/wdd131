const themeSelector = document.querySelector("#theme");
function changeTheme() {

    if(themeSelector.value === "dark"){
        document.body.setAttribute("class", "dark");

        const byuiLogo = document.querySelector(".logo");
        byuiLogo.removeAttribute("src");
        byuiLogo.setAttribute("src", "byui-logo_dark.png");
    }
    else{
        document.body.removeAttribute("class");

        const byuiLogo = document.querySelector(".logo");
        byuiLogo.removeAttribute("src");
        byuiLogo.setAttribute("src", "byui-logo_blue.webp");
    }
}

themeSelector.addEventListener('change', changeTheme);