namespace Network {
  type Buffer = {};
  export namespace UDP {
    export function send(url: string, packets: Buffer): Promise<void> {
      return new Promise<void>(() => {});
    }
  }
}