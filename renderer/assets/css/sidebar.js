import css from "styled-jsx/css";

var baseColor = "#ff6d0c";

export default css.global`
  /*
 * Sidebar
 */

  .sidebar {
    font-size: 16px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    margin-left: -10px;
    z-index: 100; /* Behind the navbar */
    padding: 90px 10px 0; /* Height of navbar */
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
    background: linear-gradient(180deg, #fab647 40%, #f47f22 80%);
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
    color: white;
  }
  .sidebar-heading {
    font-size: 0.75rem;
    text-transform: uppercase;
  }
`;