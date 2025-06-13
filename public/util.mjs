"use strict";
import ui from './ui.mjs';
/**
 * 日志函数，用于向日志区域添加日志信息。
 *
 * @param {string} message - 要显示的日志信息。
 */
const log = (message) => {
    ui.log(message);
}

/**
 * Throws an error if the given condition is falsy.
 *
 * @param {boolean} condition - The condition to assert.
 * @param {string} [message] - Optional error message to display if the assertion fails.
 * @throws {Error} Throws an error if the condition is falsy.
 */
const assert = (condition, message) => {
    if (!condition) {
        throw new Error(message || 'Assertion failed');
    }
};

export { assert, log};