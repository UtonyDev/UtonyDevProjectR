window.addEventListener("load", function() {
    setTimeout( () => {
        const open = this.document.querySelectorAll(".hid");
        for (let i = 0; i < open.length; i++) {
            open[i].classList.replace("hid", "rev");
        }
    }, 0o0);
})
// Variables // 
const icon = document.getElementById("icn");
const menu = document.querySelector("#menurev");
const headr = document.querySelector(".headr");
const bdy = document.querySelector(".maincon");
const link = document.querySelectorAll(".lnk");
const lnk = document.querySelectorAll(".lnk");
const morecon = document.querySelectorAll(".morecon");
const chev = document.querySelectorAll("#chev");
const targetElement = document.getElementById("target");
const triggPoint = targetElement.offsetTop;
const triggPointX = triggPoint * 5;
const nmeDesc = document.getElementById("nme");

icon.addEventListener("click", () => {
    menu.classList.toggle("show");
    bdy.classList.toggle("blr");
    if (icon.getAttribute("class") === "fa-solid fa-bars") {
        icon.setAttribute("class","fa-solid fa-xmark");
    } else {
        icon.setAttribute("class","fa-solid fa-bars");
    }
});

for (let i = 0; i < lnk.length; i++) {
    lnk[i].addEventListener("click", () => {
        for (let j = 0; j < morecon.length; j++){ 
            if (i == j) {
                morecon[j].classList.toggle("moreconv");
                if (chev[j].getAttribute("class") === "fa-solid fa-chevron-down") {
                    chev[j].setAttribute("class", "fa-solid fa-chevron-up");
                } else {
                    chev[j].setAttribute("class", "fa-solid fa-chevron-down");
                }
            } else {
                morecon[j].classList.remove("moreconv");
                if (chev[j].getAttribute("class") === "fa-solid fa-chevron-up") {
                    chev[j].setAttribute("class", "fa-solid fa-chevron-down");
                } else {
                    chev[j].setAttribute("class", "fa-solid fa-chevron-down");
                }


            }
        }
    }
);
};

bdy.addEventListener("click", () => {
    menu.classList.replace("show", "hide");
    bdy.classList.remove("blr");
    if (icon.getAttribute("class") === "fa-solid fa-xmark") {
        icon.setAttribute("class", "fa-solid fa-bars");
    } else {
        icon.setAttribute("class", "fa-solid fa-bars");
    }
    for (let i = 0; i < lnk.length; i++) {
        morecon[i].classList.remove("moreconv");
        if (chev[i].getAttribute("class", "fa-solid fa-chevron-up")) {
            chev[i].setAttribute("class", "fa-solid fa-chevron-down");
            chev[i].setAttribute("class", "fa-solid fa-chevron-down");
        }
    }
});

window.addEventListener("scroll", () => {
    const currentScrl = window.scrollY;
    if (currentScrl > triggPointX) {
        nmeDesc.classList.replace("nmeHide", "nmeShow");
        console.log(triggPointX);
        console.log(currentScrl);
    } else {
        nmeDesc.classList.replace("nmeShow", "nmeHide");
    }
});
