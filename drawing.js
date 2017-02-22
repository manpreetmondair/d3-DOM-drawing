enableDrawing();

function enableDrawing() {
    document.addEventListener('click', function(e) {
        //Random number from 0 - 255, rounded.
        var red =  Math.round(Math.random() * 255);
        // Random number from 0 - 255, rounded.
        var green = Math.round(Math.random() * 255);
        //Random number from 0 - 255, rounded.
        var blue = Math.round(Math.random() * 255);
        var box = document.createElement('div');
        box.style.position = 'absolute';
        //MouseEvent (inside the e variable) Y value.
        box.style.top = e.pageY+ 'px';
        //MouseEvent (inside the e variable) X value.
        box.style.left = e.pageX+ 'px';
        // `${e.pageY}px`
        box.style.width = '10px';
        box.style.height = '10px';
        box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

        document.body.appendChild(box);
    });
}
