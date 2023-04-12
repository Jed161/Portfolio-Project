searchButton.addEventListener("click", event => {
    let stateName = stateNameInput.value
    stateNameInput.value =""
})

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '52e08cb6cemsh2d7505cae973900p1d6d4fjsn4fcdff3f18be',
		'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
	}
};

let firstPromise = fetch('https://realty-in-us.p.rapidapi.com/locations/v2/auto-complete?input=new%20york&limit=10', options)

	firstPromise.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));