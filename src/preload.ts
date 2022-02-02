import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
import { IPCKeys } from './constants';

contextBridge.exposeInMainWorld('myApi', {
  sendMessage: (message: string): void => {
    ipcRenderer.send(IPCKeys.SEND_MESSAGE, message);
  },
  onReceiveMessage: (handler: (message: string) => void): (() => void) => {
    ipcRenderer.on(
      IPCKeys.RECEIVE_MESSAGE,
      (event: IpcRendererEvent, message: string) => handler(message)
    );
    return () => ipcRenderer.removeAllListeners(IPCKeys.RECEIVE_MESSAGE);
  },
});
