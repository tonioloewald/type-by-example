function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $fbb37d8dd62dae63$exports = {};

$parcel$export($fbb37d8dd62dae63$exports, "isAsync", () => $fbb37d8dd62dae63$export$aefee5ebe1dcfd9e);
$parcel$export($fbb37d8dd62dae63$exports, "describe", () => $fbb37d8dd62dae63$export$cd5450f3a47e3789);
$parcel$export($fbb37d8dd62dae63$exports, "isInstanceOf", () => $fbb37d8dd62dae63$export$49034edbe6b62415);
$parcel$export($fbb37d8dd62dae63$exports, "specificTypeMatch", () => $fbb37d8dd62dae63$export$afac8cfc87e341d0);
$parcel$export($fbb37d8dd62dae63$exports, "describeType", () => $fbb37d8dd62dae63$export$b84ab2ad77da7adc);
$parcel$export($fbb37d8dd62dae63$exports, "typeJSON", () => $fbb37d8dd62dae63$export$b3b9d0693605ef8b);
$parcel$export($fbb37d8dd62dae63$exports, "typeJS", () => $fbb37d8dd62dae63$export$518decae858c583a);
$parcel$export($fbb37d8dd62dae63$exports, "matchType", () => $fbb37d8dd62dae63$export$a71efb50630d6710);
$parcel$export($fbb37d8dd62dae63$exports, "exampleAtPath", () => $fbb37d8dd62dae63$export$4ac0c519b1a9e80e);
$parcel$export($fbb37d8dd62dae63$exports, "TypeError", () => $fbb37d8dd62dae63$export$f1c4b559ff572cce);
$parcel$export($fbb37d8dd62dae63$exports, "assignReadOnly", () => $fbb37d8dd62dae63$export$a3a0906114eec376);
$parcel$export($fbb37d8dd62dae63$exports, "matchParamTypes", () => $fbb37d8dd62dae63$export$416306c82e0f43c5);
$parcel$export($fbb37d8dd62dae63$exports, "typeSafe", () => $fbb37d8dd62dae63$export$de5257c629b5bb7d);
const $7462882f3d13e4d6$var$stringify = (x)=>{
    try {
        return JSON.stringify(x);
    } catch (_) {
        return "{has circular references}";
    }
};
const $7462882f3d13e4d6$export$5a4bb2b1c89bdce7 = (...messages)=>new Error(messages.map($7462882f3d13e4d6$var$stringify).join(" "));


