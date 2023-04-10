function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $03fdd9b5d7fdd52d$exports = {};

$parcel$export($03fdd9b5d7fdd52d$exports, "isAsync", () => $03fdd9b5d7fdd52d$export$aefee5ebe1dcfd9e);
$parcel$export($03fdd9b5d7fdd52d$exports, "describe", () => $03fdd9b5d7fdd52d$export$cd5450f3a47e3789);
$parcel$export($03fdd9b5d7fdd52d$exports, "isInstanceOf", () => $03fdd9b5d7fdd52d$export$49034edbe6b62415);
$parcel$export($03fdd9b5d7fdd52d$exports, "specificTypeMatch", () => $03fdd9b5d7fdd52d$export$afac8cfc87e341d0);
$parcel$export($03fdd9b5d7fdd52d$exports, "describeType", () => $03fdd9b5d7fdd52d$export$b84ab2ad77da7adc);
$parcel$export($03fdd9b5d7fdd52d$exports, "typeJSON", () => $03fdd9b5d7fdd52d$export$b3b9d0693605ef8b);
$parcel$export($03fdd9b5d7fdd52d$exports, "typeJS", () => $03fdd9b5d7fdd52d$export$518decae858c583a);
$parcel$export($03fdd9b5d7fdd52d$exports, "matchType", () => $03fdd9b5d7fdd52d$export$a71efb50630d6710);
$parcel$export($03fdd9b5d7fdd52d$exports, "exampleAtPath", () => $03fdd9b5d7fdd52d$export$4ac0c519b1a9e80e);
$parcel$export($03fdd9b5d7fdd52d$exports, "TypeError", () => $03fdd9b5d7fdd52d$export$f1c4b559ff572cce);
$parcel$export($03fdd9b5d7fdd52d$exports, "assignReadOnly", () => $03fdd9b5d7fdd52d$export$a3a0906114eec376);
$parcel$export($03fdd9b5d7fdd52d$exports, "matchParamTypes", () => $03fdd9b5d7fdd52d$export$416306c82e0f43c5);
$parcel$export($03fdd9b5d7fdd52d$exports, "typeSafe", () => $03fdd9b5d7fdd52d$export$de5257c629b5bb7d);
const $fa5e80af16f2efa4$var$stringify = (x)=>{
    try {
        return JSON.stringify(x);
    } catch (_) {
        return "{has circular references}";
    }
};
const $fa5e80af16f2efa4$export$5a4bb2b1c89bdce7 = (...messages)=>new Error(messages.map($fa5e80af16f2efa4$var$stringify).join(" "));


