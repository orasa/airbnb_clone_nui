window.onload = () => {

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
          <i class="far fa-star"></i>
        </div>
        <div class="property-extras">
          <div class="type">
            <h4>${p.type}</h4>

          </div>
          <div class="description">
            <h4>${p.name}</h4>
            <small>${p.description}</small>
          </div>
          <div class="price">
            <span>${p.price}</span>
            <a href="#" class="button">Book Now</a>
          </div>
        </div>
      </div>
      `)
    }) //end of forEach function

  }).catch((err) => {
    console.log('Err', err)

  })//end of products promise catch function

}//end of window.onload
