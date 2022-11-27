let clickMe = document.getElementById('button');

clickMe.addEventListener('click', () => {
    let colors = ['Red', 'Orange', 'Blue', 'Green', 'Yellow', 'Gray', 'Black', 'White', 'Purple', 'Aqua', 'Brown', 'Violet'];
    let random = Math.floor(Math.random() * colors.length);
    var colorSimple = colors[random];
    document.body.style.backgroundColor = colorSimple;
    let displayCode = document.getElementById("display-code");
    displayCode.textContent = 'Background Color : ' + colorSimple;
})