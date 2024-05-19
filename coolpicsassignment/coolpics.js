const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);


function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    }
    else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}
const gallery = document.querySelector(".gallery");

function viewHandler(event) {
    const clickedImage = event.target.closest("figure img");

    if (!clickedImage) return; // Ignore clicks that aren't on images

    const src = clickedImage.getAttribute('src');
    const imageName = src.split('-')[0];
    const newSrc = `${imageName}-full.jpeg`;

    const viewerHTML = viewerTemplate(newSrc, clickedImage.getAttribute('alt'));
    document.body.insertAdjacentHTML("afterbegin", viewerHTML);

    const viewer = document.querySelector(".viewer");
    viewer.style.display = "grid";
    
    const closeViewerButton = document.querySelector(".close-viewer");
    closeViewerButton.addEventListener("click", closeViewer);
}

gallery.addEventListener("click", viewHandler);


function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove();
    }
}


