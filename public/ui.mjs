"use strict";
/**
 * 初始化并设置 canvas
 * @param {number} logicalWidth - 逻辑宽度
 * @param {number} logicalHeight - 逻辑高度
 * @param {number} gridSize - 网格大小
 * @returns {HTMLCanvasElement} - 初始化后的 canvas 元素
 */
function createCanvas(logicalWidth, logicalHeight, gridSize) {
    const canvas = document.createElement('canvas');
    const dpr = window.devicePixelRatio || 1; // 获取设备像素比
    console.log(`Device Pixel Ratio: ${dpr}`);

    // 设置 canvas 的实际像素大小
    canvas.width = logicalWidth * dpr;
    canvas.height = logicalHeight * dpr;

    // 使用 CSS 设置 canvas 的显示大小
    canvas.style.width = `${logicalWidth}px`;
    canvas.style.height = `${logicalHeight}px`;

    // 获取 canvas 的 2D 绘图上下文
    const ctx = canvas.getContext('2d');
    if (ctx) {
        // 缩放绘图上下文以适应设备像素比
        ctx.scale(dpr, dpr);

        // 绘制网格
        ctx.strokeStyle = '#000'; // 设置网格线颜色为黑色
        for (let x = 0; x <= logicalWidth; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, logicalHeight);
            ctx.stroke();
        }
        for (let y = 0; y <= logicalHeight; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(logicalWidth, y);
            ctx.stroke();
        }
    }

    return canvas;
}

// 获取 id 为 "log" 的日志区域
const logTextarea = document.getElementById('log');

/**
 * 向日志文本框添加日志信息
 * @param {string} message - 要显示的日志信息
 */
function log(message) {
    if (logTextarea) {
        /** @type {HTMLTextAreaElement} */(logTextarea).value += `${message}\n`; // 将日志信息追加到文本框中
        /** @type {HTMLTextAreaElement} */(logTextarea).scrollTop = /** @type {HTMLTextAreaElement} */(logTextarea).scrollHeight; // 自动滚动到底部
    } else {
        console.error('无法找到 id 为 "log" 的日志文本框');
    }
}

export default {
    createCanvas,
    log
};