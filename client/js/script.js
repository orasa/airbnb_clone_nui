window.onload = () => {


	axios.get('http://localhost:3000/api/countries').then((res) => {
		// target ul inside sidebar
		let ul = document.getElementById('sidebar').getElementsByTagName('ul')[0]
		// define categies
		let countries = res.data
		// display each category in the DOM
		countries.forEach((c) => {
			ul.insertAdjacentHTML('beforeEnd', `
				<li>
					<a href="#" class="country" id="${c.id}">${c.name}</a>
				</li>
			`)
		})
	})

	//

  // axios.get('api/types'.then(res) => {
  //   //target something
	// })
//CONNECT TO LOCALHOST
	axios.get('/api/properties').then((res) => {
		console.log('res', res.data);
		let properties = res.data
		console.log('property')

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
			        <a href="#" class="button">Book now</a>
			       </div>
			 </div>

      `)
		}) //end of forEach function

	}).catch((err) => {
		console.log('Err', err)

	})//end of products promise catch function

}//end of window.onload
