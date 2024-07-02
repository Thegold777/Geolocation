function pageLoaded() {
    const btn = document.querySelector("#button");
    const output = document.querySelector("#output");

    btn.addEventListener("click", getLocation);

    function getLocation() {
        if ("geolocation" in navigator) {
            let locationOptions = {
                enableHighAccuracy: true
            };
            navigator.geolocation.getCurrentPosition(locationSuccess, locationError, locationOptions);
        } else {
            writeOutput("Ваш брайзер не поддерживает функцию определения местоположения");
        }
    }


function locationSuccess(data) {
    let link = `https://yandex.ru/maps/?pt=${data.coords.longitude},${data.coords.latitude}&z=18&l=map`;
    writeOutput(`<a href="${link}" target="_blank">Вы находитесь здесь</a>`);

}

function writeOutput(message) {
    output.innerHTML = `<p>${message}</p>`;
}
}

document.addEventListener("DOMContentLoaded", pageLoaded);