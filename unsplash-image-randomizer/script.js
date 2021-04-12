const container = document.querySelector('.container')
const baseURL = 'https://source.unsplash.com/random/'
const rows = 10

for(let i =0; i < rows * 3; i++) {
  const img = document.createElement('img')
  img.src = `${baseURL}${getRandSz()}`
  container.appendChild(img)
}

function getRandSz() {
  return `${getRandNum()}x${getRandNum()}`
}

function getRandNum() {
  return Math.floor(Math.random() * 10) + 300
}