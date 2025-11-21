import { PackageConfig } from '../interface/para-interface';
import {FuncInterface} from '../interface/func-interface';

export class Loggers implements FuncInterface {
  private readonly config: PackageConfig;
  private isInitialized = false;

  constructor(config: PackageConfig) {
    this.validateConfig(config);
    this.config = { 
      apiUrl: 'https://api.default.com',
      ...config 
    };
    this.isInitialized = true;
  }
   public async log(): Promise<any> {
    // Use the configuration
    // const response = await fetch(this.config.apiUrl!, {
    //   headers: {
    //     'Authorization': `Bearer ${this.config.privateKey}`
    //   },
    // });
    console.log(`Logging for project: ${this.config.projectName}`);
    // return response.json();
    return { message: `Log for project: ${this.config.projectName}` };
    }

  private validateConfig(config: PackageConfig): void {
    if (!config.projectName || !config.privateKey) {
      throw new Error('Project name and privateKey are required');
    }
    
    if (config.privateKey.length < 32) {
      throw new Error('Private key must be at least 32 characters');
    }
  }

  public doSomething(): void {
    if (!this.isInitialized) {
      throw new Error('Package not initialized. Call constructor first.');
    }
    console.log(`Package "${this.config.projectName}" is doing something`);
    // Implementation here
  }

  public async getLog(): Promise<any> {
    // Use the configuration
    const response = await fetch(this.config.apiUrl!, {
      headers: {
        'Authorization': `Bearer ${this.config.privateKey}`
      },
    });
    
    return response.json();
  }
}