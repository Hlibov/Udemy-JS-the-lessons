class Options {
  constructor(height, width, bg, fontSize, textAlign, text) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
    this.text = text;
  }
  blockAddition() {
    let divElement = document.createElement('div');
    divElement.classList.add('qwerty');
    // divElement.append(this.text);
    divElement.textContent = `${this.text}`;
    let divInDom = document.body.appendChild(divElement);
    divElement.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign}`;
  }
}

let objStyle = new Options("100px", "100%", "yellow", "20px", "center", "Hello World!");
objStyle.blockAddition();
console.log(objStyle);
