"use strict";
import LifeGameBoard from './life.mjs';
import { log } from './util.mjs';
// 获取 id 为 "app" 的 div 元素
const appDiv = document.getElementById('app');
if (appDiv) {
    const life = new LifeGameBoard(appDiv, 10, 10, 20);
    log("GameBoard initialized");
} else {
    console.error('无法找到 id 为 "app" 的 div 元素');
}

const saveButton = document.getElementById('save');

saveButton?.addEventListener('click', () => {
    const canvas = document.querySelector('canvas');
    const imageData = canvas?.toDataURL('image/png');
    console.log('保存按钮被点击，图像数据:', imageData);
    const link = document.createElement("a");
        link.href = imageData;
        link.download = "game-of-life.png"; // 设置下载文件名
        link.click(); // 触发下载
});
