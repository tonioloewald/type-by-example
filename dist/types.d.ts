export interface StringMap {
    [key: string]: string | number | StringMap | any[] | Function;
}
export const isAsync: (func: Function) => boolean;
export const describe: (x: any) => string;
export const isInstanceOf: (obj: any, constructor: string | Function) => boolean;
export const specificTypeMatch: (type: any, subject: any) => boolean;
export const describeType: (x: any) => StringMap | string;
export const typeJSON: (x: any) => string;
export const typeJS: (x: any) => string;
export const matchType: (example: any, subject: any, errors?: string[], path?: string) => string[];
export const exampleAtPath: (example: any, path: string | string[]) => any;
interface TypeErrorConfig {
    functionName?: string;
    isParamFailure: boolean;
    expected: any;
    found: any;
    errors: string[];
}
export class TypeError {
    functionName: string;
    isParamFailure: boolean;
    expected: any;
    found: any;
    errors: string[];
    constructor(config: TypeErrorConfig);
    toString(): string;
}
export const assignReadOnly: (obj: any, propMap: StringMap) => any;
export const matchParamTypes: (types: any[], params: any[]) => string[];
interface TypeSafeFunction {
    (...args: any[]): any;
    paramTypes: any[];
    resultType: any;
}
export const typeSafe: (func: Function, paramTypes?: any[], resultType?: any, functionName?: string) => TypeSafeFunction;

//# sourceMappingURL=types.d.ts.map
