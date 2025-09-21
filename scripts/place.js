let temperature = 36;
const tempUnits = "°C";
let conditions = "Sunny";
let windSpeed = 10;
const speedUnits = "km/h";


document.querySelector("#temperature").value = `${temperature} ${tempUnits}`;
document.querySelector("#conditions").value = conditions;
document.querySelector("#wind-speed").value = `${windSpeed} ${speedUnits}`;


function calculateWindChill(temperature, windSpeed) {
    let windChill = temperature <= 10 && windSpeed > 4.8 ? `${(13.127 + 0.6215 * temperature - 11.362 * windSpeed ** 0.16 + 0.396 * temperature * windSpeed ** 0.16).toFixed(2)} ${tempUnits}` : "N/A";
    return windChill;
}

document.querySelector("#wind-chill").value = calculateWindChill(temperature, windSpeed);