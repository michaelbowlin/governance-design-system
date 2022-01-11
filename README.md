# Governance Design System

## Pattern Library Install
> This is a basic 11ty install for housing the Pattern Library portion of the design system.

### 11ty install

1) NPM Init

`npm init`

2) 11ty install

`npm install @11ty/eleventy`

3) Open `package.json` and replace the `scripts` code with the following 11ty commands:

```html
  "scripts": {
    "start": "eleventy --serve",
    "build": "eleventy"
  }
```

4) In the root of your project, create and 11ty config file named `.eleventy.js`. Add the following code:

```html
module.exports = function (eleventyConfig) {
    return {
        dir: {
            input: 'src',
            output: 'public'
        }
    };
};
```

5) Add a new directory called `src`, and add a new Markdown file called `index.md`.

6) Within the new `index.md` file create the following front-matter and content:

```html
---
title: "Hello World"
---

This is my home page
```

7) Within the `src` directory create a child directory called `_includes`. This is where we'll create 11ty layouts.

8) In the new `_includes` directory, create a Nunjucks file called `base.njk` and add the following:
 
```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ title }}</title>
</head>
<body>
    <h1>Title</h1>

    {{ content | safe }}
</body>
</html>
```

9) In `index.md`, add the following line to your front-matter:

`layout: "base.njk"`

10) Run `npm start` in the terminal and :boom: you should have liftoff :rocket:

