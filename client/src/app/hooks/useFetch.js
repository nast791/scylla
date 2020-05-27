export const useFetch = async (url, method = 'GET', data = null, headers = {}) => {
  let body;
  if (data) {
    body = JSON.stringify(data);
    headers['Content-Type'] = 'application/json';
  }
  return await fetch(url, {method, body, headers});
};