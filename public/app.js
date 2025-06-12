"use strict";
import ui from './ui.mjs';
import Life from './life.mjs';
const lifeInstance = new Life();
// 获取 id 为 "app" 的 div 元素
const appDiv = document.getElementById('app');
if (appDiv) {
    // 调用 setupCanvas 函数
    const canvas = ui.createCanvas(600, 600, 20);
    appDiv.appendChild(canvas);
} else {
    console.error('无法找到 id 为 "app" 的 div 元素');
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

// 示例：添加日志信息
log('Game initialized.');
log('Ready to start.');