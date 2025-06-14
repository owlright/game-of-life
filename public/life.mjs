"use strict";
import ui from './ui.mjs';
class LifeGameBoard {
    /**
     * 创建一个 LifeGameBoard 实例
     * @param {HTMLElement} htmlElem - 用于绘制游戏的 canvas 元素
     * @param {number} gridXNum - 游戏板的宽度
     * @param {number} gridYNum - 游戏板的高度
     * @param {number} gridSize - 用于绘制游戏的 canvas 元素
     */
    constructor(htmlElem, gridXNum, gridYNum, gridSize) {
        this.gridXNum = gridXNum;
        this.gridYNum = gridYNum;
        this.width = gridXNum * gridSize;
        this.height = gridYNum * gridSize;
        this.gridSize = gridSize;
        this.canvas = ui.createCanvas(this.width, this.height, gridSize);
        this.context = this.canvas.getContext("2d");
        htmlElem.appendChild(this.canvas);
        this.name = "LifeGame";
        // 初始化网格状态数组
        this.gridState = Array.from({ length: Math.floor(this.height / gridSize) }, () =>
            Array(Math.floor(this.width / gridSize)).fill(0)
        );
        // console.log(`GameBoard initialized with size: ${this.width}x${this.height}, grid size: ${this.gridState}`);
        this.canvas.addEventListener("mousemove", this.highlightMouseGrid.bind(this));
        this.canvas.addEventListener("click", this.toggleGridState.bind(this));
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
     * 高亮指定网格
     * @param {number} gridX - 网格的 X 坐标
     * @param {number} gridY - 网格的 Y 坐标
     */
    hightlighGrid(gridX, gridY) {
        // 绘制高亮的网格
        if (this.context !== null) {
            this.context.fillStyle = "black";
            this.context.fillRect(gridX * this.gridSize, gridY * this.gridSize, this.gridSize, this.gridSize);
        }
    }

    /**
     * 高亮鼠标所在的网格
     * @param {MouseEvent} event - 鼠标事件
     */
    highlightMouseGrid(event) {
        const { gridX, gridY } = this.getMouseGrid(event);
        if (this.context !== null) {
            this.drawGridByState();
            this.hightlighGrid(gridX, gridY);
        }
    }

    drawGridByState() {
        if (this.context !== null) {
            this.context.clearRect(0, 0, this.width, this.height);
            ui.drawGrid(this.context, this.width, this.height, this.gridSize);
            // 绘制网格状态
            for (let y = 0; y < this.gridYNum; y++) {
                for (let x = 0; x < this.gridXNum; x++) {
                    if (this.gridState[y][x] === 1) {
                        this.context.fillStyle = "black"; // 设置填充颜色
                        this.context.fillRect(x * this.gridSize, y * this.gridSize, this.gridSize, this.gridSize);
                    }
                }
            }
        }
    }

    /**
     * 切换网格状态
     * @param {MouseEvent} event - 鼠标事件
     */
    toggleGridState(event) {
        const { gridX, gridY } = this.getMouseGrid(event);
        if (gridX >= 0 && gridX < this.gridXNum && gridY >= 0 && gridY < this.gridYNum) {
            // 切换网格状态
            this.gridState[gridY][gridX] = this.gridState[gridY][gridX] === 0 ? 1 : 0;
            console.log(`Toggled grid state at (${gridX}, ${gridY})`);
            this.drawGridByState();
        }
    }
}


export default LifeGameBoard;