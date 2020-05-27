import css from 'styled-jsx/css'

var baseColor = "#ff6d0c";

export default css.global`
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
  html,
  body {
    height: 100%;
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

  .root {
    background: #fab647;
    background: linear-gradient(180deg, #fab647 25%, #f47f22 100%);
    height: 370px;
    padding-top: 30px;
  }

  .root-detail {
    background: #fab647;
    background: linear-gradient(180deg, #fab647 25%, #f47f22 100%);
    height: 250px;
    padding-top: 15px;
  }

  .buttonControl {
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
  }

  .slideSaldo {
    height: 150px;
  }

  .saldo {
    padding-top: 30px;
  }

  .btnTopup {
    width: 150px;
    background: ${baseColor};
    color: #fff;
    border: none;
    padding: 6px 20px 6px 20px;
    border-radius: 15px;
    font-size: 15px;
  }

  .amount {
    text-style: roboto;
    font-size: 20px;
  }

  .ant-tabs-nav .ant-tabs-tab-active {
    color: ${baseColor};
    font-weight: 500;
  }

  .ant-tabs-ink-bar {
    position: absolute;
    bottom: 1px;
    left: 0;
    z-index: 1;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 2px;
    background-color: ${baseColor};
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
  }

  .ant-tabs-nav .ant-tabs-tab:hover {
    color: ${baseColor};
  }

  .recBook img {
    width: 100px;
    height: 130px;
    cursor: pointer;
    margin-right: 20px;
  }

  .card-text {
    width: 100px;
    height: 32px;
    cursor: pointer;
    font-family: "Roboto";
    font-size: 12px;
    font-weight: 900;
  }

  .epusBook2 img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
    cursor: pointer;
  }

  div background {
    width: 100px;
    height: 130px;
    margin-right: 20px;
  }

  .recBookText {
    color: #ffff;
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
    font-weight: 700;
  }

  .ant-tabs-nav .ant-tabs-tab:hover {
    color: #ff6d0c;
  }

  .btn-close {
    border-radius: 50px;
    width: 100px;
    border: 1px ${baseColor} solid;
    padding: 7px;
    background: transparent;
    color: ${baseColor};
  }

  .btnPasswordView {
    color: ${baseColor};
    border: none;
    background: none;
  }

  .btn-pinjam {
    width: 43%;
    border: none;
    border-radius: 20px;
    height: 35px;
    background: ${baseColor};
    color: #fff;
  }
  .btn-donasi {
    width: 43%;
    border: none;
    border-radius: 20px;
    height: 35px;
    background: #8b4bc5;
    color: #fff;
  }

  .panelTabs {
    padding-top: 25px;
  }

  .user-img {
    width: 50px;
    border-radius: 50px;
    border: 2px fff solid;
    margin-right: -5px;
  }

  .modal-body {
    max-height: calc(100vh - 210px);
    overflow-y: auto;
    margin-bottom: 30px;
  }

  .swal2-styled.swal2-confirm {
    border: 0;
    border-radius: 1.05em;
    background-color: ${baseColor};
    color: #fff;
    height: 37px;
    width: 100px;
    padding-top: 6px;
  }
`;