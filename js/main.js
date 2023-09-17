  const gradientBox = document.querySelector('.gradient-box');
  const selectMenu = document.getElementById('select')
  const color1 = document.getElementById('color1')
  const color2 = document.getElementById('color2')
  const textarea = document.querySelector('textarea')
  const refreshBtn = document.getElementById('refresh')
  const copyBtn = document.getElementById('copy')
  
  
  function generateRandomColor() {
    const randomColor = Math.floor(Math.random() * 0xffffff).toString(16)
    return `#${randomColor}`
  }
  
  
  function generateGradient(isRandom) {
 if (isRandom) {
      color1.value = generateRandomColor()
      color2.value = generateRandomColor()
    }
    
    const gradient = `linear-gradient(${selectMenu.value}, ${color1.value}, ${color2.value})`
    gradientBox.style.background = gradient
    textarea.textContent = `background: ${gradient};`
  }
  
  color1.addEventListener('input', () => {
    generateGradient(false);
  })

  color2.addEventListener('input', () => {
    generateGradient(false);
  })
  
  selectMenu.addEventListener('change', () => {
    generateGradient(false)
  })
  
  refreshBtn.addEventListener('click', () => {
    generateGradient(true)
  })

function copyCode() {
  navigator.clipboard.writeText(textarea.value)
  copyBtn.textContent = 'Code copied!';
  setTimeout(function() {
    copyBtn.textContent = 'Copy code';
  }, 1000);
}

copyBtn.addEventListener('click', copyCode)