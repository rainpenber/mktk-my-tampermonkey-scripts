// ==UserScript==
// @name         B站弹幕按钮文字修改
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  将B站弹幕中的"屏蔽"按钮文字改为"删除"
// @author       Your name
// @match        *://*.bilibili.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 创建一个MutationObserver来监听DOM变化
    const observer = new MutationObserver((mutations) => {
        // 查找所有需要修改的按钮
        const buttons = document.querySelectorAll('.bpx-player-dm-btn span[data-action="block"]');
        buttons.forEach(button => {
            if (button.textContent === '屏蔽') {
                button.textContent = '删除';
            }
        });
    });

    // 开始观察DOM变化
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // 初始检查
    const initialButtons = document.querySelectorAll('.bpx-player-dm-btn span[data-action="block"]');
    initialButtons.forEach(button => {
        if (button.textContent === '屏蔽') {
            button.textContent = '删除';
        }
    });
})(); 