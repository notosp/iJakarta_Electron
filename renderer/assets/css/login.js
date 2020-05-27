import css from 'styled-jsx/css'

var baseColor = "#ff6d0c";

export default css.global`
  html,
  body {
    height: 100%;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
  }
  body {
    background: #fff;
  }

  main {
    margin-top: 9%;
    margin-bottom: 3%;
  }

  @media (max-width: 768px) {
    main {
      margin-top: 18%;
      margin-bottom: 20%;
    }
  }

  .img-logo {
    width: 300px;
  }

  .p1 {
    color: ${baseColor};
    margin-top: 20px;
  }

  .l1 {
    color: ${baseColor};
    cursor: pointer;
    background: none;
    border: none;
  }

  .l1:hover {
    color: ${baseColor};
  }

  .btn1 {
    width: 300px;
    background: #fff;
    color: ${baseColor};
    border: 2px solid #fff;
    padding: 10px 40px 10px 40px;
    border-radius: 30px;
    font-size: 18px;
  }

  .btn2 {
    width: 130px;
    background: #fff;
    color: ${baseColor};
    border: 2px solid ${baseColor};
    padding: 5px 20px 5px 20px;
    border-radius: 20px;
    font-size: 15px;
    margin-left: auto;
  }

  .btn3 {
    width: 200px;
    background: ${baseColor};
    color: #fff;
    border: 2px solid ${baseColor};
    padding: 5px 20px 5px 20px;
    border-radius: 20px;
    font-size: 15px;
    margin-left: auto;
  }

  .btn3:disabled,
  button[disabled] {
    background: #fab07f;
    border: 2px solid #fab07f;
  }

  .btnSandiUlang {
    width: 200px;
    background: ${baseColor};
    color: #fff;
    border: 2px solid ${baseColor};
    padding: 5px 20px 5px 20px;
    border-radius: 20px;
    font-size: 15px;
    text-align: center;
    margin-top: 40px;
  }

  .btnPasswordView {
    color: ${baseColor};
    border: none;
    background: none;
  }

  .btnForgot {
    margin-left: auto;
    margin-top: 10px;
    border: none;
    color: 424242;
    background: none;
  }

  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    color: white;
    text-align: center;
    cursor: pointer;
  }

  .inputEmail {
    border: none;
    border-bottom: 1px solid;
    width: 200px;
    padding-left: 50px;
    padding-bottom: 10px;
  }

  .icon {
    position: absolute;
    padding-right: 10px;
  }

  .fontBaseColor {
    color: ${baseColor};
  }

  .subtitle {
    color: #424242;
    font-weight: 500;
    font-size: 16px;
    margin: 20px 0px 50px 0px;
  }

  .firstStep {
    margin-right: 25px;
  }

  .line {
    border: 2px solid #bfbfbf;
    width: 21px;
    margin-top: -12px;
  }

  .line-active {
    border: 2px solid #7e7e7e;
    width: 21px;
    margin-top: -12px;
  }

  .subtitleBottom {
    margin-top: 20px;
    font-size: 15px;
  }

  .cbx {
    margin: auto;
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
  }
  .cbx span {
    display: flex;
    vertical-align: middle;
    transform: translate3d(0, 0, 0);
  }
  .cbx span:first-child {
    position: relative;
    width: 23px;
    height: 23px;
    border-radius: 3px;
    transform: scale(1);
    vertical-align: middle;
    border: 1px solid #9098a9;
    transition: all 0.2s ease;
  }
  .cbx span:first-child svg {
    position: absolute;
    top: 5px;
    left: 4px;
    fill: none;
    stroke: #ffffff;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 30px;
    stroke-dashoffset: 30px;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    transform: translate3d(0, 0, 0);
  }
  .cbx span:first-child:before {
    content: "";
    width: 100%;
    height: 100%;
    background: #ff6d0c;
    display: block;
    transform: scale(0);
    opacity: 1;
    border-radius: 50%;
  }
  .cbx span:last-child {
    padding-left: 8px;
  }
  .cbx:hover span:first-child {
    border-color: #ff6d0c;
  }

  .inp-cbx:checked + .cbx span:first-child {
    background: #ff6d0c;
    border-color: #ff6d0c;
    animation: wave 0.4s ease;
  }
  .inp-cbx:checked + .cbx span:first-child svg {
    stroke-dashoffset: 0;
  }
  .inp-cbx:checked + .cbx span:first-child:before {
    transform: scale(1);
    opacity: 0;
    transition: all 0.6s ease;
  }

  @keyframes wave {
    50% {
      transform: scale(0.9);
    }
  }

  .spinner-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #272727cc;
    z-index: 999999;
    text-align:center
  }

  .titleSpinner{
    color: #fff;
    margin-top:20px;
    font-size:25px;
  }

  .subTitleSpinner{
    color: #fff;
    margin-top:20px;
    font-size:25px;
  }

  .hidden { display:none; }
`;
