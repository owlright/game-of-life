"use strict";
import LifeGameBoard from './life.mjs';
import { log } from './util.mjs';
// 获取 id 为 "app" 的 div 元素
const appDiv = document.getElementById('app');
if (appDiv) {
    const life = new LifeGameBoard(appDiv, 600, 600, 20);
    log("GameBoard initialized");
} else {
    console.error('无法找到 id 为 "app" 的 div 元素');
}
