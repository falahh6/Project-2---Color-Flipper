let clickMe = document.getElementById('button');

clickMe.addEventListener('click', () => {
    var o = Math.round,
        r = Math.random,
        s = 255;
    var colorRgb = 'rgb(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ')';
    document.body.style.backgroundColor = colorRgb;
    let displayCode = document.getElementById("display-code");
    displayCode.textContent = 'Background Color : ' + colorRgb;
})