function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}
const coinMovement = ()=>{
	const xPotition = Math.floor(Math.random() * window.innerWidth)
	const yPosition = Math.floor(Math.random() * window.innerHeight)
	coin.style.top = `${yPosition}px`
	coin.style.left = `${xPotition}px`
}

const avatar = document.querySelector("#player")
const coin = document.querySelector("#coin")

coinMovement()

window.addEventListener('keyup', (e) => {
	console.log(e)
	if (e.key === "ArrowUp") {
		moveVertical(avatar, -50)
	} else if (e.key === "ArrowDown") {
		moveVertical(avatar, 50)
	} else if (e.key === "ArrowRight") {
		moveHorizontal(avatar, 50)
		avatar.style.transform = "scale(1,1)"
	} else if (e.key === "ArrowLeft") {
		moveHorizontal(avatar, -50)
		avatar.style.transform = "scale(-1,1)"
	}

	if (isTouching(avatar,coin)){
		coinMovement()
	} 
})

const currentPosition = (elementPosition) => {
	if (!elementPosition) return 100
	return position = parseInt(elementPosition.slice(0, -2))
}

const moveVertical = (element, movement) => {
	position = currentPosition(element.style.top) + movement;
	return element.style.top = `${position}px`
}
const moveHorizontal = (element, movement) => {
	position = currentPosition(element.style.left) + movement
	console.log(position)
	return element.style.left = `${position}px`
}




