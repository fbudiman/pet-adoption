
const columns = document.getElementsByClassName('column')
const blank = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
let columnIdx = -1

// function to loop through (4) columns and repeat
// ensures each column gets populated evenly
const setColumnIdx = () => {
	columnIdx++

	return columnIdx >= 4 ? columnIdx % 4 : columnIdx
}

// function to select/unselect photo
const toggleSelected = (img=blank) => {
	$('body').toggleClass('disable-scroll')
	$('#selected').toggleClass('hidden')
	$('#selected img').attr('src', img)
}

const stopProp = e => e.stopPropagation()

// make sure this runs after all the dependencies are loaded
$(document).ready(() => {

	// function to populate image gallery with data
	const appendPuppies = () => {
		dogs.forEach(({ image, source, name }) => {
		   	$(columns[setColumnIdx()])
		    	.append(`<div class="container">
		       		<span class="name">${name}</span>
		       		<img src=.${image} onclick=toggleSelected(\`.${image}\`) />
		     	</div>`)
		})
	}

	// simple infinite scroll
	$(window).scroll(() => {
	    if ($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
	        appendPuppies()
	    }
	})

	// initialize the first set of data to ensure scroll bar
	const initialize = () => {
	 	for (let i = 0; i < 3; i++) {
	  		appendPuppies()
	 	}
	}

	initialize()
})