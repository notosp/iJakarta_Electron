
import css from 'styled-jsx/css'

var baseColor = "#ff6d0c";

export default css.global `

html,
body {
  width: 100vw;
  margin-left:0px;
}

.dot-active {
  background-color: #eee;
  height: 8px;
  margin-left:8px;
  width: 8px;
  border-radius: 50%;
  display: inline-block;
}
.dot {
  height: 8px;
  margin-left:8px;
  width: 8px;
  background-color: #aaa;
  border-radius: 50%;
  display: inline-block;
}

.splash,
img {
    position: relative;
    text-align: center;
    font-size: 1.125rem;
    padding-top: 50px;
    font-weight: 700;
}

.splash {
    position: fixed;
    height: 100%;
    width: 100vw;
    background: linear-gradient(#FAB654, #F47F22);
}

.btn-intro {
    margin-top: 20px;
    padding: 10px;
    width: 200px;
    border-radius: 15px;
    border: #ffff;
    color: #F47F22;
    text-size-adjust: 10;
    font-size: 15px;
    text-align: center;
    position: relative;
    background-color: #fff;
}
`;