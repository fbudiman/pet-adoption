
const columns = document.getElementsByClassName('column')
const blank = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
let columnIdx = -1

const stopProp = e => e.stopPropagation()

// function to loop through (4) columns and repeat
// ensures each column gets populated evenly
const setColumnIdx = () => {
	columnIdx++

	return columnIdx >= 4 ? columnIdx % 4 : columnIdx
}

// function to select/unselect photo
const toggleSelected = (img=blank, name='') => {
	document.querySelector('body').classList.toggle('disable-scroll')
	document.querySelector('#selected').classList.toggle('hidden')
	document.querySelector('#selected > img').setAttribute('src', img)
	document.querySelector('#selected > div').innerHTML = name
}

// function to populate image gallery with data
const appendPuppies = () => {
	dogs.forEach(({ image, name }) => {
		let content = document.createElement('div')
		content.className = 'container'
		content.innerHTML = `<span class="name">${name}</span>
	   		<img 
	   			src=".${image}" 
	   			onclick="toggleSelected('.${image}', '${name}')"
	   		/>`

		columns[setColumnIdx()].appendChild(content)
	})
}

// simple infinite scroll
window.onscroll = () => {
	if (window.innerHeight + window.pageYOffset > document.body.offsetHeight - 50) {
		appendPuppies()
	}
}

// initialize the first set of data to ensure scroll bar
const initialize = () => {
 	for (let i = 0; i < 3; i++) {
  		appendPuppies()
 	}
}

initialize()
