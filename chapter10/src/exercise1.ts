export default null;

// 10.3 namespace
// NB: we take module as our first choice, and then namespace

// 10.3.2 compile and output
// Different from import and export, namespace does not comply with
// tsconfig.json module configuration, always generate a global variable
namespace Flowers {
  export function give(count: number) {
    return count + ' flowers';
  }
}

// Reasons not to use namespace, and use import and export instead
// (1) more readable, segregate modules
// (2) static analysis( eg: tree shaking, code spliting )
// (3) use module in mode commonjs too instead of module
