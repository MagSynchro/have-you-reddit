export function formatNumber(num) {
  if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1) + "B"; // billions
  } else if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + "M"; // millions
  } else if (num  >= 1000) {
        return (num / 1000).toFixed(1) + "K"; // 8300 -> 8.3K
  } else {
    return num;
  }
}

export function removeAmp(string) {
    if (!string) return "";
    return string.replace(/&amp;/g, "&")
}