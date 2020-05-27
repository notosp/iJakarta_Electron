import css from 'styled-jsx/css'

var baseColor = "#ff6d0c";

export default css.global `
  @charset 'UTF-8';
/* Slider */
.slick-loading .slick-list
{
    background: #fff url('./ajax-loader.gif') center center no-repeat;
}

/* Icons */
font-face {
    font-family: 'slick';
    font-weight: normal;
    font-style: normal;

    src: url('./fonts/slick.eot');
    src: url('./fonts/slick.eot?#iefix') format('embedded-opentype'), url('./fonts/slick.woff') format('woff'), url('./fonts/slick.ttf') format('truetype'), url('./fonts/slick.svg#slick') format('svg');
}

/* Arrows */


.slick-prev,
.slick-next
{

    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 48%;
    display: block;

    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);

    cursor: pointer;

    color: transparent;
    border: none;
    outline: none;
    background: transparent;
}

.slick-prev:hover,
.slick-prev:focus,
.slick-next:hover,
.slick-next:focus
{
    color: transparent;
    outline: none;
    background: transparent;
}
.slick-prev:hover:before,
.slick-prev:focus:before,
.slick-next:hover:before,
.slick-next:focus:before
{
    opacity: 1;
}
.slick-prev.slick-disabled:before,
.slick-next.slick-disabled:before
{
    opacity: 0;
}

.slick-prev:before,
.slick-next:before
{
    font-family: 'FontAwesome';
    font-size: 100px;
    line-height: 1;

    opacity: 1;
    color: white;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.slick-prev
{
    left: 0px;
    position: absolute;
    z-index: 2;
}
[dir='rtl'] .slick-prev
{
    right: 0px;
    left: auto;
}

.slick-prev:before
{
    content: url("../static/images/feeds/prev_slide_epustaka.png");
}
[dir='rtl'] .slick-prev:before
{
   content: url("../static/images/feeds/prev_slide_epustaka.png");
}

.slick-next
{
    right: 0px;
}
[dir='rtl'] .slick-next
{
    right: auto;
    left: 0px;
}
.slick-next:before
{
   content: url("../static/images/feeds/next_slide_epustaka.png"); 
}
[dir='rtl'] .slick-next:before
{
   content: url("../static/images/feeds/next_slide_epustaka.png");
}

`;