export interface Utils {
  addChainableMethod(ctx: any, name: string, chainingBehavior: (value: any) => void);
  addMethod(ctx: any, name: string, method: (value: any) => void);
  addProperty(ctx: any, name: string, getter: () => void);
  expectTypes(obj: Object, types: string[]);
  flag(obj: Object, key: string, value?: any);
  getActual(obj: Object, actual?: any);
  getEnumerableProperties(obj: Object);
  getMessage(obj: Object, message: string, negateMessage: string);
  getName(func: Function);
  getPathInfo(path: string, obj: Object);
  getPathValue(path: string, obj: Object);
  getProperties(obj: Object);
  hasProperty(obj: Object, name: string);
}
