window.onload = () => {

  axios.get('api/types'.then(res) => {
    //target something
  })

  axios.get('api/properties').then(res) => {
    let properties = res.data

    //target properties
    let properties_ui = document.getElementById('properties')

    //display each products in the DOM using forEach to loop

    properties.forEach((p) => {
      properties_ui.insertAdjacentHTML('beforeEnd', `
      <div class="property">
				<div class="property-image" style="background-image: url('../img/${p.image}')">
					<i class="far fa-star"></i>
				</div>
				<div class="color" style="background: ${p.color}"></div>
				<div class="property-extras">
					<div class="description">
						<h4>${p.name}</h4>
						<small>${p.description}</small>
					</div>
					<div class="price">
						<span>$${p.price}</span>
						<a href="#" class="button">Book Now</a>
					</div>
				</div>
			</div>
      `)
    })//end of forEach function

  }).catch((err) => {
    console.log('Err', err)

  })//end of products promise axios function

}//end of window.onload
