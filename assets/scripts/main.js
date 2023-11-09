const services = document.querySelector("#services");
const portafolio = document.querySelector("#portafolio");


services.addEventListener("click", (s) => {
    s.preventDefault();
    const sectionS = document.querySelector(".services");
    sectionS.scrollIntoView({behavior: "smooth"});
})


portafolio.addEventListener("click", (p) => {
    p.preventDefault();
    const sectionP = document.querySelector(".portafolio");
    sectionP.scrollIntoView({behavior: "smooth"});
})


let processScroll = () => {
    let docElem = document.documentElement,
        docBody = document.body,
        scrollTop = docElem['scrollTop'] || docBody['scrollTop'],
        scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight,
        scrollPercent = scrollTop / scrollBottom * 100 + '%';

    // console.log(scrollTop + ' / ' + scrollBottom + ' / ' + scrollPercent);

    document.getElementById("progress-bar").style.setProperty("--scrollAmount", scrollPercent);
}

document.addEventListener('scroll', processScroll);