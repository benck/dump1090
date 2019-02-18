"use strict";

// Match flight number with airlines
// install the airline logo images in airlines-tiny folder.

var AirlinesDatabase = {
	"ACA": { name: "Air Canada", image: "ACA.png" },
	"AXM": { name: "AirAsia", image: "AXM.png" },
	"CAL": { name: "China Airlines", image: "CAL.png" },
	"CPA": { name: "Cathay Pacific", image: "CPA.png" },
	"EVA": { name: "EVA Air", image: "EVA.png" },
	"FEA": { name: "Far Eastern Air Transport", image: "FEA.png" },
	"UIA": { name: "UNI Air", image: "UNI.png" },
};

function findAirlines(flight) {
	var airline_code = flight.substr(0, 3);

	if (typeof AirlinesDatabase[airline_code] !== 'undefined') {
		return AirlinesDatabase[airline_code];
	}

	return null;
}
