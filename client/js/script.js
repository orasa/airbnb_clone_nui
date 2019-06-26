window.onload = () => {


	axios.get('http://localhost:3000/api/categories').then((res) => {
		// target ul inside sidebar
		let ul = document.getElementById('sidebar').getElementsByTagName('ul')[0]
		// define categies
		let categories = res.data
		// display each category in the DOM
		categories.forEach((c) => {
			ul.insertAdjacentHTML('beforeEnd', `
				<li>
					<a href="#" class="category" id="${c.id}">${c.name}</a>
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
      <div class="product">
			    <div class="gallery">
  				<div class="product-image" style="background-image: url('${p.image}')">
  					<i class="far fa-star"></i>
  				</div>

  				<div class="product-extras">
  					<div class="description">
  						<h5>${p.name}</h5>
  						<small>${p.description}</small>
  					</div>

  					<div class="price">
  						<span>$${p.price}</span>
  						<a href="#" class="button">Book now</a>
  					</div>
  				</div>
					</div>
  			</div>




      `)
    }) //end of forEach function

  }).catch((err) => {
    console.log('Err', err)

  })//end of products promise catch function

}//end of window.onload
