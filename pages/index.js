import { useState } from 'react';
import Link from 'next/link';
import Head from '../components/head';

const FrontCard = () => {
    return (
        <div className='card-container image'>
            <h1>สวัสดีปีใหม่ 2020</h1>
            <style jsx>{`.card-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
      border-radius: 5px;
      padding: 20px;
      transition: all 0.2s;
  }

  .card-container:hover {
      box-shadow: rgba(0, 0, 0, 0.3) 0 3px 5px;
  }

  .image {
    background: url('https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1162&q=80');
    background-postition: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 30rem;
  }

  h1 {
    color: white;
      font-family: 'Helvetica', san-serif;
  }`}</style>
        </div>
    );
};

const BackCard = () => {
    return (
        <div className='card-container'>
            <h1>สวัสดีปีใหม่ 2020</h1>
            <p>ขอให้มีความสุขตลอดปี</p>
            <style jsx>{`.card-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
      border-radius: 5px;
      padding: 20px;
      transition: all 0.2s;
  }

  .card-container:hover {
      box-shadow: rgba(0, 0, 0, 0.3) 0 3px 5px;
  }

  h1 {
      font-family: 'Helvetica', san-serif;
  }`}</style>
        </div>
    );
};

const IndexPage = () => {
    const [isFrontCard, setIsFrontCard] = useState(true);

    const switchCardHandler = () => {
        setIsFrontCard(prev => !prev);
    };

    return (
        <div>
            <div className='pyro'>
                <div className='before'></div>
                <div className='after'></div>
            </div>
            <Head title='Happy New Year Card Generator' />
            <div className='page-container' onClick={switchCardHandler}>
                {isFrontCard ? <FrontCard /> : <BackCard />}
            </div>

            <style jsx>{`
                .page-container {
                    margin: 0 auto;
                    max-width: 80%;
                }

                /* https://codepen.io/yshlin/pen/ylDEk */

                .pyro > .before,
                .pyro > .after {
                    position: absolute;
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
                        0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
                        0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
                        0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
                        0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
                        0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
                        0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
                        0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
                        0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
                        0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
                        0 0 #fff;
                    -moz-animation: 1s bang ease-out infinite backwards,
                        1s gravity ease-in infinite backwards,
                        5s position linear infinite backwards;
                    -webkit-animation: 1s bang ease-out infinite backwards,
                        1s gravity ease-in infinite backwards,
                        5s position linear infinite backwards;
                    -o-animation: 1s bang ease-out infinite backwards,
                        1s gravity ease-in infinite backwards,
                        5s position linear infinite backwards;
                    -ms-animation: 1s bang ease-out infinite backwards,
                        1s gravity ease-in infinite backwards,
                        5s position linear infinite backwards;
                    animation: 1s bang ease-out infinite backwards,
                        1s gravity ease-in infinite backwards,
                        5s position linear infinite backwards;
                }

                .pyro > .after {
                    -moz-animation-delay: 1.25s, 1.25s, 1.25s;
                    -webkit-animation-delay: 1.25s, 1.25s, 1.25s;
                    -o-animation-delay: 1.25s, 1.25s, 1.25s;
                    -ms-animation-delay: 1.25s, 1.25s, 1.25s;
                    animation-delay: 1.25s, 1.25s, 1.25s;
                    -moz-animation-duration: 1.25s, 1.25s, 6.25s;
                    -webkit-animation-duration: 1.25s, 1.25s, 6.25s;
                    -o-animation-duration: 1.25s, 1.25s, 6.25s;
                    -ms-animation-duration: 1.25s, 1.25s, 6.25s;
                    animation-duration: 1.25s, 1.25s, 6.25s;
                }

                @-webkit-keyframes bang {
                    to {
                        box-shadow: 208px 67.3333333333px #fffb00,
                            99px -336.6666666667px #1e00ff,
                            -142px -257.6666666667px #26ff00,
                            232px 63.3333333333px #00ffd0,
                            131px 50.3333333333px #ff0009,
                            -237px -181.6666666667px #00ff1e,
                            -41px -242.6666666667px #ff0044,
                            -37px -31.6666666667px #1e00ff,
                            -217px -318.6666666667px #ff0091,
                            -7px -376.6666666667px #00ff2b,
                            -224px -142.6666666667px #9500ff,
                            -186px 3.3333333333px #001eff,
                            -159px 1.3333333333px #c4ff00,
                            -98px -286.6666666667px #3300ff,
                            -136px -89.6666666667px #f2ff00,
                            -226px -46.6666666667px #00ffe6,
                            141px -170.6666666667px #00ffaa,
                            16px -81.6666666667px #00ffee,
                            45px -297.6666666667px #22ff00,
                            -238px 75.3333333333px #00bbff,
                            -191px -293.6666666667px #00ff0d,
                            124px -31.6666666667px #ff3700,
                            -80px -371.6666666667px #9900ff,
                            12px -128.6666666667px #ff00a6,
                            35px -367.6666666667px #a6ff00,
                            27px -83.6666666667px #ff5900,
                            -194px -128.6666666667px #00aaff,
                            106px -227.6666666667px #ff4d00,
                            45px -173.6666666667px #d5ff00,
                            -16px -317.6666666667px #0dff00,
                            -151px -379.6666666667px #ff3300,
                            247px -358.6666666667px lime,
                            -204px -390.6666666667px #d900ff,
                            93px -133.6666666667px #c400ff,
                            -216px -351.6666666667px #f700ff,
                            232px -403.6666666667px #c400ff,
                            -152px -302.6666666667px #000dff,
                            152px -401.6666666667px #3cff00,
                            81px -191.6666666667px red,
                            -167px 18.3333333333px #00ffc4,
                            130px -36.6666666667px #5eff00,
                            -209px -318.6666666667px #ff1500,
                            -113px -234.6666666667px #09ff00,
                            109px -143.6666666667px #5900ff,
                            32px -313.6666666667px #eeff00,
                            86px -216.6666666667px #ff009d,
                            -74px -362.6666666667px #95ff00,
                            -176px -52.6666666667px #00f7ff,
                            172px -405.6666666667px #d9ff00,
                            84px 44.3333333333px #5100ff,
                            -70px -291.6666666667px #0040ff;
                    }
                }
                @-moz-keyframes bang {
                    to {
                        box-shadow: 208px 67.3333333333px #fffb00,
                            99px -336.6666666667px #1e00ff,
                            -142px -257.6666666667px #26ff00,
                            232px 63.3333333333px #00ffd0,
                            131px 50.3333333333px #ff0009,
                            -237px -181.6666666667px #00ff1e,
                            -41px -242.6666666667px #ff0044,
                            -37px -31.6666666667px #1e00ff,
                            -217px -318.6666666667px #ff0091,
                            -7px -376.6666666667px #00ff2b,
                            -224px -142.6666666667px #9500ff,
                            -186px 3.3333333333px #001eff,
                            -159px 1.3333333333px #c4ff00,
                            -98px -286.6666666667px #3300ff,
                            -136px -89.6666666667px #f2ff00,
                            -226px -46.6666666667px #00ffe6,
                            141px -170.6666666667px #00ffaa,
                            16px -81.6666666667px #00ffee,
                            45px -297.6666666667px #22ff00,
                            -238px 75.3333333333px #00bbff,
                            -191px -293.6666666667px #00ff0d,
                            124px -31.6666666667px #ff3700,
                            -80px -371.6666666667px #9900ff,
                            12px -128.6666666667px #ff00a6,
                            35px -367.6666666667px #a6ff00,
                            27px -83.6666666667px #ff5900,
                            -194px -128.6666666667px #00aaff,
                            106px -227.6666666667px #ff4d00,
                            45px -173.6666666667px #d5ff00,
                            -16px -317.6666666667px #0dff00,
                            -151px -379.6666666667px #ff3300,
                            247px -358.6666666667px lime,
                            -204px -390.6666666667px #d900ff,
                            93px -133.6666666667px #c400ff,
                            -216px -351.6666666667px #f700ff,
                            232px -403.6666666667px #c400ff,
                            -152px -302.6666666667px #000dff,
                            152px -401.6666666667px #3cff00,
                            81px -191.6666666667px red,
                            -167px 18.3333333333px #00ffc4,
                            130px -36.6666666667px #5eff00,
                            -209px -318.6666666667px #ff1500,
                            -113px -234.6666666667px #09ff00,
                            109px -143.6666666667px #5900ff,
                            32px -313.6666666667px #eeff00,
                            86px -216.6666666667px #ff009d,
                            -74px -362.6666666667px #95ff00,
                            -176px -52.6666666667px #00f7ff,
                            172px -405.6666666667px #d9ff00,
                            84px 44.3333333333px #5100ff,
                            -70px -291.6666666667px #0040ff;
                    }
                }
                @-o-keyframes bang {
                    to {
                        box-shadow: 208px 67.3333333333px #fffb00,
                            99px -336.6666666667px #1e00ff,
                            -142px -257.6666666667px #26ff00,
                            232px 63.3333333333px #00ffd0,
                            131px 50.3333333333px #ff0009,
                            -237px -181.6666666667px #00ff1e,
                            -41px -242.6666666667px #ff0044,
                            -37px -31.6666666667px #1e00ff,
                            -217px -318.6666666667px #ff0091,
                            -7px -376.6666666667px #00ff2b,
                            -224px -142.6666666667px #9500ff,
                            -186px 3.3333333333px #001eff,
                            -159px 1.3333333333px #c4ff00,
                            -98px -286.6666666667px #3300ff,
                            -136px -89.6666666667px #f2ff00,
                            -226px -46.6666666667px #00ffe6,
                            141px -170.6666666667px #00ffaa,
                            16px -81.6666666667px #00ffee,
                            45px -297.6666666667px #22ff00,
                            -238px 75.3333333333px #00bbff,
                            -191px -293.6666666667px #00ff0d,
                            124px -31.6666666667px #ff3700,
                            -80px -371.6666666667px #9900ff,
                            12px -128.6666666667px #ff00a6,
                            35px -367.6666666667px #a6ff00,
                            27px -83.6666666667px #ff5900,
                            -194px -128.6666666667px #00aaff,
                            106px -227.6666666667px #ff4d00,
                            45px -173.6666666667px #d5ff00,
                            -16px -317.6666666667px #0dff00,
                            -151px -379.6666666667px #ff3300,
                            247px -358.6666666667px lime,
                            -204px -390.6666666667px #d900ff,
                            93px -133.6666666667px #c400ff,
                            -216px -351.6666666667px #f700ff,
                            232px -403.6666666667px #c400ff,
                            -152px -302.6666666667px #000dff,
                            152px -401.6666666667px #3cff00,
                            81px -191.6666666667px red,
                            -167px 18.3333333333px #00ffc4,
                            130px -36.6666666667px #5eff00,
                            -209px -318.6666666667px #ff1500,
                            -113px -234.6666666667px #09ff00,
                            109px -143.6666666667px #5900ff,
                            32px -313.6666666667px #eeff00,
                            86px -216.6666666667px #ff009d,
                            -74px -362.6666666667px #95ff00,
                            -176px -52.6666666667px #00f7ff,
                            172px -405.6666666667px #d9ff00,
                            84px 44.3333333333px #5100ff,
                            -70px -291.6666666667px #0040ff;
                    }
                }
                @-ms-keyframes bang {
                    to {
                        box-shadow: 208px 67.3333333333px #fffb00,
                            99px -336.6666666667px #1e00ff,
                            -142px -257.6666666667px #26ff00,
                            232px 63.3333333333px #00ffd0,
                            131px 50.3333333333px #ff0009,
                            -237px -181.6666666667px #00ff1e,
                            -41px -242.6666666667px #ff0044,
                            -37px -31.6666666667px #1e00ff,
                            -217px -318.6666666667px #ff0091,
                            -7px -376.6666666667px #00ff2b,
                            -224px -142.6666666667px #9500ff,
                            -186px 3.3333333333px #001eff,
                            -159px 1.3333333333px #c4ff00,
                            -98px -286.6666666667px #3300ff,
                            -136px -89.6666666667px #f2ff00,
                            -226px -46.6666666667px #00ffe6,
                            141px -170.6666666667px #00ffaa,
                            16px -81.6666666667px #00ffee,
                            45px -297.6666666667px #22ff00,
                            -238px 75.3333333333px #00bbff,
                            -191px -293.6666666667px #00ff0d,
                            124px -31.6666666667px #ff3700,
                            -80px -371.6666666667px #9900ff,
                            12px -128.6666666667px #ff00a6,
                            35px -367.6666666667px #a6ff00,
                            27px -83.6666666667px #ff5900,
                            -194px -128.6666666667px #00aaff,
                            106px -227.6666666667px #ff4d00,
                            45px -173.6666666667px #d5ff00,
                            -16px -317.6666666667px #0dff00,
                            -151px -379.6666666667px #ff3300,
                            247px -358.6666666667px lime,
                            -204px -390.6666666667px #d900ff,
                            93px -133.6666666667px #c400ff,
                            -216px -351.6666666667px #f700ff,
                            232px -403.6666666667px #c400ff,
                            -152px -302.6666666667px #000dff,
                            152px -401.6666666667px #3cff00,
                            81px -191.6666666667px red,
                            -167px 18.3333333333px #00ffc4,
                            130px -36.6666666667px #5eff00,
                            -209px -318.6666666667px #ff1500,
                            -113px -234.6666666667px #09ff00,
                            109px -143.6666666667px #5900ff,
                            32px -313.6666666667px #eeff00,
                            86px -216.6666666667px #ff009d,
                            -74px -362.6666666667px #95ff00,
                            -176px -52.6666666667px #00f7ff,
                            172px -405.6666666667px #d9ff00,
                            84px 44.3333333333px #5100ff,
                            -70px -291.6666666667px #0040ff;
                    }
                }
                @keyframes bang {
                    to {
                        box-shadow: 208px 67.3333333333px #fffb00,
                            99px -336.6666666667px #1e00ff,
                            -142px -257.6666666667px #26ff00,
                            232px 63.3333333333px #00ffd0,
                            131px 50.3333333333px #ff0009,
                            -237px -181.6666666667px #00ff1e,
                            -41px -242.6666666667px #ff0044,
                            -37px -31.6666666667px #1e00ff,
                            -217px -318.6666666667px #ff0091,
                            -7px -376.6666666667px #00ff2b,
                            -224px -142.6666666667px #9500ff,
                            -186px 3.3333333333px #001eff,
                            -159px 1.3333333333px #c4ff00,
                            -98px -286.6666666667px #3300ff,
                            -136px -89.6666666667px #f2ff00,
                            -226px -46.6666666667px #00ffe6,
                            141px -170.6666666667px #00ffaa,
                            16px -81.6666666667px #00ffee,
                            45px -297.6666666667px #22ff00,
                            -238px 75.3333333333px #00bbff,
                            -191px -293.6666666667px #00ff0d,
                            124px -31.6666666667px #ff3700,
                            -80px -371.6666666667px #9900ff,
                            12px -128.6666666667px #ff00a6,
                            35px -367.6666666667px #a6ff00,
                            27px -83.6666666667px #ff5900,
                            -194px -128.6666666667px #00aaff,
                            106px -227.6666666667px #ff4d00,
                            45px -173.6666666667px #d5ff00,
                            -16px -317.6666666667px #0dff00,
                            -151px -379.6666666667px #ff3300,
                            247px -358.6666666667px lime,
                            -204px -390.6666666667px #d900ff,
                            93px -133.6666666667px #c400ff,
                            -216px -351.6666666667px #f700ff,
                            232px -403.6666666667px #c400ff,
                            -152px -302.6666666667px #000dff,
                            152px -401.6666666667px #3cff00,
                            81px -191.6666666667px red,
                            -167px 18.3333333333px #00ffc4,
                            130px -36.6666666667px #5eff00,
                            -209px -318.6666666667px #ff1500,
                            -113px -234.6666666667px #09ff00,
                            109px -143.6666666667px #5900ff,
                            32px -313.6666666667px #eeff00,
                            86px -216.6666666667px #ff009d,
                            -74px -362.6666666667px #95ff00,
                            -176px -52.6666666667px #00f7ff,
                            172px -405.6666666667px #d9ff00,
                            84px 44.3333333333px #5100ff,
                            -70px -291.6666666667px #0040ff;
                    }
                }
                @-webkit-keyframes gravity {
                    to {
                        transform: translateY(200px);
                        -moz-transform: translateY(200px);
                        -webkit-transform: translateY(200px);
                        -o-transform: translateY(200px);
                        -ms-transform: translateY(200px);
                        opacity: 0;
                    }
                }
                @-moz-keyframes gravity {
                    to {
                        transform: translateY(200px);
                        -moz-transform: translateY(200px);
                        -webkit-transform: translateY(200px);
                        -o-transform: translateY(200px);
                        -ms-transform: translateY(200px);
                        opacity: 0;
                    }
                }
                @-o-keyframes gravity {
                    to {
                        transform: translateY(200px);
                        -moz-transform: translateY(200px);
                        -webkit-transform: translateY(200px);
                        -o-transform: translateY(200px);
                        -ms-transform: translateY(200px);
                        opacity: 0;
                    }
                }
                @-ms-keyframes gravity {
                    to {
                        transform: translateY(200px);
                        -moz-transform: translateY(200px);
                        -webkit-transform: translateY(200px);
                        -o-transform: translateY(200px);
                        -ms-transform: translateY(200px);
                        opacity: 0;
                    }
                }
                @keyframes gravity {
                    to {
                        transform: translateY(200px);
                        -moz-transform: translateY(200px);
                        -webkit-transform: translateY(200px);
                        -o-transform: translateY(200px);
                        -ms-transform: translateY(200px);
                        opacity: 0;
                    }
                }
                @-webkit-keyframes position {
                    0%,
                    19.9% {
                        margin-top: 10%;
                        margin-left: 40%;
                    }
                    20%,
                    39.9% {
                        margin-top: 40%;
                        margin-left: 30%;
                    }
                    40%,
                    59.9% {
                        margin-top: 20%;
                        margin-left: 70%;
                    }
                    60%,
                    79.9% {
                        margin-top: 30%;
                        margin-left: 20%;
                    }
                    80%,
                    99.9% {
                        margin-top: 30%;
                        margin-left: 80%;
                    }
                }
                @-moz-keyframes position {
                    0%,
                    19.9% {
                        margin-top: 10%;
                        margin-left: 40%;
                    }
                    20%,
                    39.9% {
                        margin-top: 40%;
                        margin-left: 30%;
                    }
                    40%,
                    59.9% {
                        margin-top: 20%;
                        margin-left: 70%;
                    }
                    60%,
                    79.9% {
                        margin-top: 30%;
                        margin-left: 20%;
                    }
                    80%,
                    99.9% {
                        margin-top: 30%;
                        margin-left: 80%;
                    }
                }
                @-o-keyframes position {
                    0%,
                    19.9% {
                        margin-top: 10%;
                        margin-left: 40%;
                    }
                    20%,
                    39.9% {
                        margin-top: 40%;
                        margin-left: 30%;
                    }
                    40%,
                    59.9% {
                        margin-top: 20%;
                        margin-left: 70%;
                    }
                    60%,
                    79.9% {
                        margin-top: 30%;
                        margin-left: 20%;
                    }
                    80%,
                    99.9% {
                        margin-top: 30%;
                        margin-left: 80%;
                    }
                }
                @-ms-keyframes position {
                    0%,
                    19.9% {
                        margin-top: 10%;
                        margin-left: 40%;
                    }
                    20%,
                    39.9% {
                        margin-top: 40%;
                        margin-left: 30%;
                    }
                    40%,
                    59.9% {
                        margin-top: 20%;
                        margin-left: 70%;
                    }
                    60%,
                    79.9% {
                        margin-top: 30%;
                        margin-left: 20%;
                    }
                    80%,
                    99.9% {
                        margin-top: 30%;
                        margin-left: 80%;
                    }
                }
                @keyframes position {
                    0%,
                    19.9% {
                        margin-top: 10%;
                        margin-left: 40%;
                    }
                    20%,
                    39.9% {
                        margin-top: 40%;
                        margin-left: 30%;
                    }
                    40%,
                    59.9% {
                        margin-top: 20%;
                        margin-left: 70%;
                    }
                    60%,
                    79.9% {
                        margin-top: 30%;
                        margin-left: 20%;
                    }
                    80%,
                    99.9% {
                        margin-top: 30%;
                        margin-left: 80%;
                    }
                }
            `}</style>
        </div>
    );
};

export default IndexPage;
