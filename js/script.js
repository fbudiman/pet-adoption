const columns = document.getElementsByClassName('column')

const repeatIdx = idx => idx >= 4 ? idx % 4 : idx

$(document).ready(() => {

dogs.forEach(({ image, source, name }, idx) => {
 	$(columns[repeatIdx(idx)]).append(`
  		<div class="container">
   			<span class="name">${name}</span>
   			<img src=.${image} />
  		</div>`)
	})

})
