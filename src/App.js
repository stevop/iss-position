import { useState, useEffect } from "react";
const App = () => {
	const url = "http://api.open-notify.org/iss-now.json";

	const [lat, setLat] = useState("");
	const [lon, setLon] = useState("");
	const [urlMap, setUrlMap] = useState("");

	const getCoordinates = async () => {
		const response = await fetch(url);
		const data = await response.json();
		setLat(data["iss_position"]["latitude"]);
		setLon(data["iss_position"]["longitude"]);
		setUrlMap(
			`https://sk.mapy.cz/zakladni?x=${data["iss_position"]["latitude"]}&y=${data["iss_position"]["longitude"]}&z=5`
		);
	};
	useEffect(() => {
		getCoordinates();
	}, []);

	return (
		<div>
			<h1>API</h1>
			<h2>Latitude</h2>
			<p>{lat}</p>
			<h2>Longitude</h2>
			<p>{lon}</p>
			<a
				target="_blank"
				href={urlMap}>
				Odkaz na polohu ISS
			</a>
		</div>
	);
};

export default App;
