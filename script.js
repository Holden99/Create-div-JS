'use strict'
class Options{
    constructor(height=100, width=100, bg='red', fontSize=15, textAlign='center'){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv(message){
        let div = document.createElement('div');
        let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
		div.style.cssText = param;
        div.textContent = message;
        document.body.appendChild(div);
    }
}
const a = new Options(200,200,'blue',60,'left');
a.createDiv('JS');