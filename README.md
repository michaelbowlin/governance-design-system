# Governance Design System

## Pattern Library Install
> This is a basic 11ty install for housing the Pattern Library portion of the design system.

---
### 11ty install
Egghead.io provides a good starter tutorial: (LINK)[https://egghead.io/lessons/11ty-define-an-eleventy-11ty-collection-to-create-a-blog] similar to what we will be doing below :smile:

1) NPM Init

`npm init`

2) 11ty install

`npm install @11ty/eleventy`

3) Open `package.json` and replace the `scripts` code with the following 11ty commands:

```markdown
  "scripts": {
    "start": "eleventy --serve",
    "build": "eleventy"
  }
```

4) In the root of your project, create and 11ty config file named `.eleventy.js`. Add the following code:

```js
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

```markdown
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
    <h1>{{ title }}</h1>

    {{ content | safe }}
</body>
</html>
```

9) In `index.md`, add the following line to your front-matter:

`layout: "base.njk"`

10) Run `npm start` in the terminal and :boom: you should have liftoff :rocket:

Currently your project should look like this:

```markdown
.
├── node_modules
├── public
├── src
│   └── _includes
│   │   └── base.njk
│   └── index.md
├── .eleventy.js
└── package.json

```

---
### 11ty Sass Compiling

1) Install Sass and NPM run all:

`npm install sass npm-run-all`

2) Add `watch` and `build` commands to the `package.json` file:

```js
  "scripts": {
    "watch:sass": "sass --watch src/sass:public/css",
    "build:sass": "sass src/sass:public/css",
    "watch:elevety": "eleventy --serve",
    "build:elevety": "eleventy",
    "start": "npm-run-all build:sass --parallel watch:*",
    "build": "npm-run-all build:*"
  },
```

3) Create a `sass` directory in `src` parent directory and add a Sass file called `style.scss` and add the following:

```css
* {
  color: hotpink;
}
```

4) Create a Nunjucks template variable in `base.njk`:

`<link rel="stylesheet" href="{{ 'css/style.css' | url }}">`

5) CSS is not a recognized file type in Eleventy. To fix this, open `.eleventy.js` and add the following:

* Add a `watch` target:

`eleventyConfig.addWatchTarget("./src/sass/");`

* and add a pass-through config (this'll take the contents fo CSS and pass it through to the public directory)

`eleventyConfig.addPassthroughCopy("./src/css");`

6) run `npm start` in the terminal.

Currently your project should look like this:

```markdown
.
├── node_modules
├── public
├── src
│   └── _includes
│   │   └── base.njk
│   └── sass
│   │   └── style.scss
│   └── index.md
├── .eleventy.js
└── package.json

```

---
### 11ty Collections
> A way for 11ty to tie together related content

1) Under the `src` folder, create a new directory call `pages`. In the `pages` directory create a markdown file called `overview.md` and add the following:

```markdown
---
title: "Overview Page"
---

This is the Overview page...

```

2) Next, define what layout the page(s) should adhere to using a `json` file. In the `src/blog` directory, create a file called `pages.json` and add the following:

```markdown
{
  "layout": "base.njk",
  "tags": "posts"
}
```
3) Within the `src` folder, create a file called `blog.md` and add the following:

```markdown
---
title: "Sitemap"
layout: "base.njk"
---

## Sitemap Pages

<ul>
{% for post in collections.posts %}
<li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
</ul>

```

4) Next, visit the Blog page——and you will see a list of your `pages`.




---
### 11ty Navigation Plugin

`npm install -D @11ty/eleventy-navigation`

---
### 11ty Filtering




