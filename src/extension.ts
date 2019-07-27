import * as vscode from 'vscode';
import { Timer } from './timer';
import { ReminderView } from './reminderView';

// 插件被激活时触发，所有代码总入口
export function activate(context: vscode.ExtensionContext) {
	// 后台运行
	new Timer(context).start();
	// 命令触发
	let disposable = vscode.commands.registerCommand('extension.reminder', () => {
		ReminderView.show();
	});
	context.subscriptions.push(disposable);
}

// 插件被释放时触发
export function deactivate() {}
