export const BASE_URL =
  import.meta.env.PROD
    ? "https://www.reddit.com" // Production: use absolute Reddit API URL
    : "/reddit";               // Dev: use Vite proxy