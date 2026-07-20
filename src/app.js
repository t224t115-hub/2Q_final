import "./style.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const map = L.map("map").setView([35.0116, 135.7681], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

L.marker([35.0116, 135.7681])
.addTo(map)
.bindPopup("京都駅");