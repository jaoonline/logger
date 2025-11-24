import { PackageConfig } from '../interface/para-interface';
import {FuncInterface} from '../interface/func-interface';

export class Loggers implements FuncInterface {
  private readonly config: PackageConfig;
  private isInitialized = false;

  constructor(config: PackageConfig) {
    this.validateConfig(config);
    this.config = { 
      apiUrl: 'https://api.support.tulupay.com',
      ...config 
    };
    this.isInitialized = true;
  }
   public async log(contextData: any): Promise<any> {
    // Use the configuration
    const postData = {
      type: 'log', // variable for logger type
      context: contextData     // variable for context
    };

    const response = await fetch(`${this.config.apiUrl!}/logger`, {
      method: 'POST',
      headers: {
        'Authorization': `${this.config.privateKey}`,
        'projectName': `${this.config.projectName}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    });
    console.log(`Logging for project: ${this.config.projectName}`);
    // return response.json();
    return { message: `Log for project: ${this.config.projectName}` };
    }

    public async info(contextData: any): Promise<any> {
    // Use the configuration
    const postData = {
      type: 'info', // variable for logger type
      context: contextData     // variable for context
    };

    const response = await fetch(`${this.config.apiUrl!}/logger`, {
      method: 'POST',
      headers: {
        'Authorization': `${this.config.privateKey}`,
        'projectName': `${this.config.projectName}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    });
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

  public async getLog(type: string): Promise<any> {
    // Use the configuration
    let url: string;
    if (type) {
      url = `${this.config.apiUrl!}/logger/${type}`;
    }else{
      url = `${this.config.apiUrl!}/logger`;
    }
    console.log(url);
    
   const response = await fetch(url, {
      headers: {
        'Authorization': `${this.config.privateKey}`,
        'projectName': `${this.config.projectName}`,
        'Content-Type': 'application/json'
      },
    });
    
    return response.json();
  }
}