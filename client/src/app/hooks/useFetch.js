export const useFetch = async (url, method = 'GET', data = null, csrf = null, headers = {}) => {
  let body;
  if (data) {
    body = JSON.stringify(data);
    headers['Content-Type'] = 'application/json';
    headers['X-CSRF-Token'] = csrf;
  }
  return await fetch(url, {method, body, headers});
};