const heartsDiv = document.createElement('div')
const maxHearts = 10
let totalHearts = 0

heartsDiv.classList.add('fallingObjects')

do {
  const heartDiv = document.createElement('div')
  const heartImage = document.createElement('img')
  heartDiv.classList.add('fallingObject')
  heartImage.src = 'assets/heart.gif'
  heartImage.style.width = '25px'
  heartDiv.appendChild(heartImage)
  heartsDiv.appendChild(heartDiv)
  totalHearts++
} while (totalHearts < maxHearts) 

document.body.appendChild(heartsDiv)
