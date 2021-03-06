﻿
(function ($) {
    $.config = {
        wskey: "", //长链接账号
    };

    $.init = function (config) {
        this.config = config;
        console.log(config);
        return this;
    };

	/**
	 * 连接webcocket
	 */
    $.connect = function () {
        var protocol = 'wss:';// (window.location.protocol == 'http:') ? 'ws:' : 'wss:';
        var url = "//crm.adenservices.com/WebSocketHandler/Handler.ashx?wskey=";//"//localhost:8099/Handler.ashx?wskey=";
        this.host = protocol + url + this.config.wskey;

        window.WebSocket = window.WebSocket || window.MozWebSocket;
        if (!window.WebSocket) { // 检测浏览器支持  
            this.error('Error: WebSocket is not supported .');
            return;
        }
        this.socket = new ReconnectingWebSocket(this.host); // 创建连接并注册响应函数  
        this.socket.onopen = function () {
            $.onopen();
        };
        this.socket.onmessage = function (message) {
            $.onmessage(message);
        };
        this.socket.onclose = function () {
            $.onclose();
            $.socket = null; // 清理  
        };
        this.socket.onerror = function (errorMsg) {
            $.onerror(errorMsg);
        }
        return this;
    }

	/**
	 * 自定义异常函数
	 * @param {Object} errorMsg
	 */
    $.error = function (errorMsg) {
        this.onerror(errorMsg);
    }

	/**
	 * 消息发送
	 */
    $.send = function (message) {
        if (this.socket) {
            this.socket.send(message);
            return true;
        }
        this.error('please connect to the server first !!!');
        return false;
    }

    $.close = function () {
        if (this.socket != undefined && this.socket != null) {
            this.socket.close();
        } else {
            this.error("this socket is not available");
        }
    }

	/**
	 * 消息回調
	 * @param {Object} message
	 */
    $.onmessage = function (message) {

    }

	/**
	 * 链接回调函数
	 */
    $.onopen = function () {
        console.log("connect open...");
    }

	/**
	 * 关闭回调
	 */
    $.onclose = function () {
        console.log("connect closed...");
    }

	/**
	 * 异常回调
	 */
    $.onerror = function () {
        console.log("error...");
    }

})(ws = {});