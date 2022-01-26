

const demo = {
	"Exam Fee": {
		"INDIAN": {
			"Ayurveda": {
				"UG": {
					"amount": 200
				},
				"UG-DIPLOMA": {
					"amount": 300
				},
				"PG": {
					"amount": 500
				}
			},
			"Medical": {
				"UG": {
					"amount": 200
				},
				"UG-DIPLOMA": {
					"amount": 300
				},
				"PG": {
					"amount": 500
				}
			},
			"Dental": {
				"UG": {
					"amount": 200
				},
				"UG-Diploma": {
					"amount": 400
				},
				"PG": {
					"amount": 500
				}
			}
		},
		"FOREIGN": {
			"Ayurveda": {
				"UG": {
					"amount": 200
				},
				"UG-DIPLOMA": {
					"amount": 300
				},
				"PG": {
					"amount": 500
				}
			},
			"Medical": {
				"UG": {
					"amount": 200
				},
				"UG-DIPLOMA": {
					"amount": 300
				},
				"PG": {
					"amount": 500
				}
			},
			"Dental": {
				"UG": {
					"amount": 200
				},
				"UG-DIPLOMA": {
					"amount": 400
				},
				"PG": {
					"amount": 500
				}
			}
		},
		"NRI": {
			"Ayurveda": {
				"UG": {
					"amount": 200
				},
				"UG-Diploma": {
					"amount": 300
				},
				"PG": {
					"amount": 500
				}
			},
			"Medical": {
				"UG": {
					"amount": 200
				},
				"UG-DIPLOMA": {
					"amount": 300
				},
				"PG": {
					"amount": 500
				}
			},
			"Dental": {
				"UG": {
					"amount": 200
				},
				"UG-Diploma": {
					"amount": 400
				},
				"PG": {
					"amount": 500
				}
			}
		},
		"SAARC": {
			"Ayurveda": {
				"UG": {
					"amount": 200
				},
				"UG-DIPLOMA": {
					"amount": 300
				},
				"PG": {
					"amount": 500
				}
			},
			"Medical": {
				"UG": {
					"amount": 200
				},
				"UG-Diploma": {
					"amount": 300
				},
				"PG": {
					"amount": 500
				}
			},
			"Dental": {
				"UG": {
					"amount": 200
				},
				"UG-DIPLOMA": {
					"amount": 400
				},
				"PG": {
					"amount": 500
				}
			}
		}
	},
	"Application Fee": {
		"INDIAN": {
			"Ayurveda": {
				"UG": {
					"amount": 200
				},
				"UG-Diploma": {
					"amount": 300
				},
				"PG": {
					"amount": 500
				}
			},
			"Medical": {
				"UG": {
					"amount": 200
				},
				"UG-Diploma": {
					"amount": 300
				},
				"PG": {
					"amount": 500
				}
			},
			"Dental": {
				"UG": {
					"amount": 200
				},
				"UG-Diploma": {
					"amount": 400
				},
				"PG": {
					"amount": 500
				}
			}
		},
		"FOREIGN": {
			"Ayurveda": {
				"UG": {
					"amount": 200
				},
				"UG-Diploma": {
					"amount": 300
				},
				"PG": {
					"amount": 500
				}
			},
			"Medical": {
				"UG": {
					"amount": 200
				},
				"UG-Diploma": {
					"amount": 300
				},
				"PG": {
					"amount": 500
				}
			},
			"Dental": {
				"UG": {
					"amount": 200
				},
				"UG-Diploma": {
					"amount": 400
				},
				"PG": {
					"amount": 500
				}
			}
		}

	}
}

