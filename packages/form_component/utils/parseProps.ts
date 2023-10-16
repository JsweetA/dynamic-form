/**
 * @param item : 配置项
 * @description ： 获取配置项中的props参数
 */
export default function props(item: any = {}) {
  const obj: any = {};
  for (const i in item) {
    if (i !== "type" && typeof item[i] !== "function") {
      obj[i] = item[i];
    }
  }
  return obj;
}
