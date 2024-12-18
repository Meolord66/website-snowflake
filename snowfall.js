const body = document.querySelector('body');

body.addEventListener('mousemove', (e) => {
    const x =e.offsetX;
    const y =e.offsetY;

    const newSpan = document.createElement('span');

    newSpan.style.left = x + 'px';

    newSpan.style.top = y + 'px';

    const s = Math.random() * 100;

    newSpan.style.width = s + 'px';

    newSpan.style.height = s + 'px';

    body.appendChild(newSpan);

    setTimeout(() => {
        newSpan.remove(); 
    },    3000)
})

