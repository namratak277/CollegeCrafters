html {
  background-color: #8EBCAF;
}

/* Reset some default styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.left-section,
.middle,
.right-section {
  flex: 1;
  margin: 5%
}

a {
  color: #1d5253;
  text-decoration: none;
  display: block;
  text-align: center;
  /* Center the links */
}

a:hover {
  text-decoration: underline;
}

.top-right {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.search-container {
  display: flex; /* Add display flex */
  align-items: center; /* Align items center */
}

.search-container label {
  color: #1d5253;
  text-decoration: none;
  display: block;
  text-align: center;
}

/* Style for the input field */
#search-input {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}




.title-word {
  animation: color-animation 4s linear infinite;
}

.title-word-1 {
  --color-1: #5E9283;
  --color-2: #146394;
  --color-3: #2c5945;
}

.title-word-2 {
  --color-1: #0c2245;
  --color-2: #5E9283;
  --color-3: #17494D;
}

.title-word-3 {
  --color-1: #2d4965;
  --color-2: #0c2245;
  --color-3: #5E9283;
}

.title-word-4 {
  --color-1: #3D8DAE;
  --color-2: #2d4965;
  --color-3: #146394;
}

@keyframes color-animation {
  0%    {color: var(--color-1)}
  32%   {color: var(--color-1)}
  33%   {color: var(--color-2)}
  65%   {color: var(--color-2)}
  66%   {color: var(--color-3)}
  99%   {color: var(--color-3)}
  100%  {color: var(--color-1)}
}

/* Here are just some visual styles. 🖌 */

.container {
  display: grid;
  place-items: center;  
  text-align: center
}

.title {
  font-family: "Montserrat", sans-serif;
  font-weight: 80;
  font-size: 8.5vw;
  text-transform: uppercase;
}

.posts-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 15px;
  /* Add some space between each set of posts */
}

.post,
.post2 {
  width: calc(33.33% - 20px);
  /* Adjust width to fit three posts in a row */
  margin-bottom: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  box-sizing: border-box;
}

/* Image styles */
.post img,
.post2 img, .mySlides img{
  width: 100%;
  height: auto;
}

/* Caption styles */
.caption {
  padding: 10px;
}

/* Rating styles */
.rating {
  padding: 10px;
  background-color: #f2f2f2;
  border-top: 1px solid #ddd;
  font-size: 14px;
}

/* Slideshow styles */
.slideshow-container {
  position: relative;
  width: 200px; /* Adjust width as needed */
  height: 300px; /* Adjust height as needed */
  margin: auto;
}

.mySlides {
  display: none;
  width: 100%;
  height: auto;
}

.dot-container {
  text-align: center;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
}

.dot {
  cursor: pointer;
  height: 10px;
  width: 10px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

.space{
  margin-top: 30px;
}
