// all of the below connects the image with the button
document.getElementById('change-image').addEventListener('click', image)

document.getElementById('change-image1').addEventListener('click', image1)

document.getElementById('change-image2').addEventListener('click', image2)

document.getElementById('change-image3').addEventListener('click', image3)

document.getElementById('change-image4').addEventListener('click', image4)

function image () {
  document.getElementById('picture').src = 'Vocation.png'
}

function image1 () {
  document.getElementById('picture').src = 'Strengths.png'
}

function image2 () {
  document.getElementById('picture').src = 'passion.png'
}

function image3 () {
  document.getElementById('picture').src = 'career.png'
}

function image4 () {
  document.getElementById('picture').src = 'cummunity.png'
}
