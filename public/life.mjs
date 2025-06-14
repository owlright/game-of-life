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
        this.width = width;
        this.height = height;
        this.gridSize = gridSize;
        this.canvas = ui.createCanvas(width, height, gridSize);
        this.context = this.canvas.getContext("2d");
        htmlElem.appendChild(this.canvas);
        this.name = "LifeGame";
        this.canvas.addEventListener("mousemove", this.highlightMouseGrid.bind(this));
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

    /**
     * 获取鼠标所在的网格坐标
     * @param {MouseEvent} event - 鼠标事件
     * @returns {{gridX: number, gridY: number}} 鼠标所在的网格坐标
     */
    getMouseGrid(event) {
        const { x, y } = this.getMousePosition(event);
        const gridX = Math.floor(x / this.gridSize);
        const gridY = Math.floor(y / this.gridSize);
        return { gridX, gridY };
    }

    /**
     * 高亮鼠标所在的网格
     * @param {MouseEvent} event - 鼠标事件
     */
    highlightMouseGrid(event) {
        const { gridX, gridY } = this.getMouseGrid(event);
        if (this.context !== null) {
            // 清除整个 canvas
            this.context.clearRect(0, 0, this.width, this.height);
            ui.drawGrid(this.context, this.width, this.height, this.gridSize);
            // 绘制高亮的网格
            this.context.fillStyle = "black";
            this.context.fillRect(gridX * this.gridSize, gridY * this.gridSize, this.gridSize, this.gridSize);
        }
    }
}


export default LifeGameBoard;