const $03fdd9b5d7fdd52d$var$asyncFunc = async ()=>{};
const $03fdd9b5d7fdd52d$export$aefee5ebe1dcfd9e = (func)=>func.constructor === $03fdd9b5d7fdd52d$var$asyncFunc.constructor;
const $03fdd9b5d7fdd52d$export$cd5450f3a47e3789 = (x)=>{
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
const $03fdd9b5d7fdd52d$var$parseFloatOrInfinity = (x)=>{
    if (x === "-∞") return -Infinity;
    else if (x[0] === "∞") return Infinity;
    else return parseFloat(x);
};
const $03fdd9b5d7fdd52d$var$inRange = (spec, x)=>{
    let lower, upper;
    if (spec === undefined) return true;
    try {
        // @ts-expect-error
        [, lower, upper] = spec.match(/^([[(]-?[\d.\u221E]+)?,?(-?[\d.\u221E]+[\])])?$/);
    } catch (e) {
        throw new Error(`bad range ${spec}`);
    }
    if (lower !== undefined && lower !== "") {
        const min = $03fdd9b5d7fdd52d$var$parseFloatOrInfinity(lower.substring(1));
        if (lower[0] === "(") {
            if (x <= min) return false;
        } else {
            if (x < min) return false;
        }
    }
    if (upper !== undefined && upper !== "") {
        const max = $03fdd9b5d7fdd52d$var$parseFloatOrInfinity(upper);
        if (upper.endsWith(")")) {
            if (x >= max) return false;
        } else {
            if (x > max) return false;
        }
    }
    return true;
};
const $03fdd9b5d7fdd52d$var$regExps = {};
const $03fdd9b5d7fdd52d$var$regexpTest = (spec, subject)=>{
    const regexp = $03fdd9b5d7fdd52d$var$regExps[spec] !== undefined ? $03fdd9b5d7fdd52d$var$regExps[spec] : $03fdd9b5d7fdd52d$var$regExps[spec] = new RegExp(spec);
    return regexp.test(subject);
};
const $03fdd9b5d7fdd52d$export$49034edbe6b62415 = (obj, constructor)=>{
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
const $03fdd9b5d7fdd52d$export$afac8cfc87e341d0 = (type, subject)=>{
    // eslint-disable-next-line
    const [, optional, baseType, , spec] = type.match(/^#([?]?)([^\s]+)(\s(.*))?$/) || [];
    if (optional !== "" && (subject === null || subject === undefined)) return true;
    const subjectType = $03fdd9b5d7fdd52d$export$cd5450f3a47e3789(subject);
    switch(baseType){
        case "forbidden":
            return false;
        case "any":
            return subject !== null && subject !== undefined;
        case "native":
            if (typeof subject !== "function" || subject.toString() !== "function () { [native code] }") return false;
            if (type == null) return true;
            return $03fdd9b5d7fdd52d$export$aefee5ebe1dcfd9e(subject) ? type.match(/^async\b/) : type.match(/^function\b/);
        case "function":
            if (subjectType !== "function") return false;
            // todo allow for typeSafe functions with param/result specified by name
            return true;
        case "number":
            if (subjectType !== "number") return false;
            return $03fdd9b5d7fdd52d$var$inRange(spec, subject);
        case "int":
            if (subjectType !== "number" || subject !== Math.floor(subject)) return false;
            return $03fdd9b5d7fdd52d$var$inRange(spec, subject);
        case "union":
            return spec.split("||").find((type)=>$03fdd9b5d7fdd52d$export$afac8cfc87e341d0(`#${type}`, subject)) !== undefined;
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
            return subjectType === "string" && $03fdd9b5d7fdd52d$var$regexpTest(spec, subject);
        case "array":
            return Array.isArray(subject);
        case "instance":
            return $03fdd9b5d7fdd52d$export$49034edbe6b62415(subject, spec);
        case "promise":
            return subject instanceof Promise;
        case "object":
            return subject !== null && typeof subject === "object" && !Array.isArray(subject);
        default:
            if (subjectType !== baseType) throw (0, $fa5e80af16f2efa4$export$5a4bb2b1c89bdce7)("got", subject, `expected "${type}", "${subjectType}" does not match "${baseType}"`);
            else return true;
    }
};
const $03fdd9b5d7fdd52d$var$functionDeclaration = /^((async\s+)?function)?\s*\((.*?)\)\s*(=>)?\s*\{/;
const $03fdd9b5d7fdd52d$var$arrowDeclaration = /^((\.\.\.\w+)|(\w+)|\((.*?)\))\s*=>\s*[^\s{]/;
const $03fdd9b5d7fdd52d$var$returnsValue = /\w+\s*=>\s*[^\s{]|\breturn\b/;
const $03fdd9b5d7fdd52d$export$b84ab2ad77da7adc = (x)=>{
    const scalarType = $03fdd9b5d7fdd52d$export$cd5450f3a47e3789(x);
    switch(scalarType){
        case "array":
            return x.map($03fdd9b5d7fdd52d$export$b84ab2ad77da7adc);
        case "object":
            if (x.constructor === Object) {
                const _type = {};
                Object.keys(x).forEach((key)=>{
                    _type[key] = $03fdd9b5d7fdd52d$export$b84ab2ad77da7adc(x[key]);
                });
                return _type;
            } else return "#instance x.constructor.name";
        case "function":
        case "async":
            {
                if (x.protoype !== undefined) return "#class x.name";
                const source = x.toString();
                if (source.endsWith("() { [native code] }")) return `#native ${scalarType}`;
                const functionSource = source.match($03fdd9b5d7fdd52d$var$functionDeclaration);
                const arrowSource = source.match($03fdd9b5d7fdd52d$var$arrowDeclaration);
                const hasReturnValue = source.match($03fdd9b5d7fdd52d$var$returnsValue) != null || source.match($03fdd9b5d7fdd52d$var$arrowDeclaration);
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
const $03fdd9b5d7fdd52d$export$b3b9d0693605ef8b = (x)=>JSON.stringify($03fdd9b5d7fdd52d$export$b84ab2ad77da7adc(x));
const $03fdd9b5d7fdd52d$export$518decae858c583a = (x)=>$03fdd9b5d7fdd52d$export$b3b9d0693605ef8b(x).replace(/"(\w+)":/g, "$1:");
const $03fdd9b5d7fdd52d$var$quoteIfString = (x)=>typeof x === "string" ? `"${x}"` : typeof x === "object" ? $03fdd9b5d7fdd52d$export$cd5450f3a47e3789(x) : x;
// when checking large arrays, only check a maximum of 111 elements
function* $03fdd9b5d7fdd52d$var$arraySampler(a) {
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
const $03fdd9b5d7fdd52d$export$a71efb50630d6710 = (example, subject, errors = [], path = "")=>{
    const exampleType = $03fdd9b5d7fdd52d$export$cd5450f3a47e3789(example);
    const subjectType = $03fdd9b5d7fdd52d$export$cd5450f3a47e3789(subject);
    const typesMatch = exampleType.startsWith("#") ? $03fdd9b5d7fdd52d$export$afac8cfc87e341d0(exampleType, subject) : exampleType === subjectType;
    if (!typesMatch) errors.push(`${path !== "" ? path + " " : ""}was ${$03fdd9b5d7fdd52d$var$quoteIfString(subject)}, expected ${exampleType}`);
    else if (exampleType === "array") {
        // only checking first element of subject for now
        const sampler = subject.length > 0 ? $03fdd9b5d7fdd52d$var$arraySampler(subject) : false;
        if (example.length === 1 && sampler !== false) // assume homogenous array
        for (const { sample: sample , i: i  } of sampler)$03fdd9b5d7fdd52d$export$a71efb50630d6710(example[0], sample, errors, `${path}[${i}]`);
        else if (example.length > 1 && sampler !== false) // assume heterogeneous array
        for (const { sample: sample , i: i  } of sampler){
            let foundMatch = false;
            for (const specificExample of example)if ($03fdd9b5d7fdd52d$export$a71efb50630d6710(specificExample, sample, [], "").length === 0) {
                foundMatch = true;
                break;
            }
            if (!foundMatch) errors.push(`${path}[${i}] had no matching type`);
        }
    } else if (exampleType === "object") $03fdd9b5d7fdd52d$var$matchKeys(example, subject, errors, path);
    return errors;
};
const $03fdd9b5d7fdd52d$export$4ac0c519b1a9e80e = (example, path)=>{
    const parts = Array.isArray(path) ? [
        ...path
    ] : path.replace(/\[[^\]]*\]/g, ".*").split(".");
    if (example === null || example === undefined || parts.length === 0) return example;
    else {
        const part = parts.shift();
        if (part === "*") {
            if (Array.isArray(example)) return example.length === 1 ? $03fdd9b5d7fdd52d$export$4ac0c519b1a9e80e(example[0], parts) : $03fdd9b5d7fdd52d$export$4ac0c519b1a9e80e(Object.assign({}, ...example), parts);
            else return undefined;
        } else // @ts-expect-error
        return $03fdd9b5d7fdd52d$export$4ac0c519b1a9e80e(example[part], parts);
    }
};
const $03fdd9b5d7fdd52d$var$legalVarName = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
const $03fdd9b5d7fdd52d$var$matchKeys = (example, subject, errors = [], path = "")=>{
    const testedKeys = new Set();
    for (const key of Object.keys(example)){
        if (key.startsWith("#")) {
            let keyTest = $03fdd9b5d7fdd52d$var$legalVarName;
            try {
                if (key !== "#") keyTest = new RegExp(`^${key.substring(1)}$`);
            } catch (e) {
                const badKeyError = `illegal regular expression in example key '${key}'`;
                errors.push(badKeyError);
                throw (0, $fa5e80af16f2efa4$export$5a4bb2b1c89bdce7)(badKeyError);
            }
            const matchingKeys = Object.keys(subject).filter((key)=>keyTest.test(key));
            for (const k of matchingKeys)if (!testedKeys.has(k)) {
                $03fdd9b5d7fdd52d$export$a71efb50630d6710(example[key], subject[k], errors, `${path}./^${key.substring(1)}$/:${k}`);
                testedKeys.add(k);
            }
        } else if (key.endsWith("?")) {
            const k = key.slice(0, key.length - 1);
            if (Object.hasOwnProperty.call(subject, k)) {
                if (!testedKeys.has(k)) {
                    $03fdd9b5d7fdd52d$export$a71efb50630d6710(example[key], subject[k], errors, path + "." + k);
                    testedKeys.add(k);
                }
            }
        } else if (!testedKeys.has(key)) {
            $03fdd9b5d7fdd52d$export$a71efb50630d6710(example[key], subject[key], errors, path + "." + key);
            testedKeys.add(key);
        }
    }
    return errors;
};
class $03fdd9b5d7fdd52d$export$f1c4b559ff572cce {
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
const $03fdd9b5d7fdd52d$export$a3a0906114eec376 = (obj, propMap)=>{
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
const $03fdd9b5d7fdd52d$export$416306c82e0f43c5 = (types, params)=>{
    for(let i = 0; i < params.length; i++){
        if (params[i] instanceof $03fdd9b5d7fdd52d$export$f1c4b559ff572cce) return params[i];
    }
    const [paramErrors, returnErrors] = types.map((type, i)=>$03fdd9b5d7fdd52d$export$a71efb50630d6710(type, params[i]));
    return [
        ...paramErrors,
        ...returnErrors
    ];
};
const $03fdd9b5d7fdd52d$export$de5257c629b5bb7d = (func, paramTypes = [], resultType, functionName = "anonymous")=>{
    const paramErrors = $03fdd9b5d7fdd52d$export$416306c82e0f43c5([
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
    if (paramErrors instanceof $03fdd9b5d7fdd52d$export$f1c4b559ff572cce) throw new Error("typeSafe was passed bad parameters");
    if (func.name !== "") functionName = func.name;
    let callCount = 0;
    return $03fdd9b5d7fdd52d$export$a3a0906114eec376(function(...params) {
        callCount += 1;
        const paramErrors = $03fdd9b5d7fdd52d$export$416306c82e0f43c5(paramTypes, params);
        // short circuit failures
        if (paramErrors instanceof $03fdd9b5d7fdd52d$export$f1c4b559ff572cce) return paramErrors;
        if (paramErrors.length === 0) {
            const result = func(...params);
            const resultErrors = $03fdd9b5d7fdd52d$export$a71efb50630d6710(resultType, result);
            if (resultErrors.length === 0) return result;
            else return new $03fdd9b5d7fdd52d$export$f1c4b559ff572cce({
                functionName: functionName,
                isParamFailure: false,
                expected: resultType,
                found: result,
                errors: resultErrors
            });
        }
        return new $03fdd9b5d7fdd52d$export$f1c4b559ff572cce({
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


$parcel$exportWildcard(module.exports, $03fdd9b5d7fdd52d$exports);


//# sourceMappingURL=main.js.map
