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

