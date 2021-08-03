const container = document.querySelector('.container')
const text = document.querySelector('.text')
const switchInput = document.querySelector('#switch')

switchInput.addEventListener('change', () => {
  console.log('switch value', switchInput.checked)
  console.log('text.value', text.innerHTML)
  
  if (switchInput.checked) {
    text.innerHTML = 'Switch to light mode'

    container.style.backgroundColor = '#1D1E22'
    text.style.color = '#FFFFFF'
    
  } else {
    text.innerHTML = 'Switch to dark mode'

    container.style.backgroundColor = 'initial'
    text.style.color = 'initial'
    
  }
})