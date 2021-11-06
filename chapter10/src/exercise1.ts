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
