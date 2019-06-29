window.onload = () => {


// get all types/ on api
	//axios.get('http://localhost:3000/api/types').then((res) => {
		axios.get(/api/types').then((res) => {

		// target ul inside sidebar
		let type_ui = document.getElementById('type').getElementsByTagName('ul')[0]
		// define counries
		let types = res.data
		console.log(res.data)
		// display each category in the DOM
		types.forEach((t) => {
			type_ui.insertAdjacentHTML('beforeEnd', `
				<li>
					<a href="#" class="country" id="${t.id}">${t.name}</a>
				</li>
			`)
		})
	})

 //get all countries
	
	axios.get('/api/countries').then((res) => {

		// target ul inside sidebar
		let locations_ui = document.getElementById('country').getElementsByTagName('ul')[0]
		// define counries
		let countries = res.data
		console.log(res.data)
		// display each category in the DOM
		countries.forEach((c) => {
			locations_ui.insertAdjacentHTML('beforeEnd', `
				<li>
					<a href="#" class="country" id="${c.id}">${c.name}</a>
				</li>
			`)
		})
	})

	// axios.get('http://localhost:3000/api/properties').then((res) => {
	//
	// 	// target ul inside sidebar
	// 	let types_ui = document.getElementById('sidebar').getElementsByTagName('ul')[0]
	// 	// define counries
	// 	let countries = res.data
	// 	console.log(res.data)
	// 	// display each category in the DOM
	// 	countries.forEach((c) => {
	// 		types_ui.insertAdjacentHTML('beforeEnd', `
	// 			<li>
	// 				<a href="#" class="country" id="${c.id}">${c.name}</a>
	// 			</li>
	// 		`)
	// 	})
	// })


  // axios.get('api/types'.then(res) => {   //target something
	// })
//CONNECT TO LOCALHOST
	axios.get('/api/properties').then((res) => {
		 console.log('res from basic properties api', res.data);
		let properties = res.data

		//target properties
		let properties_ui = document.getElementById('properties')

		properties.forEach((p) => {
			properties_ui.insertAdjacentHTML('beforeEnd', `
			<div class="property">
					 <div class="property-image" style="background-image: url('${p.image}')">
			      </div>
			        <div class="description">
			          <h6>${p.name}</h6>
			          <h6>${p.description}</h6>
			        </div>
			       <div class="price">
			        <p>$${p.price}</p>
			        <a href="#" class="button"><h5>Book now<h5></a>
			       </div>
			 </div>

      `)
		}) //end of forEach function

	}).catch((err) => {
		console.log('Err', err)

	})//end of pro promise catch function
	// when click c.target give us the id i.e click Thailand, has id = 1
	document.addEventListener('click', (c) => {
		console.log('c.target.id from addEventL',c.target.id);


		// START HERE
		if (c.target.classList.contains('country')) {

			//
			axios.get(`/api/properties?country=${c.target.id}`).then((res) => {
				console.log('res from click', res.data)
				let properties = res.data
				// target products
				let properties_ui = document.getElementById('properties')

				// clear the property
				properties_ui.innerHTML = ''
				if (res.data.length) {
					// display each property in the DOM
					properties.forEach((p) => {
						properties_ui.insertAdjacentHTML('beforeEnd', `
						<div class="property">
								 <div class="property-image" style="background-image: url('${p.image}')">
						      </div>
						        <div class="description">
						          <h5>Name:${p.name}</h5>
						          <small>Description:${p.description}</small>
						        </div>
										<div class="type">
						          <small>type:${p.type}</small>
						        </div>
						       <div class="price">
						        <span>$${p.price}</span>
						        <a href="#" class="button"><h5>Book now<h5></a>
						       </div>
						 </div>
						`)
					})
				} else {
					properties_ui.innerHTML = 'No Properties found.'
				}
			}).catch((err) => {
				console.log('err', err)
			})
		}
		// END HERE
		if (c.target.classList.contains('country')) {

			//
			axios.get(`/api/properties?country=${c.target.id}`).then((res) => {
				console.log('res from click', res.data)
				let properties = res.data
				// target products
				let properties_ui = document.getElementById('properties')

				// clear the property
				properties_ui.innerHTML = ''
				if (res.data.length) {
					// display each property in the DOM
					properties.forEach((p) => {
						properties_ui.insertAdjacentHTML('beforeEnd', `
						<div class="property">
								 <div class="property-image" style="background-image: url('${p.image}')">
						      </div>
						        <div class="description">
						          <h5>Name:${p.name}</h5>
						          <small>Description:${p.description}</small>
						        </div>
										<div class="type">
						          <small>type:${p.type}</small>
						        </div>
						       <div class="price">
						        <span>$${p.price}</span>
						        <a href="#" class="button"><h5>Book now<h5></a>
						       </div>
						 </div>
						`)
					})
				} else {
					properties_ui.innerHTML = 'No Properties found.'
				}
			}).catch((err) => {
				console.log('err', err)
			})
		}





	})

}

//end of window.onload
