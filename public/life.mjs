"use strict";
import ui from './ui.mjs';
class LifeGameBoard {
    /**
     * 创建一个 LifeGameBoard 实例
     * @param {HTMLElement} htmlElem - 用于绘制游戏的 canvas 元素
     * @param {number} width - 游戏板的宽度
     * @param {number} height - 游戏板的高度
     * @param {number} gridSize - 用于绘制游戏的 canvas 元素
     */
    constructor(htmlElem, width, height, gridSize) {
        this.canvas = ui.createCanvas(width, height, gridSize);
        htmlElem.appendChild(this.canvas);
        this.name = "LifeGame";
        this.canvas.addEventListener("mousemove", this.getMousePosition.bind(this));
        console.log("Life class initialized");
    }
    /**
     * 获取鼠标在 canvas 上的坐标
     * @param {MouseEvent} event - 鼠标事件
     */
    getMousePosition(event) {
        const rect = this.canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        console.log(`Mouse Position: x=${x}, y=${y}`);
        return { x, y };
    }
}


export default LifeGameBoard;