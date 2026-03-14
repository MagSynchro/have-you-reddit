# Have You Reddit?

A lightweight Reddit browsing client built with React and Redux.
The application allows users to browse popular posts, explore individual subreddits, search Reddit content, and view nested comment threads.

This project focuses on modern frontend architecture using Redux Toolkit, client-side routing, and responsive design.

## Live Application

Deployed on Netlify:
https://your-netlify-url-here.netlify.app

---

# Technologies Used

* React
* Redux Toolkit
* React Router
* Vite
* Jest
* React Testing Library
* Netlify (Deployment)

---

# Features

* Browse posts from the **Popular** feed
* Navigate to **specific subreddits**
* **Search** Reddit posts
* View **individual post pages**
* Display **images and videos inline**
* Fully **nested comment threads**
* **Pagination** for large result sets
* **Subreddit history dropdown**
* Responsive design supporting **mobile and desktop**
* Smooth **page transitions and UI animations**

---

# Wireframes / Initial Design

Retro ASCII Mockups used during initial project planning.

## Home Page

```
Home>r/subreddit/> Post >            <= (Breadcrumbs)
 ------------------------------
|      HAVE YOU REDDIT?       |
|-----------------------------|
|[Popular▼] [ Search ______ ] |
|-----------------------------|
| Result One for Popular      |
| Result Two for Popular      |
| Result Three for Popular    |
| Result Four for Popular     |
| Result Five for Popular     |
-------------------------------
|            Next>            |
 ------------------------------
```

## Subreddit View

```
-------------------------------------------------
|               HAVE YOU REDDIT?                |
|-----------------------------------------------|
|[Popular▼] [ Search ______ ]                   |
|-----------------------------------------------|
|Home>r/gaming/>                                |
|-----------------------------------------------|
|  Post 1                                       |
|  Post 2                                       |
|  Post 3                                       |
|  Post 4                                       |
-------------------------------------------------
|                    Next>                      |
-------------------------------------------------
```

## Post View

```
Home>r/SubReddit>Post Title>
-------------------------------------------------
|               HAVE YOU REDDIT?                |
|-----------------------------------------------|
|[Popular▼] [ Search ______ ]                   |
|-----------------------------------------------|
|Home>r/gaming/>post title                      |
|-----------------------------------------------|
|  Image / Video / Content                      |
|                                               |
-------------------------------------------------
| Comment                                       |
|-----------------------------------------------|
| SubComment                                    |
| SubComment                                    |
-------------------------------------------------
| Comment                                       |
-------------------------------------------------
```

---

# Future Improvements

* Infinite scrolling for posts
* Improved media handling for Reddit video formats
* Comment collapsing and expanding
* Subreddit autocomplete search
* Dark / Light theme toggle
* Performance optimizations and caching

---

# Testing

Unit tests were written using **Jest** and **React Testing Library** to validate core components and application behavior.

---

# Author

Phillip Abernathy
