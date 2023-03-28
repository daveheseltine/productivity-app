// Import:
import axios from "axios";


const API = function (param, i) {
	return axios.get(`https://api.api-ninjas.com/v1/exercises/`, {
		headers: {
			"X-Api-Key": "IwhtCJGw12MHyUIULDa3uQ==XbFoMNPZvs2TKkfC"
		},
		params: {
			type: param.type,
			muscle: param.muscle,
			difficulty: param.difficulty,
			offset: i
		}
	});
}


// Export:
export default API