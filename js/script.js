
let selected

const columns = document.getElementsByClassName('column')

const colIndex = idx => idx >= 4 ? idx % 4 : idx

const setSelected = img => {
	selected = img
}

$(document).ready(() => {

	const appendPuppies = () => {
		dogs.forEach(({ image, source, name }, idx) => {
		 	$(columns[colIndex(idx)]).append(`
		  		<div class="container">
		   			<span class="name">${name}</span>
		   			<img src=.${image} onclick=setSelected(\`.${image}\`) />
		  		</div>`)
		})
	}

	appendPuppies()

})
