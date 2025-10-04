const menuButton = document.querySelector(".menuButton");
menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    const menuLink = document.querySelector("nav").querySelectorAll("a");
    menuLink.forEach(link => {
        link.classList.toggle("hide");
    });
};

function handleResize() {
    const windowWidth = window.innerWidth
    if( windowWidth > 1000){
        const menuLink = document.querySelector("nav").querySelectorAll("a");
        menuLink.forEach(link => {
        link.classList.remove("hide");
        });
    }
};

handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
};

function viewHandler(event) {
    let clickElement = event.target
    clickElement = clickElement.src.split("-")
    clickElement = clickElement[0] + "-full.jpeg"
    const eventAlt = event.target.alt
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(clickElement, eventAlt));
    const closeButton = document.querySelector(".close-viewer");
    closeButton.addEventListener("click", closeViewer);
};

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);

function closeViewer() {
    const viewerElement = document.querySelector(".viewer");
    viewerElement.remove();
};