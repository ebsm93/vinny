const images = document.querySelectorAll('img');
images.forEach(i => {
	i.addEventListener('click',clickImage);
}); 

function clickImage() {
	// console.log('click');
	// console.log(this.src);
    this.classList.toggle('clicked-image')
}
