const h1 = document.querySelector("h1")
const p = document.querySelector("p")
const parrafito = document.querySelector(".parrafito")
const pid = document.querySelector("#pid")
const input = document.querySelector("input")

console.log(input.value)

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = "Patito <br> Feo" //Introdimos codigo html (utilizar con cuidado)
h1.innerText = "Patito <br> Feo" //Introducimos solo texto
// console.log(h1.getAttribute("class")) //Obtenemos atributo de la clase del h1
// h1.setAttribute("class", "rojo");

h1.classList.add("rojo")
h1.classList.remove("verde")

input.value = "456"

// const img = document.createElement("img")
// img.setAttribute("src", "https://imgs.search.brave.com/3leEm64p5y4Gx5yxchjUBBUQEqlZ8SYWaHgNPnf0tQc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWxlc3BlY3RhZG9y/LmNvbS9yZXNpemVy/L0xPZkQ5b3k3dm5Q/OVkyRnJCOHVid1hp/aEVoOD0vOTIweDYx/My9maWx0ZXJzOnF1/YWxpdHkoNjApOmZv/cm1hdChqcGVnKS9j/bG91ZGZyb250LXVz/LWVhc3QtMS5pbWFn/ZXMuYXJjcHVibGlz/aGluZy5jb20vZWxl/c3BlY3RhZG9yL1FD/VUxINElCR1JDRkxM/R01BVUdVR0JBWEM0/LmpwZw")
// console.log(img)

// pid.append(img);