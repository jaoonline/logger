
export interface FuncInterface {
  log(s: any): Promise<any>;
  info(s: any): Promise<any>;
  getLog(l: string): Promise<any>;
}