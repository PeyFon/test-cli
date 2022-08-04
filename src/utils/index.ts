/**
 * 获取（级联）选择器指定id节点标签名
 * @param {string} id 要寻找的唯一值
 * @param {object} data 列表总数据
 * @param {string} lab  选项标签
 * @param {string} val 选项值
 * @param {string} list 子项字段
 * @return {string} key所在节点标签(中文名)
 */
export const echoCascaderData = function (
  id: unknown,
  data: unknown[],
  lab = "label",
  val = "value",
  list = "children"
) {
  let value = "";
  function setData(data: unknown[]) {
    if (data.length > 0) {
      for (const item of data) {
        if (item[val] == id) {
          value = item[lab];
          return value;
        } else if (Array.isArray(item[list])) {
          setData(item[list]);
        }
      }
    } else {
      return value;
    }
  }
  setData(data);
  return value;
};
/**
 * 获取str出现的次数
 * @param {string} target  要寻找的唯一值
 * @param {string} str  字符串
 * @return {number} str出现的次数
 */
export const searchStrOccurrence = function (
  target: string,
  str: string
): number {
  let sum = 0;
  for (const key of str) {
    if (key == target) {
      sum++;
    }
  }
  return sum;
};

//常用的VueUse
//useDateFormat
//useLocalStorage
//useSessionStorage
