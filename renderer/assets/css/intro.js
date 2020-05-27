import css from 'styled-jsx/css'

var baseColor = "#ff6d0c";

export default css.global`
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
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
    background: ${baseColor};
    background: linear-gradient(#f47f22, #fab647);
  }
  font-family: "Roboto", sans-serif;
  .baseColor {
    color: ${baseColor};
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
    width: 350px;
  }

  .p1 {
    color: #fff;
    margin-top: 20px;
  }

  .l1 {
    color: #fff;
    cursor: pointer;
    background: none;
    border: none;
  }

  .l1:hover {
    color: #fff;
  }

  .btn1 {
    width: 300px;
    background: #fff;
    color: ${baseColor};
    border: 2px solid #fff;
    padding: 7px 20px 7px 30px;
    border-radius: 30px;
    font-size: 18px;
    text-align: left;
  }

  .btn2 {
    width: 300px;
    background: rgba(255, 255, 255, 0);
    color: #fff;
    border: 2px solid #fff;
    padding: 7px 20px 7px 30px;
    border-radius: 30px;
    font-size: 18px;
    text-align: left;
  }

  .btn3 {
    width: 100px;
    background: ${baseColor};
    color: #fff;
    border: none;
    padding: 6px 20px 6px 20px;
    border-radius: 15px;
    font-size: 15px;
    margin-left: auto;
  }

   .btnNext {
    width: 180px;
    background: ${baseColor};
    color: #fff;
    border: 2px solid ${baseColor};
    padding: 6px 20px 6px 20px;
    border-radius: 15px;
    font-size: 15px;
    margin-left: auto;
  }

  .btnBack {
    width: 180px;
    background: #fff;
    color: ${baseColor};
    border: 2px solid ${baseColor};
    padding: 6px 20px 6px 20px;
    border-radius: 15px;
    font-size: 15px;
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
`;