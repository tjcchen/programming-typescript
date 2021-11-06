namespace Network {
  export namespace HTTP {
    export function post<T>(url: string): Promise<T> {
      return new Promise<T>(() => {});
    }
  }

  // export function request<T>(url: string): T | string {
  //   return '';
  // }
}