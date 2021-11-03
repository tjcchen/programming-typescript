namespace Network {
  export function get<T>(url: string): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      // ...
    });
  }
}