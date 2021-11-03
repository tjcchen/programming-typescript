// 1. A namespace can export function, variable, type, interface, or other namespaces.
// 2. We can also have nested namespaces

namespace Network {
  export class Connection {}

  export function get<T>(url: string): Promise<T> {
    return new Promise<T>(() => {});
  }

  // nested namespaces
  export namespace HTTP {
    export function get<T>(url: string): Promise<T> {
      return new Promise<T>(() => {});
    }
  }

  export namespace TCP {
    export function listenOn(port: number): Connection {
      return new Connection;
    }
  }

  export namespace UDP {
    // ...
  }

  export namespace IP {
    // ...
  }
}