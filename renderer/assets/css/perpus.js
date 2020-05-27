import css from 'styled-jsx/css'

var baseColor = "#ff6d0c";

export default css.global`
  @charset 'UTF-8';
  /* Slider */
  .slick-loading .slick-list {
    background: #fff url("./ajax-loader.gif") center center no-repeat;
  }

  /* Icons */
  font-face {
    font-family: "slick";
    font-weight: normal;
    font-style: normal;

    src: url("./fonts/slick.eot");
    src: url("./fonts/slick.eot?#iefix") format("embedded-opentype"),
      url("./fonts/slick.woff") format("woff"),
      url("./fonts/slick.ttf") format("truetype"),
      url("./fonts/slick.svg#slick") format("svg");
  }

  /* Arrows */

  .slick-prev,
  .slick-next {
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 45%;
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
  .slick-next:focus {
    color: transparent;
    outline: none;
    background: transparent;
  }
  .slick-prev:hover:before,
  .slick-prev:focus:before,
  .slick-next:hover:before,
  .slick-next:focus:before {
    opacity: 1;
  }
  .slick-prev.slick-disabled:before,
  .slick-next.slick-disabled:before {
    opacity: 0;
  }

  .slick-prev:before,
  .slick-next:before {
    font-family: "FontAwesome";
    font-size: 100px;
    line-height: 1;

    opacity: 1;
    color: white;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .slick-prev {
    left: 0px;
    position: absolute;
    z-index: 2;
  }
  [dir="rtl"] .slick-prev {
    right: 0px;
    left: auto;
  }

  .slick-prev:before {
    content: url("../static/images/feeds/prev_slide_book.png");
  }
  [dir="rtl"] .slick-prev:before {
    content: url("../static/images/feeds/prev_slide_book.png");
  }

  .slick-next {
    right: 0px;
  }
  [dir="rtl"] .slick-next {
    right: auto;
    left: 0px;
}

.slick-next:before
{
   content: url("../static/images/feeds/next_slide_book.png"); 
}
[dir='rtl'] .slick-next:before
{
   content: url("../static/images/feeds/next_slide_book.png");
}

/* Icons */
font-face {
    font-family: 'slick';
    font-weight: normal;
    font-style: normal;

    src: url('./fonts/slick.eot');
    src: url('./fonts/slick.eot?#iefix') format('embedded-opentype'), url('./fonts/slick.woff') format('woff'), url('./fonts/slick.ttf') format('truetype'), url('./fonts/slick.svg#slick') format('svg');
}


body {
    height: 100%;
    font-size: 0.875rem;
    overflow: scroll;
    overflow-x: hidden;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
  }

  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  /* Optional: show position indicator in red */
  ::-webkit-scrollbar-thumb {
    background: #ff0000;
  }

  .baseColor {
    color: ${baseColor};
  }

  .show1 {
    background: linear-gradient(
      143deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(0, 212, 255, 1) 100%
    );
    border-radius: 10px;
    margin-right: 15px;
    margin-top: 15px;
  }

  .img-show1 {
    width: 100px;
    padding: 20px 0 15px 15px;
  }

  .btn-antri {
    border: none;
    background: #fff;
    color: #000;
    overflow: hidden;
    border-radius: 20px;
    padding: 4px 25px 4px 25px;
  }

  .btn-donasi {
    border: #fff solid 2px;
    color: #fff;
    background: none;
    border-radius: 20px;
    padding: 4px 20px 4px 20px;
    margin-left: 15px;
  }

  .btn-reset {
    border: #C0C0C0 solid 1px;
    color: #808080;
    background: none;
    border-radius: 20px;
    padding: 4px 30px 4px 30px;
    margin-left: -30px;
    font-size: 16px;
    font-family: "Roboto";
  }

  .btn-terapkan {
    border: ${baseColor} solid 2px;
    color: #fff;
    background: ${baseColor};
    border-radius: 20px;
    font-size:16px;
    font-family: "Roboto";
    padding: 4px 30px 4px 30px;
  }

  .root {
    background: #fab647;
  }

  /*
 * Content
 */

  [role="main"] {
    padding-top: 10px; /* Space for fixed navbar */
  }

  .recBook img {
    width: 100px;
    height: 130px;
    margin-right: 25px;
  }

  .epusBook img {
    width: 100px;
    height: 100px;
    margin-right: 25px;
    cursor: pointer;
  }

  .recBook2 img {
    width: 100px;
    margin-right: 20px;
  }

  div background {
    width: 100px;
    height: 130px;
    margin-right: 20px;
  }

  .recBookText {
    color: #000;
  }

  .recBookText1,
  a {
    color: ${baseColor};
  }

  a {
    color: ${baseColor};
  }

  a:hover {
    color: ${baseColor};
  }

  p {
    font-family: "Roboto";
    font-size: 18px;
    font-weight: 700;
  }

  .titleBook {
    font-family: "Roboto";
    font-size: 12px;
  }

  .panelTabs {
    padding-top: 60px;
  }

  .inputSearch {
    border-radius: 150px;
    border-left: none;
  }

  .iconSearch {
    border-radius: 150px;
    background: #fff;
    border-right: none;
  }

  .form-control:focus {
    border-color: #fab647;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .select {
    border-radius: 50px;
    border: 1px solid ${baseColor};
    padding-left: 15px;
    width: 90%;
  }

  select {
    background-image: url("../../static/images/collection/ic_expand_sorting.svg") !important;
    background-position: calc(100% - 10px) 3px, calc(100% - 10px) 4px, 100% 0;
    background-size: 30px;
    background-repeat: no-repeat;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  .btn-filter {
    background-image: url("../../static/images/collection/ic_expand_sorting.svg") !important;
    background-position: calc(100% - 10px) 3px, calc(100% - 10px) 4px, 100% 0;
    background-size: 30px;
    background-repeat: no-repeat;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  .list-group-item {
    border: none;
  }

  .nav-detail {
    position: fixed;
    background: #fff;
    width: 86%;
    border: none;
    z-index: 10;
    padding: 20px 40px 20px 40px;
    margin-top: -10px;
    box-shadow: 0px 15px 10px -18px #111;
    margin-left: -39px;
  }

  .mt-7 {
    margin-top: 80px;
  }

  @media (min-width: 576px) {
    .card-columns {
      column-count: 2;
    }
  }
  @media (min-width: 768px) {
    .card-columns {
      column-count: 4;
    }
  }
  @media (min-width: 992px) {
    .card-columns {
      column-count: 5;
    }
  }
  @media (min-width: 1200px) {
    .card-columns {
      column-count: 6;
    }
  }

  .card-img-top {
    box-shadow: 0px 0px 4px 1px rgba(59, 59, 59, 0.71);
    -webkit-box-shadow: 0px 0px 4px 1px rgba(59, 59, 59, 0.71);
    -moz-box-shadow: 0px 0px 4px 1px rgba(59, 59, 59, 0.71);
  }

  .card-title {
    font-size: 15px;
    margin-top: 10px;
  }

  .card-text {
    margin-top: 5px;
    margin-right: 50px;
  }

  a {
    color: #696969;
  }

  a:hover {
    color: ${baseColor};
  }

`;