const TOKEN_KEY = 'TASKS_ADMIN_TOKEN';
const EDITS_KEY = 'TASKS_EDITS_KEY';

export function setTokenToLS(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function getTokenFromLS() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getUrl(path) {
  return `https://uxcandy.com/~shapoval/test-task-backend/v2/${path}?developer=HusainEsambaevPROD`;
}

export function deleteToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export function getEditedTaskIds() {
  return JSON.parse(localStorage.getItem(EDITS_KEY)) || [];
}

export function addEditedTaskId(id) {
  const currentIds = getEditedTaskIds();
  if (!currentIds.includes(+id)) {
    const newIds = [...currentIds, +id];
    localStorage.setItem(EDITS_KEY, JSON.stringify(newIds));
  }
}
