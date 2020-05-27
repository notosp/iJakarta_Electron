import css from "styled-jsx/css";

var baseColor = "#ff6d0c";

export default css.global`
{font-family: 'Roboto Light', 'Roboto Medium', 'Roboto', etc}

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
    background-color:#FFFFFF
  }

  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  /* Optional: show position indicator in red */
  ::-webkit-scrollbar-thumb {
    background: #ff0000;
  }

 [role="main"] {
    margiLeft: 700px; /* Space for fixed navbar */
  }

  a {
    color: ${baseColor};
  }

  a:hover {
    color: ${baseColor};
  }

  p {
    font-family: "Roboto";
    font-size: 14px;
    font-weight: 700;
  }

  .sidebar {
    font-size: 16px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    margin-left: -10px;
    z-index: 100; /* Behind the navbar */
    padding: 90px 10px 0; /* Height of navbar */
    background: linear-gradient(#fab647, #f47f22);
  }

  .sidebar-sticky {
    position: relative;
    top: 0;
    height: calc(100vh - 48px);
    padding-top: 0.5rem;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
  }

  @supports ((position: -webkit-sticky) or (position: sticky)) {
    .sidebar-sticky {
      position: -webkit-sticky;
      position: sticky;
    }
  }

  .sidebar .nav-link {
    font-weight: 500;
    color: #402726;
    padding-left: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .active-sidebar {
    border-left: 7px solid #fff;
  }

  .active-sidebar .nav-link {
    color: #ff6d0c;
  }
  .sidebar-heading {
    font-size: 0.75rem;
    text-transform: uppercase;
  }

  .btn-join {
    border: none;
    background: #fff;
    font-size: 16px;
    color: #ff6d0c;
    font-weight: 500;
    border-radius: 12px;
    padding: 3px 35px;
  }

  a: hover {
    color: ${baseColor};
  }

  .baseColor {
    color: ${baseColor};
  }

  .bg-color {
    background: white;
  }

  .form-control:focus {
    border-color: #fab647;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .iconSearch {
    border-radius: 150px;
    background: #fff;
    border: #fab647 9px;
  }

  
  .rwt__tablist:not([aria-orientation="vertical"])
    .rwt__tab[aria-selected="true"]:after {
    bottom: -1px;
    left: 0;
    width: 100%;
    border-bottom: 4px solid ${baseColor};
  }

  .rwt__tab[aria-selected="true"] {
    color: ${baseColor};
  }

  .topnav {
  overflow: hidden;
  background-color: #fff;
  border-bottom: 2px solid #C0C0C0;
  }

  .topnav a {
    float: left;
    display: block;
    color: #B8B8B8;
    font-weight: 200px
    text-align: center;
    margin-left: 25px;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 16px;
  }

  .topnav a:hover {
    border-bottom: 3px solid #ff6d0c;
  }

  .topnav a.active {
    border-bottom: 3px solid #ff6d0c;
    color: #ff6d0c;
    font-weight: 900px;
  }

  .panelTabs {
    padding-top: 60px;
  }

  .jumbotron {
    background-image: url("../../static/images/epustaka/banner@2x.png");
    margin-bottom: 10px;
    position:fixed;
  }

  .search {
    background: #fff;
    color: #52;
    border-radius: 18px;
    border: 1px solid #F8F8FF;
    box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.2);
  }

  .has-search .form-control {
    padding-left: 2.375rem;
  }

.has-search .form-control-feedback {
  position: absolute;
  z-index: 2;
  display: block;
  width: 2.375rem;
  height: 2.375rem;
  line-height: 2.375rem;
  text-align: center;
  pointer-events: none;
  color: ##ff6d0c;
  }

   /* Arrows */


  .slick-prev,
  .slick-next
  {

      font-size: 0;
      line-height: 0;
      position: absolute;
      top: 54%;
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
      content: url("../static/images/epustaka/prev_slide_book.png");
  }
  [dir='rtl'] .slick-prev:before
  {
    content: url("../static/images/epustaka/prev_slide_book.png");
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
    content: url("../static/images/epustaka/next_slide_book.png"); 
  }
  [dir='rtl'] .slick-next:before
  {
    content: url("../static/images/epustaka/next_slide_book.png");
  }

  .book img {
    width: 100px;
    height: 130px;
    margin-right: 25px;
    cursor: pointer;
  }

  .card-text p {
    font-family: "Roboto";
    font-size: 20px;
    font-weight: 500
  }

 .box-card{
  transition: all 1s;
  cursor: pointer
}
 
.box-card:hover {
  box-shadow: 0 5px 7px #808080;
  cursor: pointer
  margin-top: 2em;
}
`;