const $fbb37d8dd62dae63$var$asyncFunc = async ()=>{};
const $fbb37d8dd62dae63$export$aefee5ebe1dcfd9e = (func)=>func.constructor === $fbb37d8dd62dae63$var$asyncFunc.constructor;
const $fbb37d8dd62dae63$export$cd5450f3a47e3789 = (x)=>{
    if (x === null) return "null";
    if (Array.isArray(x)) return "array";
    if (typeof x === "number") {
        if (isNaN(x)) return "NaN";
    }
    if (typeof x === "string" && x.startsWith("#")) return x;
    if (x instanceof Promise) return "promise";
    if (typeof x === "function") return x.constructor === (async ()=>{}).constructor ? "async" : "function";
    if (typeof x === "object" && x.constructor.name !== "Object") return x.constructor.name;
    return typeof x;
};
// FIXME: bun doesn't handle unicode characters in code correctly
// should be able to replace \u221E with ∞
const $fbb37d8dd62dae63$var$parseFloatOrInfinity = (x)=>{
    if (x === "-∞") return -Infinity;
    else if (x[0] === "∞") return Infinity;
    else return parseFloat(x);
};
const $fbb37d8dd62dae63$var$inRange = (spec, x)=>{
    let lower, upper;
    if (spec === undefined) return true;
    try {
        // @ts-expect-error
        [, lower, upper] = spec.match(/^([[(]-?[\d.\u221E]+)?,?(-?[\d.\u221E]+[\])])?$/);
    } catch (e) {
        throw new Error(`bad range ${spec}`);
    }
    if (lower !== undefined && lower !== "") {
        const min = $fbb37d8dd62dae63$var$parseFloatOrInfinity(lower.substring(1));
        if (lower[0] === "(") {
            if (x <= min) return false;
        } else {
            if (x < min) return false;
        }
    }
    if (upper !== undefined && upper !== "") {
        const max = $fbb37d8dd62dae63$var$parseFloatOrInfinity(upper);
        if (upper.endsWith(")")) {
            if (x >= max) return false;
        } else {
            if (x > max) return false;
        }
    }
    return true;
};
const $fbb37d8dd62dae63$var$regExps = {};
const $fbb37d8dd62dae63$var$regexpTest = (spec, subject)=>{
    const regexp = $fbb37d8dd62dae63$var$regExps[spec] !== undefined ? $fbb37d8dd62dae63$var$regExps[spec] : $fbb37d8dd62dae63$var$regExps[spec] = new RegExp(spec);
    return regexp.test(subject);
};
const $fbb37d8dd62dae63$export$49034edbe6b62415 = (obj, constructor)=>{
    if (typeof constructor === "function") return obj instanceof Function;
    else {
        let proto = Object.getPrototypeOf(obj);
        while(proto.constructor !== undefined && proto.constructor !== Object){
            if (proto.constructor.name === constructor) return true;
            proto = Object.getPrototypeOf(proto);
        }
        return false;
    }
};
const $fbb37d8dd62dae63$export$afac8cfc87e341d0 = (type, subject)=>{
    // eslint-disable-next-line
    const [, optional, baseType, , spec] = type.match(/^#([?]?)([^\s]+)(\s(.*))?$/) || [];
    if (optional !== "" && (subject === null || subject === undefined)) return true;
    const subjectType = $fbb37d8dd62dae63$export$cd5450f3a47e3789(subject);
    switch(baseType){
        case "forbidden":
            return false;
        case "any":
            return subject !== null && subject !== undefined;
        case "native":
            if (typeof subject !== "function" || subject.toString() !== "function () { [native code] }") return false;
            if (type == null) return true;
            return $fbb37d8dd62dae63$export$aefee5ebe1dcfd9e(subject) ? type.match(/^async\b/) : type.match(/^function\b/);
        case "function":
            if (subjectType !== "function") return false;
            // todo allow for typeSafe functions with param/result specified by name
            return true;
        case "number":
            if (subjectType !== "number") return false;
            return $fbb37d8dd62dae63$var$inRange(spec, subject);
        case "int":
            if (subjectType !== "number" || subject !== Math.floor(subject)) return false;
            return $fbb37d8dd62dae63$var$inRange(spec, subject);
        case "union":
            return spec.split("||").find((type)=>$fbb37d8dd62dae63$export$afac8cfc87e341d0(`#${type}`, subject)) !== undefined;
        case "enum":
            try {
                return spec.split("|").map(JSON.parse).includes(subject);
            } catch (e) {
                throw new Error(`bad enum specification (${spec}), expect JSON strings`);
            }
        case "void":
            return subjectType === "undefined" || subjectType === "null";
        case "nothing":
            return subjectType === "undefined";
        case "string":
            return subjectType === "string";
        case "regexp":
            return subjectType === "string" && $fbb37d8dd62dae63$var$regexpTest(spec, subject);
        case "array":
            return Array.isArray(subject);
        case "instance":
            return $fbb37d8dd62dae63$export$49034edbe6b62415(subject, spec);
        case "promise":
            return subject instanceof Promise;
        case "object":
            return subject !== null && typeof subject === "object" && !Array.isArray(subject);
        default:
            if (subjectType !== baseType) throw (0, $7462882f3d13e4d6$export$5a4bb2b1c89bdce7)("got", subject, `expected "${type}", "${subjectType}" does not match "${baseType}"`);
            else return true;
    }
};
const $fbb37d8dd62dae63$var$functionDeclaration = /^((async\s+)?function)?\s*\((.*?)\)\s*(=>)?\s*\{/;
const $fbb37d8dd62dae63$var$arrowDeclaration = /^((\.\.\.\w+)|(\w+)|\((.*?)\))\s*=>\s*[^\s{]/;
const $fbb37d8dd62dae63$var$returnsValue = /\w+\s*=>\s*[^\s{]|\breturn\b/;
const $fbb37d8dd62dae63$export$b84ab2ad77da7adc = (x)=>{
    const scalarType = $fbb37d8dd62dae63$export$cd5450f3a47e3789(x);
    switch(scalarType){
        case "array":
            return x.map($fbb37d8dd62dae63$export$b84ab2ad77da7adc);
        case "object":
            if (x.constructor === Object) {
                const _type = {};
                Object.keys(x).forEach((key)=>{
                    _type[key] = $fbb37d8dd62dae63$export$b84ab2ad77da7adc(x[key]);
                });
                return _type;
            } else return "#instance x.constructor.name";
        case "function":
        case "async":
            {
                if (x.protoype !== undefined) return "#class x.name";
                const source = x.toString();
                if (source.endsWith("() { [native code] }")) return `#native ${scalarType}`;
                const functionSource = source.match($fbb37d8dd62dae63$var$functionDeclaration);
                const arrowSource = source.match($fbb37d8dd62dae63$var$arrowDeclaration);
                const hasReturnValue = source.match($fbb37d8dd62dae63$var$returnsValue) != null || source.match($fbb37d8dd62dae63$var$arrowDeclaration);
                // eslint-disable-next-line
                const paramText = (functionSource && functionSource[3] || // eslint-disable-next-line
                arrowSource && (arrowSource[2] || arrowSource[3] || arrowSource[4]) || "").trim();
                const params = paramText.split(",").map((param)=>{
                    const [key] = param.split("=");
                    return `${key} #any`;
                });
                return `${scalarType} ( ${params.join(", ")} ) => ${hasReturnValue != null ? "#any" : "#nothing"}`;
            }
        default:
            return `#${scalarType}`;
    }
};
const $fbb37d8dd62dae63$export$b3b9d0693605ef8b = (x)=>JSON.stringify($fbb37d8dd62dae63$export$b84ab2ad77da7adc(x));
const $fbb37d8dd62dae63$export$518decae858c583a = (x)=>$fbb37d8dd62dae63$export$b3b9d0693605ef8b(x).replace(/"(\w+)":/g, "$1:");
const $fbb37d8dd62dae63$var$quoteIfString = (x)=>typeof x === "string" ? `"${x}"` : typeof x === "object" ? $fbb37d8dd62dae63$export$cd5450f3a47e3789(x) : x;
// when checking large arrays, only check a maximum of 111 elements
function* $fbb37d8dd62dae63$var$arraySampler(a) {
    let i = 0;
    // 101 is a prime number so hopefully we'll avoid sampling fixed patterns
    const increment = Math.ceil(a.length / 101);
    while(i < a.length){
        // first five
        if (i < 5) {
            yield {
                sample: a[i],
                i: i
            };
            i++;
        // last five
        } else if (i > a.length - 5) {
            yield {
                sample: a[i],
                i: i
            };
            i++;
        } else {
            // ~1% of the ones in the middle
            yield {
                sample: a[i],
                i: i
            };
            i = Math.min(i + increment, a.length - 4);
        }
    }
}
const $fbb37d8dd62dae63$export$a71efb50630d6710 = (example, subject, errors = [], path = "")=>{
    const exampleType = $fbb37d8dd62dae63$export$cd5450f3a47e3789(example);
    const subjectType = $fbb37d8dd62dae63$export$cd5450f3a47e3789(subject);
    const typesMatch = exampleType.startsWith("#") ? $fbb37d8dd62dae63$export$afac8cfc87e341d0(exampleType, subject) : exampleType === subjectType;
    if (!typesMatch) errors.push(`${path !== "" ? path + " " : ""}was ${$fbb37d8dd62dae63$var$quoteIfString(subject)}, expected ${exampleType}`);
    else if (exampleType === "array") {
        // only checking first element of subject for now
        const sampler = subject.length > 0 ? $fbb37d8dd62dae63$var$arraySampler(subject) : false;
        if (example.length === 1 && sampler !== false) // assume homogenous array
        for (const { sample: sample , i: i  } of sampler)$fbb37d8dd62dae63$export$a71efb50630d6710(example[0], sample, errors, `${path}[${i}]`);
        else if (example.length > 1 && sampler !== false) // assume heterogeneous array
        for (const { sample: sample , i: i  } of sampler){
            let foundMatch = false;
            for (const specificExample of example)if ($fbb37d8dd62dae63$export$a71efb50630d6710(specificExample, sample, [], "").length === 0) {
                foundMatch = true;
                break;
            }
            if (!foundMatch) errors.push(`${path}[${i}] had no matching type`);
        }
    } else if (exampleType === "object") $fbb37d8dd62dae63$var$matchKeys(example, subject, errors, path);
    return errors;
};
const $fbb37d8dd62dae63$export$4ac0c519b1a9e80e = (example, path)=>{
    const parts = Array.isArray(path) ? [
        ...path
    ] : path.replace(/\[[^\]]*\]/g, ".*").split(".");
    if (example === null || example === undefined || parts.length === 0) return example;
    else {
        const part = parts.shift();
        if (part === "*") {
            if (Array.isArray(example)) return example.length === 1 ? $fbb37d8dd62dae63$export$4ac0c519b1a9e80e(example[0], parts) : $fbb37d8dd62dae63$export$4ac0c519b1a9e80e(Object.assign({}, ...example), parts);
            else return undefined;
        } else // @ts-expect-error
        return $fbb37d8dd62dae63$export$4ac0c519b1a9e80e(example[part], parts);
    }
};
const $fbb37d8dd62dae63$var$legalVarName = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
const $fbb37d8dd62dae63$var$matchKeys = (example, subject, errors = [], path = "")=>{
    const testedKeys = new Set();
    for (const key of Object.keys(example)){
        if (key.startsWith("#")) {
            let keyTest = $fbb37d8dd62dae63$var$legalVarName;
            try {
                if (key !== "#") keyTest = new RegExp(`^${key.substring(1)}$`);
            } catch (e) {
                const badKeyError = `illegal regular expression in example key '${key}'`;
                errors.push(badKeyError);
                throw (0, $7462882f3d13e4d6$export$5a4bb2b1c89bdce7)(badKeyError);
            }
            const matchingKeys = Object.keys(subject).filter((key)=>keyTest.test(key));
            for (const k of matchingKeys)if (!testedKeys.has(k)) {
                $fbb37d8dd62dae63$export$a71efb50630d6710(example[key], subject[k], errors, `${path}./^${key.substring(1)}$/:${k}`);
                testedKeys.add(k);
            }
        } else if (key.endsWith("?")) {
            const k = key.slice(0, key.length - 1);
            if (Object.hasOwnProperty.call(subject, k)) {
                if (!testedKeys.has(k)) {
                    $fbb37d8dd62dae63$export$a71efb50630d6710(example[key], subject[k], errors, path + "." + k);
                    testedKeys.add(k);
                }
            }
        } else if (!testedKeys.has(key)) {
            $fbb37d8dd62dae63$export$a71efb50630d6710(example[key], subject[key], errors, path + "." + key);
            testedKeys.add(key);
        }
    }
    return errors;
};
class $fbb37d8dd62dae63$export$f1c4b559ff572cce {
    // initializers are unnecessary but TypeScript is too stupid
    functionName = "anonymous";
    isParamFailure = false;
    errors = [];
    constructor(config){
        Object.assign(this, config);
    }
    toString() {
        const { functionName: functionName , isParamFailure: isParamFailure , errors: errors  } = this;
        return `${functionName}() failed, bad ${isParamFailure ? "parameter" : "return"}: ${JSON.stringify(errors)}`;
    }
}
const $fbb37d8dd62dae63$export$a3a0906114eec376 = (obj, propMap)=>{
    propMap = {
        ...propMap
    };
    for (const key of Object.keys(propMap)){
        const value = propMap[key];
        Object.defineProperty(obj, key, {
            enumerable: true,
            get () {
                return value;
            },
            set (value) {
                throw new Error(`${key} is read-only`);
            }
        });
    }
    return obj;
};
const $fbb37d8dd62dae63$export$416306c82e0f43c5 = (types, params)=>{
    for(let i = 0; i < params.length; i++){
        if (params[i] instanceof $fbb37d8dd62dae63$export$f1c4b559ff572cce) return params[i];
    }
    const [paramErrors, returnErrors] = types.map((type, i)=>$fbb37d8dd62dae63$export$a71efb50630d6710(type, params[i]));
    return [
        ...paramErrors,
        ...returnErrors
    ];
};
const $fbb37d8dd62dae63$export$de5257c629b5bb7d = (func, paramTypes = [], resultType, functionName = "anonymous")=>{
    const paramErrors = $fbb37d8dd62dae63$export$416306c82e0f43c5([
        "#function",
        "#?array",
        "#?any",
        "#?string"
    ], [
        func,
        paramTypes,
        resultType,
        functionName
    ]);
    if (paramErrors instanceof $fbb37d8dd62dae63$export$f1c4b559ff572cce) throw new Error("typeSafe was passed bad parameters");
    if (func.name !== "") functionName = func.name;
    let callCount = 0;
    return $fbb37d8dd62dae63$export$a3a0906114eec376(function(...params) {
        callCount += 1;
        const paramErrors = $fbb37d8dd62dae63$export$416306c82e0f43c5(paramTypes, params);
        // short circuit failures
        if (paramErrors instanceof $fbb37d8dd62dae63$export$f1c4b559ff572cce) return paramErrors;
        if (paramErrors.length === 0) {
            const result = func(...params);
            const resultErrors = $fbb37d8dd62dae63$export$a71efb50630d6710(resultType, result);
            if (resultErrors.length === 0) return result;
            else return new $fbb37d8dd62dae63$export$f1c4b559ff572cce({
                functionName: functionName,
                isParamFailure: false,
                expected: resultType,
                found: result,
                errors: resultErrors
            });
        }
        return new $fbb37d8dd62dae63$export$f1c4b559ff572cce({
            functionName: functionName,
            isParamFailure: true,
            expected: paramTypes,
            found: params,
            errors: paramErrors
        });
    }, {
        paramTypes: paramTypes,
        resultType: resultType,
        getCallCount: ()=>callCount
    });
};




export {$fbb37d8dd62dae63$export$aefee5ebe1dcfd9e as isAsync, $fbb37d8dd62dae63$export$cd5450f3a47e3789 as describe, $fbb37d8dd62dae63$export$49034edbe6b62415 as isInstanceOf, $fbb37d8dd62dae63$export$afac8cfc87e341d0 as specificTypeMatch, $fbb37d8dd62dae63$export$b84ab2ad77da7adc as describeType, $fbb37d8dd62dae63$export$b3b9d0693605ef8b as typeJSON, $fbb37d8dd62dae63$export$518decae858c583a as typeJS, $fbb37d8dd62dae63$export$a71efb50630d6710 as matchType, $fbb37d8dd62dae63$export$4ac0c519b1a9e80e as exampleAtPath, $fbb37d8dd62dae63$export$f1c4b559ff572cce as TypeError, $fbb37d8dd62dae63$export$a3a0906114eec376 as assignReadOnly, $fbb37d8dd62dae63$export$416306c82e0f43c5 as matchParamTypes, $fbb37d8dd62dae63$export$de5257c629b5bb7d as typeSafe};
//# sourceMappingURL=index.js.map
