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
        // Update the position of the current item
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