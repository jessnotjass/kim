const  buttonNo = document.getElementById('responseNo')
const buttonYes = document.getElementById('responseYes')

buttonNo.addEventListener('mouseover', () => {
  buttonNo.style.left = `${Math.ceil(Math.random() * (window.innerWidth - buttonNo.style.width))}px`
  buttonNo.style.top = `${Math.ceil(Math.random() * (window.innerHeight - buttonNo.style.height))}px`
})

buttonNo.addEventListener('click', () => {
  buttonNo.style.left = `${Math.ceil(Math.random() * (window.innerWidth - buttonNo.style.width))}px`
  buttonNo.style.top = `${Math.ceil(Math.random() * (window.innerHeight - buttonNo.style.height))}px`
})

buttonYes.addEventListener('click', () => {
  document.getElementById('h2').innerHTML = "Yay!"
  document.getElementById('h3').innerHTML = "I'll pick you up @ 3!"
  document.getElementById('pyro').style.display = 'block'
  document.getElementById('doggo').style.display = 'none'
  document.getElementById('doggo2').style.display = 'block'
  document.getElementById('divDoggo').style.display = 'none'
  document.getElementById('divDoggo2').style.display = 'block'
  buttonNo.style.display = 'none'
  buttonYes.style.display = 'none'
})