let user = JSON.parse(JSON.stringify(demo))
// EXAM FEE - INDIAN -Ayurveda
let EXAMFEE_INDIAN_UG_Ayurveda = user["Exam Fee"]["INDIAN"]["Ayurveda"]["UG"]
let EXAMFEE_INDIAN_UG_Diploma_Ayurveda = user["Exam Fee"]["INDIAN"]["Ayurveda"]["UG-DIPLOMA"]
let EXAMFEE_INDIAN_PG_Ayurveda = user["Exam Fee"]["INDIAN"]["Ayurveda"]["PG"]
//Exam Fee - INDIAN- Medical
let EXAMFEE_INDIAN_UG_Medical = user["Exam Fee"]["INDIAN"]["Medical"]["UG"]
let EXAMFEE_INDIAN_UG_Diploma_Medical = user["Exam Fee"]["INDIAN"]["Medical"]["UG-DIPLOMA"]
let EXAMFEE_INDIAN_PG_Medical = user["Exam Fee"]["INDIAN"]["Medical"]["PG"]
//Exam Fee - INDIAN- Dental
let EXAMFEE_INDIAN_UG_Dental = user["Exam Fee"]["INDIAN"]["Dental"]["UG"]
let EXAMFEE_INDIAN_UG_Diploma_Dental = user["Exam Fee"]["INDIAN"]["Dental"]["UG-DIPLOMA"]
let EXAMFEE_INDIAN_PG_Dental = user["Exam Fee"]["INDIAN"]["Dental"]["PG"]

//Exam Fee - FOREIGN- Ayurveda
let EXAMFEE_FOREIGN_UG_Ayurveda = user["Exam Fee"]["FOREIGN"]["Ayurveda"]["UG"]
let EXAMFEE_FOREIGN_UG_Diploma_Ayurveda = user["Exam Fee"]["FOREIGN"]["Ayurveda"]["UG-DIPLOMA"]
let EXAMFEE_FOREIGN_PG_Ayurveda = user["Exam Fee"]["INDIAN"]["Ayurveda"]["PG"]
//Exam Fee - FOREIGN- Medical
let EXAMFEE_FOREIGN_UG_Medical = user["Exam Fee"]["FOREIGN"]["Medical"]["UG"]
let EXAMFEE_FOREIGN_UG_Diploma_Medical = user["Exam Fee"]["FOREIGN"]["Medical"]["UG-DIPLOMA"]
let EXAMFEE_FOREIGN_PG_Medical = user["Exam Fee"]["FOREIGN"]["Medical"]["PG"]
//Exam Fee - FOREIGN- Dental
let EXAMFEE_FOREIGN_UG_Dental = user["Exam Fee"]["FOREIGN"]["Dental"]["UG"]
let EXAMFEE_FOREIGN_UG_Diploma_Dental = user["Exam Fee"]["FOREIGN"]["Dental"]["UG-DIPLOMA"]
let EXAMFEE_FOREIGN_PG_Dental = user["Exam Fee"]["FOREIGN"]["Dental"]["PG"]

//Exam Fee - NRI- Ayurveda
let EXAMFEE_NRI_UG_Ayurveda = user["Exam Fee"]["NRI"]["Ayurveda"]["UG"]
let EXAMFEE_NRI_UG_Diploma_Ayurveda = user["Exam Fee"]["NRI"]["Ayurveda"]["UG-DIPLOMA"]
let EXAMFEE_NRI_PG_Ayurveda = user["Exam Fee"]["NRI"]["Ayurveda"]["PG"]
//Exam Fee - NRI- Medical
let EXAMFEE_NRI_UG_Medical = user["Exam Fee"]["NRI"]["Medical"]["UG"]
let EXAMFEE_NRI_UG_Diploma_Medical = user["Exam Fee"]["NRI"]["Medical"]["UG-DIPLOMA"]
let EXAMFEE_NRI_PG_Medical = user["Exam Fee"]["NRI"]["Medical"]["PG"]
//Exam Fee - NRI- Dental
let EXAMFEE_NRI_UG_Dental = user["Exam Fee"]["FOREIGN"]["Dental"]["UG"]
let EXAMFEE_NRI_UG_Diploma_Dental = user["Exam Fee"]["FOREIGN"]["Dental"]["UG-DIPLOMA"]
let EXAMFEE_NRI_PG_Dental = user["Exam Fee"]["NRI"]["Dental"]["PG"]

