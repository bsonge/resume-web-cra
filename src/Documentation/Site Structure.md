# Site Structure

## Overhead
- index.js 
  - Entry, leads into react
  - wraps App.js

- App.js
  - React stuff, wrapper for any structural code stuff (e.g. router & redux)
  - wraps Main.js

- Main.js
  - Outer Component Layer
  - Contains:  Header, Footer, Router
  - wraps page components


## Page Components
- Home
  - Landing page
  - Contains preview content and overview of stuff
- Resume
  - Shows off resume
  - Contains prettier version of resume (MUST BE EASY TO UPDATE)
  - Includes downloadable version