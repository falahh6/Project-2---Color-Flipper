let clickMe = document.getElementById('button');

clickMe.addEventListener('click', () => {
    var letters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    var colorHex = '#';
    for (let i = 0; i < 6; i++) {
        colorHex += letters[Math.floor(Math.random() * letters.length)];
    }
    document.body.style.backgroundColor = colorHex;
    let displayCode = document.getElementById("display-code");
    displayCode.textContent = 'Background Color : ' + colorHex;
})