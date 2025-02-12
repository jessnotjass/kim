const buttonNo = document.getElementById('responseNo')
const buttonYes = document.getElementById('responseYes')

buttonNo.addEventListener('mouseover', () => {
  buttonNo.style.left = `${Math.ceil(Math.random() * (window.innerWidth - buttonNo.style.width))}px`
  buttonNo.style.top = `${Math.ceil(Math.random() * (window.innerHeight - buttonNo.style.height))}px`
})

buttonNo.addEventListener('click', () => {
  buttonNo.style.left = `${Math.ceil(Math.random() * (window.innerWidth - (buttonNo.style.width * -1.5)))}px`
  buttonNo.style.top = `${Math.ceil(Math.random() * (window.innerHeight - (buttonNo.style.height * -1.5)))}px`
  console.log(buttonNo.style.top)
  console.log(buttonNo.style.left)
})

buttonYes.addEventListener('click', () => {
  document.getElementById('responseNo').style.display = 'none'
  document.getElementById('responseYes').style.display = 'none'
  document.getElementById('title').style.display = 'none'
  document.getElementById('cat').style.display = 'block'
  document.getElementById('note').style.display = 'block'
  document.getElementById('content').style.marginTop = '0'
})
/*
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
*/