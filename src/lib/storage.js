const KEY = "triveni-admin-content-v1";
export function loadContent() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; }
}
export function saveContent(content) {
  localStorage.setItem(KEY, JSON.stringify(content));
}
export function mergeContent(base) {
  return {...base, ...loadContent()};
}
