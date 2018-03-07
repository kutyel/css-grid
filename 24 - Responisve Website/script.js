document.querySelector('button[aria-expanded]').addEventListener('click', ({ target }) => {
  const expanded = target.getAttribute('aria-expanded') === 'true'
  target.setAttribute('aria-expanded', !expanded)
})