//Exam Fee - SAARC- Ayurveda
let EXAMFEE_SAARC_UG_Ayurveda = user["Exam Fee"]["SAARC"]["Ayurveda"]["UG"]
let EXAMFEE_SAARC_UG_Diploma_Ayurveda = user["Exam Fee"]["SAARC"]["Ayurveda"]["UG-DIPLOMA"]
let EXAMFEE_SAARC_PG_Ayurveda = user["Exam Fee"]["SAARC"]["Ayurveda"]["PG"]
//Exam Fee -SAARC- Medical
let EXAMFEE_SAARC_UG_Medical = user["Exam Fee"]["SAARC"]["Medical"]["UG"]
let EXAMFEE_SAARC_UG_Diploma_Medical = user["Exam Fee"]["SAARC"]["Medical"]["UG-DIPLOMA"]
let EXAMFEE_SAARC_PG_Medical = user["Exam Fee"]["SAARC"]["Medical"]["PG"]
//Exam Fee -SAARC- Dental
let EXAMFEE_SAARC_UG_Dental = user["Exam Fee"]["FOREIGN"]["Dental"]["UG"]
let EXAMFEE_SAARC_UG_Diploma_Dental = user["Exam Fee"]["FOREIGN"]["Dental"]["UG-DIPLOMA"]
let EXAMFEE_SAARC_PG_Dental = user["Exam Fee"]["SAARC"]["Dental"]["PG"]

// Application FEE - INDIAN -Ayurveda
let APPLICATIONFEE_INDIAN_UG_Ayurveda = user["Application Fee"]["INDIAN"]["Ayurveda"]["UG"]
let APPLICATIONFEE_INDIAN_UG_Diploma_Ayurveda = user["Application Fee"]["INDIAN"]["Ayurveda"]["UG-DIPLOMA"]
let APPLICATIONFEE_INDIAN_PG_Ayurveda = user["Application Fee"]["INDIAN"]["Ayurveda"]["PG"]
//Application Fee - INDIAN- Medical
let APPLICATIONFEE_INDIAN_UG_Medical = user["Application Fee"]["INDIAN"]["Medical"]["UG"]
let APPLICATIONFEE_INDIAN_UG_Diploma_Medical = user["Application Fee"]["INDIAN"]["Medical"]["UG-DIPLOMA"]
let APPLICATIONFEE_INDIAN_PG_Medical = user["Application Fee"]["INDIAN"]["Medical"]["PG"]
//Application Fee - INDIAN- Dental
let APPLICATIONFEE_INDIAN_UG_Dental = user["Application Fee"]["INDIAN"]["Dental"]["UG"]
let APPLICATIONFEE_INDIAN_UG_Diploma_Dental = user["Application Fee"]["INDIAN"]["Dental"]["UG-DIPLOMA"]
let APPLICATIONFEE_INDIAN_PG_Dental = user["Application Fee"]["INDIAN"]["Dental"]["PG"]

// Application FEE - FOREIGN -Ayurveda
let APPLICATIONFEE_FOREIGN_UG_Ayurveda = user["Application Fee"]["FOREIGN"]["Ayurveda"]["UG"]
let APPLICATIONFEE_FOREIGN_UG_Diploma_Ayurveda = user["Application Fee"]["FOREIGN"]["Ayurveda"]["UG-DIPLOMA"]
let APPLICATIONFEE_FOREIGN_PG_Ayurveda = user["Application Fee"]["FOREIGN"]["Ayurveda"]["PG"]
//Application Fee - FOREIGN- Medical
let APPLICATIONFEE_FOREIGN_UG_Medical = user["Application Fee"]["FOREIGN"]["Medical"]["UG"]
let APPLICATIONFEE_FOREIGN_UG_Diploma_Medical = user["Application Fee"]["FOREIGN"]["Medical"]["UG-DIPLOMA"]
let APPLICATIONFEE_FOREIGN_PG_Medical = user["Application Fee"]["FOREIGN"]["Medical"]["PG"]
//Application Fee - FOREIGN- Dental
let APPLICATIONFEE_FOREIGN_UG_Dental = user["Application Fee"]["FOREIGN"]["Dental"]["UG"]
let APPLICATIONFEE_FOREIGN_UG_Diploma_Dental = user["Application Fee"]["FOREIGN"]["Dental"]["UG-DIPLOMA"]
let APPLICATIONFEE_FOREIGN_PG_Dental = user["Application Fee"]["FOREIGN"]["Dental"]["PG"]




const button = document.getElementById('btn')
const demos = document.getElementById('demo')

const obj = {

}
function fetchValue(name, ele) {
	obj[name] = ele.options[ele.selectedIndex].text
}

