export interface IMyApi {
  sendMessage(message: string): void;
  onReceiveMessage(handler: (message: string) => void): () => void;
}

declare global {
  interface Window {
    myApi: IMyApi;
  }
}
