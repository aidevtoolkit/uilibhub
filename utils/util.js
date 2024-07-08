import queryString from 'query-string';

export function addUtmParams(url) {
  if (!url) {
    return ''
  }

  const parsedUrl = queryString.parseUrl(url);

  // 要添加的参数
  const newParams = {
    utm_source: 'uilibhub.com'
  };

  // 合并原有的参数和新的参数
  const updatedQuery = {
    ...parsedUrl.query,
    ...newParams
  };

  return `${ parsedUrl.url }?${ queryString.stringify(updatedQuery) }`;
}
