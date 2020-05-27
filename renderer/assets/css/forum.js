import css from "styled-jsx/css";

var baseColor = "#ff6d0c";

export default css.global `
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
    background-color:#F5f5f5
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

  @supports ((position: -webkit-sticky) or (position: sticky)) {
    .sidebar-sticky {
      position: -webkit-sticky;
      position: sticky;
    }
  }

  .nav {
    overflow: hidden;
    background: linear - gradient(#fab647, #f47f22); /* Standard syntax */
    background: -webkit-linear-gradient(#fab647, #f47f22); /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(#fab647, #f47f22); /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(#fab647, #f47f22); /* For Firefox 3.6 to 15 */
  }

  .nav a {
    color: #fff;
    font-weight: 200px
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 16px;
  }

  .textbold {
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 700;
  }

   .comment {
    background: #F5f5f5;
    color: #52;
    border: solid 1px #F8F8FF;
    box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.2);
  }

  .avatar {
    vertical-align: middle;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border : solid 2px
}

`;