function result() {
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "UG" &&
		obj["nationality"] == "INDIAN" && obj["course"] == "Ayurveda") {
		demos.innerHTML = "FEE:" + EXAMFEE_INDIAN_UG_Ayurveda["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "UG-DIPLOMA" &&
		obj["nationality"] == "INDIAN" && obj["course"] == "Ayurveda") {
		demos.innerHTML = "FEE:" + EXAMFEE_INDIAN_UG_Ayurveda["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "PG" &&
		obj["nationality"] == "INDIAN" && obj["course"] == "Ayurveda") {
		demos.innerHTML = "FEE:" + EXAMFEE_INDIAN_PG_Ayurveda["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "UG" &&
		obj["nationality"] == "INDIAN" && obj["course"] == "Medical") {
		demos.innerHTML = "FEE:" + EXAMFEE_INDIAN_UG_Medical["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "UG-DIPLOMA" &&
		obj["nationality"] == "INDIAN" && obj["course"] == "Medical") {
		demos.innerHTML = "FEE:" + EXAMFEE_INDIAN_UG_Diploma_Medical["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "PG" &&
		obj["nationality"] == "INDIAN" && obj["course"] == "Medical") {
		demos.innerHTML = "FEE:" + EXAMFEE_INDIAN_PG_Medical["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "UG" &&
		obj["nationality"] == "INDIAN" && obj["course"] == "Dental") {
		demos.innerHTML = "FEE:" + EXAMFEE_INDIAN_UG_Dental["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "UG-DIPLOMA" &&
		obj["nationality"] == "INDIAN" && obj["course"] == "Dental") {
		demos.innerHTML = "FEE:" + EXAMFEE_INDIAN_UG_Diploma_Dental["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "PG" &&
		obj["nationality"] == "INDIAN" && obj["course"] == "Dental") {
		demos.innerHTML = "FEE:" + EXAMFEE_INDIAN_PG_Dental["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "UG" &&
		obj["nationality"] == "FOREIGN" && obj["course"] == "Ayurveda") {
		demos.innerHTML = "FEE:" + EXAMFEE_FOREIGN_UG_Ayurveda["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "UG-DIPLOMA" &&
		obj["nationality"] == "FOREIGN" && obj["course"] == "Ayurveda") {
		demos.innerHTML = "FEE:" + EXAMFEE_FOREIGN_UG_Diploma_Ayurveda["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "PG" &&
		obj["nationality"] == "FOREIGN" && obj["course"] == "Ayurveda") {
		demos.innerHTML = "FEE:" + EXAMFEE_FOREIGN_PG_Ayurveda["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "UG" &&
		obj["nationality"] == "FOREIGN" && obj["course"] == "Medical") {
		demos.innerHTML = "FEE:" + EXAMFEE_FOREIGN_UG_Medical["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "UG-DIPLOMA" &&
		obj["nationality"] == "FOREIGN" && obj["course"] == "Medical") {
		demos.innerHTML = "FEE:" + EXAMFEE_FOREIGN_UG_Diploma_Medical["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "PG" &&
		obj["nationality"] == "FOREIGN" && obj["course"] == "Medical") {
		demos.innerHTML = "FEE:" + EXAMFEE_FOREIGN_PG_Medical["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "UG" &&
		obj["nationality"] == "FOREIGN" && obj["course"] == "Dental") {
		demos.innerHTML = "FEE:" + EXAMFEE_FOREIGN_UG_Dental["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "UG-DIPLOMA" &&
		obj["nationality"] == "FOREIGN" && obj["course"] == "Dental") {
		demos.innerHTML = "FEE:" + EXAMFEE_FOREIGN_UG_Diploma_Dental["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "PG" &&
		obj["nationality"] == "FOREIGN" && obj["course"] == "Dental") {
		demos.innerHTML = "FEE:" + EXAMFEE_FOREIGN_PG_Dental["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "UG" &&
		obj["nationality"] == "NRI" && obj["course"] == "Ayurveda") {
		demos.innerHTML = "FEE:" + EXAMFEE_NRI_UG_Ayurveda["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "UG-DIPLOMA" &&
		obj["nationality"] == "NRI" && obj["course"] == "Ayurveda") {
		demos.innerHTML = "FEE:" + EXAMFEE_NRI_UG_Diploma_Ayurveda["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "PG" &&
		obj["nationality"] == "NRI" && obj["course"] == "Ayurveda") {
		demos.innerHTML = "FEE:" + EXAMFEE_NRI_PG_Ayurveda["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "UG" &&
		obj["nationality"] == "NRI" && obj["course"] == "Medical") {
		demos.innerHTML = "FEE:" + EXAMFEE_NRI_UG_Medical["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "UG-DIPLOMA" &&
		obj["nationality"] == "NRI" && obj["course"] == "Medical") {
		demos.innerHTML = "FEE:" + EXAMFEE_NRI_UG_Diploma_Medical["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "PG" &&
		obj["nationality"] == "NRI" && obj["course"] == "Medical") {
		demos.innerHTML = "FEE:" + EXAMFEE_NRI_PG_Medical["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "UG" &&
		obj["nationality"] == "NRI" && obj["course"] == "Dental") {
		demos.innerHTML = "FEE:" + EXAMFEE_NRI_UG_Dental["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "UG-DIPLOMA" &&
		obj["nationality"] == "NRI" && obj["course"] == "Dental") {
		demos.innerHTML = "FEE:" + EXAMFEE_NRI_UG_Diploma_Dental["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "PG" &&
		obj["nationality"] == "NRI" && obj["course"] == "Dental") {
		demos.innerHTML = "FEE:" + EXAMFEE_NRI_PG_Dental["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "UG" &&
		obj["nationality"] == "SAARC" && obj["course"] == "Ayurveda") {
		demos.innerHTML = "FEE:" + EXAMFEE_SAARC_UG_Ayurveda["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "UG-DIPLOMA" &&
		obj["nationality"] == "SAARC" && obj["course"] == "Ayurveda") {
		demos.innerHTML = "FEE:" + EXAMFEE_SAARC_UG_Diploma_Ayurveda["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "PG" &&
		obj["nationality"] == "SAARC" && obj["course"] == "Ayurveda") {
		demos.innerHTML = "FEE:" + EXAMFEE_SAARC_PG_Ayurveda["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "UG" &&
		obj["nationality"] == "SAARC" && obj["course"] == "Medical") {
		demos.innerHTML = "FEE:" + EXAMFEE_SAARC_UG_Medical["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "UG-DIPLOMA" &&
		obj["nationality"] == "SAARC" && obj["course"] == "Medical") {
		demos.innerHTML = "FEE:" + EXAMFEE_SAARC_UG_Diploma_Medical["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "PG" &&
		obj["nationality"] == "SAARC" && obj["course"] == "Medical") {
		demos.innerHTML = "FEE:" + EXAMFEE_SAARC_PG_Medical["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "UG" &&
		obj["nationality"] == "SAARC" && obj["course"] == "Dental") {
		demos.innerHTML = "FEE:" + EXAMFEE_SAARC_UG_Dental["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "UG-DIPLOMA" &&
		obj["nationality"] == "SAARC" && obj["course"] == "Dental") {
		demos.innerHTML = "FEE:" + EXAMFEE_SAARC_UG_Diploma_Dental["amount"]
	}
	if (obj["Fee"] == "Exam Fee" && obj["Level"] == "PG" &&
		obj["nationality"] == "SAARC" && obj["course"] == "Dental") {
		demos.innerHTML = "FEE:" + EXAMFEE_SAARC_PG_Dental["amount"]
	}
	if (obj["Fee"] == "Application Fee" && obj["Level"] == "UG" &&
		obj["nationality"] == "INDIAN" && obj["course"] == "Ayurveda") {
		demos.innerHTML = "FEE:" + APPLICATIONFEE_INDIAN_UG_Ayurveda["amount"]
	}
	if (obj["Fee"] == "Application Fee" && obj["Level"] == "UG-DIPLOMA" &&
		obj["nationality"] == "INDIAN" && obj["course"] == "Ayurveda") {
		demos.innerHTML = "FEE:" + APPLICATIONFEE_INDIAN_UG_Ayurveda["amount"]
	}
	if (obj["Fee"] == "Application Fee" && obj["Level"] == "PG" &&
		obj["nationality"] == "INDIAN" && obj["course"] == "Ayurveda") {
		demos.innerHTML = "FEE:" + APPLICATIONFEE_INDIAN_PG_Ayurveda["amount"]
	}
	if (obj["Fee"] == "Application Fee" && obj["Level"] == "UG" &&
		obj["nationality"] == "INDIAN" && obj["course"] == "Medical") {
		demos.innerHTML = "FEE:" + APPLICATIONFEE_INDIAN_UG_Medical["amount"]
	}
	if (obj["Fee"] == "Application Fee" && obj["Level"] == "UG-DIPLOMA" &&
		obj["nationality"] == "INDIAN" && obj["course"] == "Medical") {
		demos.innerHTML = "FEE:" + APPLICATIONFEE_INDIAN_UG_Diploma_Medical["amount"]
	}
	if (obj["Fee"] == "Application Fee" && obj["Level"] == "PG" &&
		obj["nationality"] == "INDIAN" && obj["course"] == "Medical") {
		demos.innerHTML = "FEE:" + APPLICATIONFEE_INDIAN_PG_Medical["amount"]
	}
	if (obj["Fee"] == "Application Fee" && obj["Level"] == "UG" &&
		obj["nationality"] == "INDIAN" && obj["course"] == "Dental") {
		demos.innerHTML = "FEE:" + APPLICATIONFEE_INDIAN_UG_Dental["amount"]
	}
	if (obj["Fee"] == "Application Fee" && obj["Level"] == "UG-DIPLOMA" &&
		obj["nationality"] == "INDIAN" && obj["course"] == "Dental") {
		demos.innerHTML = "FEE:" + APPLICATIONFEE_INDIAN_UG_Diploma_Dental["amount"]
	}
	if (obj["Fee"] == "Application Fee" && obj["Level"] == "PG" &&
		obj["nationality"] == "INDIAN" && obj["course"] == "Dental") {
		demos.innerHTML = "FEE:" + APPLICATIONFEE_INDIAN_PG_Dental["amount"]
	}
	if (obj["Fee"] == "Application Fee" && obj["Level"] == "UG" &&
		obj["nationality"] == "FOREIGN" && obj["course"] == "Ayurveda") {
		demos.innerHTML = "FEE:" + APPLICATIONFEE_FOREIGN_UG_Ayurveda["amount"]
	}
	if (obj["Fee"] == "Application Fee" && obj["Level"] == "UG-DIPLOMA" &&
		obj["nationality"] == "FOREIGN" && obj["course"] == "Ayurveda") {
		demos.innerHTML = "FEE:" + APPLICATIONFEE_FOREIGN_UG_DIPLOMA_Ayurveda["amount"]
	}
	if (obj["Fee"] == "Application Fee" && obj["Level"] == "PG" &&
		obj["nationality"] == "FOREIGN" && obj["course"] == "Ayurveda") {
		demos.innerHTML = "FEE:" + APPLICATIONFEE_FOREIGN_PG_Ayurveda["amount"]
	}
	if (obj["Fee"] == "Application Fee" && obj["Level"] == "UG" &&
		obj["nationality"] == "FOREIGN" && obj["course"] == "Medical") {
		demos.innerHTML = "FEE:" + APPLICATIONFEE_FOREIGN_UG_Medical["amount"]
	}
	if (obj["Fee"] == "Application Fee" && obj["Level"] == "UG-DIPLOMA" &&
		obj["nationality"] == "FOREIGN" && obj["course"] == "Medical") {
		demos.innerHTML = "FEE:" + APPLICATIONFEE_FOREIGN_UG_Diploma_Medical["amount"]
	}
	if (obj["Fee"] == "Application Fee" && obj["Level"] == "PG" &&
		obj["nationality"] == "FOREIGN" && obj["course"] == "Medical") {
		demos.innerHTML = "FEE:" + APPLICATIONFEE_FOREIGN_PG_Medical["amount"]
	}
	if (obj["Fee"] == "Application Fee" && obj["Level"] == "UG" &&
		obj["nationality"] == "FOREIGN" && obj["course"] == "Dental") {
		demos.innerHTML = "FEE:" + APPLICATIONFEE_FOREIGN_UG_Dental["amount"]
	}
	if (obj["Fee"] == "Application Fee" && obj["Level"] == "UG-DIPLOMA" &&
		obj["nationality"] == "FOREIGN" && obj["course"] == "Dental") {
		demos.innerHTML = "FEE:" + APPLICATIONFEE_FOREIGN_UG_Diploma_Dental["amount"]
	}
	if (obj["Fee"] == "Application Fee" && obj["Level"] == "PG" &&
		obj["nationality"] == "FOREIGN" && obj["course"] == "Dental") {
		demos.innerHTML = "FEE:" + APPLICATIONFEE_FOREIGN_PG_Dental["amount"]
	}


	else {
		demos.innerHTML = "FEE:" + "INVALID!"
	}

}
button.addEventListener("click", result)
