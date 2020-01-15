export function setTokenToLS(token) {
  localStorage.setItem('TASKS_ADMIN_TOKEN', token);
}

export function getTokenFromLS() {
  return localStorage.getItem('TASKS_ADMIN_TOKEN');
}

export function getUrl(path) {
  return `https://uxcandy.com/~shapoval/test-task-backend/v2/${path}?developer=HusainEsambaevPROD`;
}

export function deleteToken() {
  localStorage.removeItem('TASKS_ADMIN_TOKEN');
}
