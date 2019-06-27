window.onload = () => {

 //get
	axios.get('http://localhost:3000/api/countries').then((res) => {

		// target ul inside sidebar
		let ul = document.getElementById('sidebar').getElementsByTagName('ul')[0]
		// define counries
		let countries = res.data
		console.log(res.data);
		// display each category in the DOM
		countries.forEach((c) => {
			ul.insertAdjacentHTML('beforeEnd', `
				<li>
					<a href="#" class="country" id="${c.id}">${c.name}</a>
				</li>
			`)
		})
	})



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
			          <h5>${p.name}</h5>
			          <small>${p.description}</small>
			        </div>
			       <div class="price">
			        <span>$${p.price}</span>
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
		if (c.target.classList.contains('country')) {

			//
			axios.get(`http://localhost:3000/api/properties?country=${c.target.id}`).then((res) => {
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
