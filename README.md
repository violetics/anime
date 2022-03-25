## Violetics API Anime

> **_Anime API Wrapper for https://violetics.pw/api/anime_**

```diff
@@ Created on 25-03-22 | Violetics @@
```

## Installation

<h4>
  using npm package manager
</h4>

> _npm install @violetics/anime_

<h4>
  using yarn package manager
</h4>

> _yarn add @violetics/anime_

## Example Request

```javascript
"use strict";
const Violetics = require("@violetics/anime");
const v = new Violetics("API_KEY"); // register on https://violetics.pw/ to get your own apikey

/* then, catch */
v.komiku("naruto")
	.then((data) => {
		console.log("data", data);
	})
	.catch(console.error);

/* callback */
v.komiku("naruto", (error, data) => {
	if (error) return console.error(error);
	console.log("data", data);
});
```

## Information

```diff
+ dont forget to star <3
! contribute to this project! ~~~
- please add issue if you having problem with installation

! github: https://github.com/Violetics/anime
```
