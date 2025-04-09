// 转换 {{$helpers.rangeToNumber(min=1000)}} 这种格式
export function parseDynamicNumber(str) {
    if (!str) return 0;
    
    // 如果是普通数字字符串直接转换
    if (/^\d+$/.test(str)) {
      return parseInt(str);
    }
    
    // 处理 {{$helpers.rangeToNumber(min=1000)}} 这种格式
    const match = str.match(/\{\{\$helpers\.rangeToNumber\(min=(\d+)\)\}\}/);
    if (match) {
      const min = parseInt(match[1]);
      return Math.floor(Math.random() * 10000) + min; // 生成随机数
    }
    
    return 0; // 默认值
  }