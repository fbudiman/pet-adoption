const columns = document.getElementsByClassName('column')

const colIndex = idx => idx >= 4 ? idx % 4 : idx

$(document).ready(() => {

	dogs.forEach(({ image, source, name }, idx) => {
	 	$(columns[colIndex(idx)]).append(`
	  		<div class="container">
	   			<span class="name">${name}</span>
	   			<img src=.${image} />
	  		</div>`)
	})

})
