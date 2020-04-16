const moreBtn = document.querySelector('.info .metadata .titleAndBtn .moreBtn')
const title = document.querySelector('.info .metadata .titleAndBtn .title')

moreBtn.addEventListener('click', () => {
	moreBtn.classList.toggle('clicked')
	title.classList.toggle('clamp')
})
