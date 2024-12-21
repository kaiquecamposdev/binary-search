export function measureExecutionTime(func: Function) {
  return function(...args: any[]) {
    const start = performance.now();
    const end = performance.now();
    const executionTime = end - start;
    const result = func(...args);
    console.log(`Execution time of ${func.name}: ${executionTime.toFixed(2)}ms`);
    return result;
  };
}