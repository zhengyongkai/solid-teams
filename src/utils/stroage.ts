const storage = localStorage
const Prefix = 'teams-'

/**
 * @description: 获取缓存
 * @param {string} key 键
 * @param {boolean} parse 是否需要parse
 * @return {*}
 */
export function getStorage(key: string, parse: boolean): string {
  const value = storage.getItem(Prefix + key)
  return parse ? JSON.parse(value || '{}') : value
}

/**
 * @description: 设置缓存
 * @param {string} key 键
 * @param {string} value 值
 * @param {boolean} stringify 是否需要格式化
 * @return {*}
 */
export function setStorage(key: string, value: string, stringify: boolean): void {
  return storage.setItem(Prefix + key, stringify ? JSON.stringify(value) : value)
}
