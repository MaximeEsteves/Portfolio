// lineTracker.js
let hasRenderedFirstLine = false;

export function isFirstLine() {
  if (!hasRenderedFirstLine) {
    hasRenderedFirstLine = true;
    return true;
  }
  return false;
}

export function resetLineTracker() {
  hasRenderedFirstLine = false;
}
