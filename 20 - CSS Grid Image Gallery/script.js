const gallery = document.querySelector('.gallery')
const overlay = document.querySelector('.overlay')
const overlayImg = overlay.querySelector('img')
const overlayBtn = overlay.querySelector('.close')

const randNum = limit => ((Math.random() * limit) >>> 0) + 1
const digits = Array(50)
  .fill()
  .map(() => [randNum(4), randNum(4)])
  .concat([
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
  ])
const generateHTML = ([h, v]) => `
  <div class="item h${h} v${v}">
    <img src="images/${randNum(12)}.jpg" />
    <div class="item__overlay">
      <button>View →</button>
    </div>
  </div>
`
const onClick = ({ currentTarget }) => {
  const { src } = currentTarget.querySelector('img')
  overlayImg.src = src
  overlay.classList.add('open')
}

gallery.innerHTML = digits.map(generateHTML).join('')

const items = gallery.querySelectorAll('.item')
items.forEach(item => item.addEventListener('click', onClick))
overlayBtn.addEventListener('click', () => overlay.classList.remove('open'))
