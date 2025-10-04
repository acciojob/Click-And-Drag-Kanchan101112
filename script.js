// Select the container and all the cubes
const itemsContainer = document.querySelector('.items');
const items = document.querySelectorAll('.item');

let isDragging = false;
let currentItem = null;
let offsetX, offsetY;

// Mouse down event to start dragging
items.forEach(item => {
    item.addEventListener('mousedown', (e) => {
        isDragging = true;
        currentItem = item;

        // Calculate the offset between the mouse position and the item position
        const rect = item.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        // Add active class to the container
        itemsContainer.classList.add('active');
    });
});

// Mouse move event to drag the item
document.addEventListener('mousemove', (e) => {
    if (isDragging && currentItem) {
        // Update the position of the current itemconst container = document.querySelector('.items');
const cubes = document.querySelectorAll('.item');

let selectedCube = null;
let offsetX = 0;
let offsetY = 0;

// Wait for container size to be fully calculated
window.addEventListener('load', () => {
  const containerRect = container.getBoundingClientRect();

  cubes.forEach((cube, index) => {
    const row = Math.floor(index / 5);
    const col = index % 5;

    const gap = 10;

    const cubeWidth = (containerRect.width - gap * 4) / 5;
    const cubeHeight = (containerRect.height - gap * 4) / 5;

    cube.style.width = cubeWidth + 'px';
    cube.style.height = cubeHeight + 'px';

    cube.style.position = 'absolute';
    cube.style.left = col * (cubeWidth + gap) + 'px';
    cube.style.top = row * (cubeHeight + gap) + 'px';
    cube.style.cursor = 'grab';

    cube.addEventListener('mousedown', (e) => {
      selectedCube = cube;
      const cubeRect = cube.getBoundingClientRect();
      offsetX = e.clientX - cubeRect.left;
      offsetY = e.clientY - cubeRect.top;

      cube.style.zIndex = 1000;
      container.classList.add('active');
    });
  });
});

// Dragging
document.addEventListener('mousemove', (e) => {
  if (!selectedCube) return;

  const containerRect = container.getBoundingClientRect();

  let newX = e.clientX - containerRect.left - offsetX;
  let newY = e.clientY - containerRect.top - offsetY;

  // Boundary check
  const maxX = containerRect.width - selectedCube.offsetWidth;
  const maxY = containerRect.height - selectedCube.offsetHeight;

  newX = Math.max(0, Math.min(maxX, newX));
  newY = Math.max(0, Math.min(maxY, newY));

  selectedCube.style.left = newX + 'px';
  selectedCube.style.top = newY + 'px';
});

// Stop dragging
document.addEventListener('mouseup', () => {
  if (selectedCube) {
    selectedCube.style.zIndex = '';
    selectedCube = null;
    container.classList.remove('active');
  }
});

        const newX = e.clientX - offsetX;
        const newY = e.clientY - offsetY;

        // Set the new position while keeping it within the bounds
        currentItem.style.position = 'absolute';
        currentItem.style.left = `${newX}px`;
        currentItem.style.top = `${newY}px`;
    }
});

// Mouse up event to stop dragging
document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        currentItem = null;

        // Remove active class from the container
        itemsContainer.classList.remove('active');
    }
});