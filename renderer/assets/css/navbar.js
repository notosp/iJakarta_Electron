import css from 'styled-jsx/css'

var baseColor = "#ff6d0c";

export default css.global`
  .baseColor {
    color: ${baseColor};
  }

  .bg-color {
    background: #fab647;
    padding-left: 50px;
    padding-right: 50px;
  }

  .form-control:focus {
    border-color: #fab647;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .inputSearch {
    border-radius: 150px;
    height: 33px;
  }

  .iconSearch {
    border-radius: 150px;
    background: #fff;
    border: #fff 1px;
  }

  .navbar-light .navbar-nav .active > .nav-link,
  .navbar-light .navbar-nav .nav-link.active,
  .navbar-light .navbar-nav .nav-link.show,
  .navbar-light .navbar-nav .show > .nav-link {
    color: #fff;
    font-weight: 500;
  }

  .navbar-light .navbar-nav .nav-link {
    color: #52310b;
    font-size: 17px;
    padding-top: 10px;
  }

  .nav-item {
    cursor: pointer;
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
g
  .panelTabs {
    padding-top: 60px;
  }
`;