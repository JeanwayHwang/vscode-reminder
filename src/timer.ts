import * as vscode from 'vscode';
import { getConfig } from './utils';
import { ReminderView } from './reminderView';

export class Timer {
    public constructor(private context: vscode.ExtensionContext) {}
    public start() {
        const time = getConfig().get<number>('reminderIntervalMin') || 60; // 单位：分钟
        setInterval(() => {
            ReminderView.show();
        }, time * 60 * 1000);
    }
}