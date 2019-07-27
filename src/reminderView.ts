import * as vscode from 'vscode';
import {getConfig} from './utils';

export class ReminderView{
    private static panel: vscode.WebviewPanel | undefined;
    public static show() {
        if (this.panel) {
            // 已有面板，恢复
            this.panel.reveal();
        }
        else {
            // 暂无面板，启动创建&绘制
            this.panel = vscode.window.createWebviewPanel(
                '温馨提示',
                '温馨提示',
                vscode.ViewColumn.Two,
                {
                    enableScripts: true
                }
            );
            this.panel.webview.html = getWebviewContent();
            this.panel.onDidDispose(() => {
                this.panel = undefined;
            });
        }
    }
}

// webview文档
function getWebviewContent(): string {
    const imgPath = getConfig().get<string>('reminderImg');
    return `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>温馨提示</title>
            </head>
			<body>
                <h1>休息时间到~ 该喝水啦！</h1>
                <img src="${imgPath}">
            </body>
        </html>
    `;
}