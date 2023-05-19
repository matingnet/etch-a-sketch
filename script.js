const container = document.querySelector('.container');

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function changeBgColor(e) {
    console.log(e.type);
    const box = e.target;
    if (e.type === 'mouseover' && !mouseDown) return
    box.style.backgroundColor = 'black';
  }
  
  function resetBgColor(e) {
    const box = e.target;
    box.style.backgroundColor = '';
  }
  
  function createGrid(size) {
    container.innerHTML = '';
  
    const containerWidth = container.offsetWidth;
    const borderWidth = 1;
    const boxSize = (containerWidth / size) - (2 * borderWidth);
  
    for (let i = 0; i < size ** 2; i++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.addEventListener('mouseover', changeBgColor)
      box.addEventListener('mousedown', changeBgColor)   
      box.style.height = `${boxSize}px`;
      box.style.width = `${boxSize}px`;
      container.appendChild(box);
  
      // Add hover event listeners to each box element
        
    }
  }
  
  function resetGrid() {
    const newSize = prompt('Enter the new size');
    if (newSize === null) {
      return; // User clicked "Cancel" in the prompt
    }
  
    if (newSize > 64) {
      alert('Too big');
      resetGrid();
      return;
    }
  
    createGrid(newSize);
  }
  
  const resetBtn = document.querySelector('.rst-btn');
  resetBtn.addEventListener('click', resetGrid);
  
  createGrid(16);