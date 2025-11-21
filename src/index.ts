export * from './func/func'
import { PackageConfig } from './interface/para-interface'
import { FuncInterface } from './interface/func-interface'
import { Loggers } from './func/func';

// Factory function approach
export function Logger(config: PackageConfig): FuncInterface {
  return new Loggers(config);
}

// Class-based approach
export { Loggers as Log };

// Types
export * from './interface/para-interface';
export * from './interface/func-interface';

// Default export
export default Logger;