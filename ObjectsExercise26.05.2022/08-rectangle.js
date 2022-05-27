function rectangle(widthInput, heightInput, colorInput) {
    let width = Number(widthInput);
    let height = Number(heightInput);
    let color = colorInput.charAt(0).toUpperCase() + colorInput.slice(1);

    let obj = {
        width,
        height,
        color,
        calcArea: function (width, height) {
            return this.width * this.height;
        }
    }

    return obj;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());