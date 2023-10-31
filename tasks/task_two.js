async function getLocation() {
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
    );
    const data = await response.json();
    document.getElementById("city").textContent = data.address.city;
    document.getElementById("country").textContent = data.address.country;
    document.getElementById("time").textContent =
      new Date().toLocaleTimeString();
    document.getElementById("altitude").textContent = position.coords.altitude;
  } catch (error) {
    console.error("Error fetching location:", error.message);
  }
}
getLocation();
