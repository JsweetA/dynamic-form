export function getType(a: any) {
  const type = typeof a;
  if (type !== "object") return type;

  return Object.prototype.toString.call(a).split(" ")[1].replace("]", "").toLocaleLowerCase();
}
export function isObject(obj: any) {
  return getType(obj) === "object";
}

export default function cloneDeep(target: any, hash = new WeakMap()) {
  // 普通类型直接返回
  if (!isObject(target)) return target;
  if (hash.get(target)) return hash.get(target);
  // 如果是数组就给数组，反之就给对象
  const newObj = Array.isArray(target) ? [] : ({} as any);
  hash.set(target, newObj);
  for (const key in target) {
    if (isObject(target[key])) {
      newObj[key] = cloneDeep(target[key], hash);
    } else {
      newObj[key] = target[key];
    }
  }
  return newObj;
}
