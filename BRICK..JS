@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;600&display=swap");

#hoverBrickClose {
    z-index:  10000;
    position:  absolute !important;
    right:  10px;
    width:  20px;
    height:  20px;
    background-color:  rgba(0, 0, 0, 0);
    border-radius:  10px !important;
}

#hoverBrickClose:hover {
    background-color:  rgba(0, 0, 0, 0.1);
}

body{
    background-color: #333;
}

teller {
    transform: scale(1);
    position: fixed!important;
    z-index: 100000;
    left: 0;
    bottom: 0!important;
    background-color: transparent!important;
}

#buttonFatherBrick {
    opacity: 0;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    position: absolute!important;
    background-color: white;
    width: 50px;
    height: 50px;
    left: 30px;
    bottom: 30px!important;
    border-radius: 25px;
    border: none!important;
}

#buttonMessengerBrick {
    z-index: 100000!important;
    opacity: 1;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    position: absolute!important;
    background-color: transparent;
    width: 50px;
    height: 50px;
    left: 100px;
    bottom: 30px!important;
    border-radius: none !important;
    border: none!important;
}

#buttonWhatsappBrick {
    z-index: 100000!important;
    opacity: 1;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    position: absolute!important;
    background-color: transparent;
    width: 50px;
    height: 50px;
    left: 165px;
    bottom: 30px!important;
    border-radius: none !important;
    border: none!important;
}

.transparentBG{
    fill:none;
}

#imagenPerfilOperator{
    opacity: 0;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    position: absolute;
    left: 20px;
    top: 20px;
    z-index: 1000000000;
    width: 55px;
    height: 55px;
    border-radius: 30px;
    background-color: white;
}

#wspSendButtonSVG{
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    fill:#fff
}

#messengerIconShape{/* 
    stroke:rgba(0, 0, 0, 0.2);
    stroke-width:.5;
    stroke-miterlimit:10; */
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    fill:#ffffff;
}

#whatsappIconShape{/* 
    stroke:rgba(0, 0, 0, 0.2);
    stroke-width:.5;
    stroke-miterlimit:10; */
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    fill:#ffffff;
}

#messengerIconButton{
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    fill:#1E2428;
}

#whatsappIconButton{
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    fill:#1E2428;
}

#platformBoxBrick{
    display: none;
    opacity: 0;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    position: absolute;
    background-color: #f2f2f2;
    left: 0;
    bottom: 0;
    width: 340px;
    height: 0px;
    border-radius: 0px 0px 10px 10px;
}

#bubbleWelcome{
    position: absolute;
    opacity: 0;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    padding: 10px;
    z-index: 1000;
    left: 10px;
    top: 20px;
    background-color: white;
    max-width: 200px;
    max-height: 60px;
    border-radius: 5px;
}

#operatorBrick{
    display: none;
    opacity: 0;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    font-size: large;
    padding: 10px;
    z-index: 10000;
    position: absolute;
    left: 80px;
    top: 15px;
}

#stateBrick{
    display: none;
    opacity: 0;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    font-size: small;
    font-weight: 200;
    padding: 10px;
    z-index: 10000;
    position: absolute;
    left: 80px;
    top: 40px;
}

#messengerSendButtonBrick{
    display: none;
    opacity: 0;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    cursor: pointer;
    position: absolute;
    width: 320px;
    height: 50px;
    bottom: 10px;
    left: 10px;
    background-color: #0384ff;
    border-radius: 5px;
    color: white;
    text-align: center;
    text-decoration: none;
}

#messengerSendButtonBrick svg{
    transform: translate(10px, 10px);
}

#wspSendButtonBrick{
    display: none;
    opacity: 0;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    z-index: 200000000000000;
    cursor: pointer;
    position: absolute;
    width: 40px;
    height: 40px;
    bottom: 15px;
    right: 20px;
    background-color: #03d79c;
    border-radius: 25px;
    color: white;
    text-align: center;
    text-decoration: none;
}

#messengerIconFull{
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    fill: white;
}

#fatherBrick {
    display: none;
    opacity: 0;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    font-family: "Outfit", sans-serif;
    position: absolute!important;
    background-color: #fff!important;
    width: 340px!important;
    height: 200px;
    left: 30px!important;
    bottom: 100px!important;
    border-radius: 10px;
    transform: translateY(10px);
}

#hoverBrick {
    transition:  .3s !important;
    -webkit-transition:  .3s !important;
    -moz-transition:  .3s !important;
    -o-transition:  .3s !important;
    border:  1px solid rgba(0, 0, 0, 0.1)!important;
    bottom: 40px!important;
    opacity: 0;
    text-align: left;
    font-weight: 200!important;
    font-size: small!important;
    font-family: "Outfit", sans-serif;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    position: absolute!important;
    color: black;
    background-color: white!important;
    width: 280px!important;
    padding-left:  20px;
     height: 30px!important;
    border-radius: 5px;
    left: 90px;
    padding-top: 10px;
}
#xBrick {
    opacity: 0;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;    
    fill: #1e2428!important;
    transform: translateX(30px) scaleX(0);
}
#palomita {
    opacity: 1;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;    
    fill: #1e2428!important;
    transform: translateX(0px) scaleX(1);
}
.questBrick {
    opacity: 1;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    fill: #cecece;
}
#titleBrick {
    font-weight: 200;
    color: #333!important;
    opacity: 1;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    position: absolute!important;
    background-color: transparent!important;
    width: 300px!important;
    height: auto!important;
    left: 20px!important;
    top: 10px!important;
    text-align: center!important;
}
#emojisBrick {
    opacity: 1;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    position: absolute!important;
    background-color: transparent!important;
    width: 300px!important;
    height: 80px!important;
    left: 20px!important;
    top: 60px;
    text-align: center!important;
}
#emojiSelectorBrick {
    opacity: 0;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    position: absolute!important;
    background-color: #eaeaeb!important;
    width: 10px!important;
    height: 10px!important;
    left: 25px;
    transform: rotate(45deg)!important;
    bottom: -7px!important;
    text-align: center!important;
}
#emojiBrick1 {
    opacity: 1;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    position: absolute!important;
    background-color: transparent!important;
    width: 60px!important;
    height: 80px!important;
    left: 0!important;
    top: 0!important;
    text-align: center!important;
    cursor: pointer!important;
}
#emojiBrick1:hover>#emojiDescriptionBrick1 {
    opacity: 1!important;
}
#emojiBrick2 {
    opacity: 1;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    position: absolute!important;
    background-color: transparent!important;
    width: 60px!important;
    height: 80px!important;
    left: 60px!important;
    top: 0!important;
    text-align: center!important;
    cursor: pointer!important;
}
#emojiBrick2:hover>#emojiDescriptionBrick2 {
    opacity: 1!important;
}
#emojiBrick3 {
    opacity: 1;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    position: absolute!important;
    background-color: transparent!important;
    width: 60px!important;
    height: 80px!important;
    left: 120px!important;
    top: 0!important;
    text-align: center!important;
    cursor: pointer!important;
}
#emojiBrick3:hover>#emojiDescriptionBrick3 {
    opacity: 1!important;
}
#emojiBrick4 {
    opacity: 1;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    position: absolute!important;
    background-color: transparent!important;
    width: 60px!important;
    height: 80px!important;
    left: 180px!important;
    top: 0!important;
    text-align: center!important;
    cursor: pointer!important;
}
#emojiBrick4:hover>#emojiDescriptionBrick4 {
    opacity: 1!important;
}
#emojiBrick5 {
    opacity: 1;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    position: absolute!important;
    background-color: transparent!important;
    width: 60px!important;
    height: 80px!important;
    left: 240px!important;
    top: 0!important;
    text-align: center!important;
    cursor: pointer!important;
}
#emojiBrick5:hover>#emojiDescriptionBrick5 {
    opacity: 1!important;
}
#emojiFaceBrick1 {
    opacity: 1!important;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    position: absolute!important;
    background-color: #ffe137;
    width: 40px!important;
    height: 40px!important;
    border-radius: 20px;
    left: 10px!important;
    top: 10px!important;
    cursor: pointer!important;
}
#emojiFaceBrick2 {
    opacity: 1!important;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    position: absolute!important;
    background-color: #ffe137;
    width: 40px!important;
    height: 40px!important;
    border-radius: 20px;
    left: 10px!important;
    top: 10px!important;
    cursor: pointer!important;
}
#emojiFaceBrick3 {
    opacity: 1!important;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    position: absolute!important;
    background-color: #ffe137;
    width: 40px!important;
    height: 40px!important;
    border-radius: 20px;
    left: 10px!important;
    top: 10px!important;
    cursor: pointer!important;
}
#emojiFaceBrick4 {
    opacity: 1!important;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    position: absolute!important;
    background-color: #ffe137;
    width: 40px!important;
    height: 40px!important;
    border-radius: 20px;
    left: 10px!important;
    top: 10px!important;
    cursor: pointer!important;
}
#emojiFaceBrick5 {
    opacity: 1!important;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    position: absolute!important;
    background-color: #ffe137;
    width: 40px!important;
    height: 40px!important;
    border-radius: 20px;
    left: 10px!important;
    top: 10px!important;
    cursor: pointer!important;
}
#SuperFaceTeller {
    opacity: 1;
    animation-name: Super!important;
    animation-direction: normal!important;
    animation-play-state: paused;
    animation-duration: 2s!important;
    animation-timing-function: ease-all!important;
    animation-iteration-count: infinite!important;
    cursor: pointer!important;
}
#GoodFaceTeller {
    opacity: 1;
    animation-name: Good!important;
    animation-direction: normal!important;
    animation-play-state: paused;
    animation-duration: 2s!important;
    animation-timing-function: ease-all!important;
    animation-iteration-count: infinite!important;
    cursor: pointer!important;
}
#NeutralFaceTeller {
    opacity: 1;
    animation-name: Neutral!important;
    animation-direction: normal!important;
    animation-play-state: paused;
    animation-duration: 2s!important;
    animation-timing-function: ease-all!important;
    animation-iteration-count: infinite!important;
    cursor: pointer!important;
}
#BadFaceTeller {
    opacity: 1;
    animation-name: Bad!important;
    animation-direction: normal!important;
    animation-play-state: paused;
    animation-duration: 2s!important;
    animation-timing-function: ease-all!important;
    animation-iteration-count: infinite!important;
    cursor: pointer!important;
}
#FuriousFaceTeller {
    opacity: 1;
    animation-name: Furious!important;
    animation-direction: normal!important;
    animation-play-state: paused;
    animation-duration: 2s!important;
    animation-timing-function: ease-all!important;
    animation-iteration-count: infinite!important;
    cursor: pointer!important;
}
.tellersFace {
    fill: none!important;
}
#emojiDescriptionBrick1 {
    color: #333!important;
    opacity: 0;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    font-size: small!important;
    position: absolute!important;
    background-color: transparent!important;
    width: 60px!important;
    height: 20px!important;
    left: 0!important;
    bottom: 0!important;
    text-align: center!important;
    cursor: pointer!important;
}
#emojiDescriptionBrick2 {
    color: #333!important;
    opacity: 0;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    font-size: small!important;
    position: absolute!important;
    background-color: transparent!important;
    width: 60px!important;
    height: 20px!important;
    left: 0!important;
    bottom: 0!important;
    text-align: center!important;
    cursor: pointer!important;
}
#emojiDescriptionBrick3 {
    color: #333!important;
    opacity: 0;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    font-size: small!important;
    position: absolute!important;
    background-color: transparent!important;
    width: 60px!important;
    height: 20px!important;
    left: 0!important;
    bottom: 0!important;
    text-align: center!important;
    cursor: pointer!important;
}
#emojiDescriptionBrick4 {
    color: #333!important;
    opacity: 0;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    font-size: small!important;
    position: absolute!important;
    background-color: transparent!important;
    width: 60px!important;
    height: 20px!important;
    left: 0!important;
    bottom: 0!important;
    text-align: center!important;
    cursor: pointer!important;
}
#emojiDescriptionBrick5 {
    color: #333!important;
    opacity: 0;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    font-size: small!important;
    position: absolute!important;
    width: 60px!important;
    height: 20px!important;
    left: 0!important;
    bottom: 0!important;
    text-align: center!important;
    cursor: pointer!important;
}
#textAreasBrick {
    display: none;
    opacity: 0;
    display: none;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
     -o-transition: .3s!important;
    position: absolute!important;
    background-color: #eaeaeb!important;
    width: 340px!important;
    height: 110px!important;
    left: 0!important;
    top: 100px!important;
    text-align: center!important;
}

#textAreaBrick {
    color: #333!important;
    opacity: 1!important;
    resize: none!important;
    font-family: "Outfit", sans-serif;
    font-size: medium!important;
    outline: 0!important;
    box-shadow: none!important;
    border: none!important;
    position: absolute!important;
    background-color: transparent!important;
    width: 300px!important;
    height: 90px!important;
    left: 20px!important;
    top: 10px!important;
    text-align: left!important;
}

#whatsappArea {
    display: none;
    position: absolute!important;
    opacity: 1;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
     -o-transition: .3s!important;
    background-color: transparent!important;
    width: 340px!important;
    height: 70px!important;
    left: 0!important;
    bottom: 0!important;
    text-align: left!important;
}

#textAreaWsp {
    z-index: 10000000;
    color: #0d1418!important;
    opacity: 1!important;
    resize: none!important;
    font-family: "Outfit", sans-serif;
    font-size: medium!important;
    outline: 0!important;
    box-shadow: none!important;
    border: none!important;
    position: absolute!important;
    background-color: transparent!important;
    width: 220px!important;
    height: 20px!important;
    left: 20px!important;
    bottom: 27px!important;
    text-align: left!important;
}

#inputAreasBrick {
    display: none;
    opacity: 0;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    position: absolute!important;
    background-color: #eaeaeb!important;
    width: 340px!important;
    height: 50px!important;
    left: 0!important;
    top: 90px!important;
    text-align: center!important;
}
#inputAreaBrick {
    color: #333!important;
    opacity: 1;
    resize: none!important;
    font-family: "Outfit", sans-serif;
    font-size: medium!important;
    outline: 0!important;
    box-shadow: none!important;
    border: none!important;
    position: absolute!important;
    background-color: transparent!important;
    width: 300px!important;
    height: 30px!important;
    left: 20px!important;
    top: 10px!important;
    text-align: center!important;
}
#actionButtonBrick {
    display: none;
    opacity: 0;
    position: absolute!important;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    bottom: 10px;
    right: 20px!important;
    border-radius: 5px;
    background-color: #cecece;
    width: 60px!important;
    height: 25px!important;
    font-size: small!important;
    text-align: center!important;
    padding-top: 7px!important;
    color: #fff!important;
    cursor: pointer!important;
}
#actionButtonBrick:hover {
    opacity: .7!important;
}
#skipButtonBrick {
    display: none;
    opacity: 0;
    position: absolute!important;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    bottom: 20px!important;
    right: 80px!important;
    border-radius: 5px;
    background-color: transparent!important;
    width: 60px!important;
    height: 25px!important;
    font-size: small!important;
    text-align: center!important;
    padding-top: 7px!important;
    color: #1e2428!important;
    cursor: pointer!important;
    text-decoration: underline!important;
}
#paragraphBrick {
    color: #333!important;
    text-align: right;
    opacity: 1;
    position: absolute!important;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    bottom: 10px!important;
    right: 20px!important;
    border-radius: 5px;
    background-color: transparent!important;
    width: 300px!important;
    height: 25px!important;
    font-size: small!important;
    padding-top: 7px!important;
    cursor: pointer!important;
}
#paragraphBrick a {
    text-decoration: none !important;
    color: #1e2428!important;
    font-weight: 600;
    font-size: medium;
}
#notificationParagraphBrick {
    display: block;
    opacity: 0;
    transition: .3s!important;
    -webkit-transition: .3s!important;
    -moz-transition: .3s!important;
    -o-transition: .3s!important;
    font-size: small!important;
    position: absolute!important;
    background-color: transparent!important;
    width: 300px!important;
    height: auto!important;
    left: 20px!important;
    bottom: 60px!important;
    text-align: center!important;
    color: #777!important;
}
@keyframes Furious {
    0% {
    transform: translateX(0) translateY(0);
}
10% {
    transform: translateX(0) translateY(0);
}
15% {
    transform: translateX(4px) translateY(-3px);
}
20% {
    transform: translateX(-4px) translateY(-3px);
}
25% {
    transform: translateX(4px) translateY(-3px);
}
30% {
    transform: translateX(-4px) translateY(-3px);
}
35% {
    transform: translateX(4px) translateY(-3px);
}
40% {
    transform: translateX(-4px) translateY(-3px);
}
45% {
    transform: translateX(0) translateY(-3px);
}
90% {
    transform: translateX(0) translateY(0);
}
}@-webkit-keyframes Furious {
    0% {
    transform: translateX(0) translateY(0);
}
10% {
    transform: translateX(0) translateY(0);
}
15% {
    transform: translateX(4px) translateY(-3px);
}
20% {
    transform: translateX(-4px) translateY(-3px);
}
25% {
    transform: translateX(4px) translateY(-3px);
}
30% {
    transform: translateX(-4px) translateY(-3px);
}
35% {
    transform: translateX(4px) translateY(-3px);
}
40% {
    transform: translateX(-4px) translateY(-3px);
}
45% {
    transform: translateX(0) translateY(-3px);
}
90% {
    transform: translateX(0) translateY(0);
}
}@-moz-keyframes Furious {
    0% {
    transform: translateX(0) translateY(0);
}
10% {
    transform: translateX(0) translateY(0);
}
15% {
    transform: translateX(4px) translateY(-3px);
}
20% {
    transform: translateX(-4px) translateY(-3px);
}
25% {
    transform: translateX(4px) translateY(-3px);
}
30% {
    transform: translateX(-4px) translateY(-3px);
}
35% {
    transform: translateX(4px) translateY(-3px);
}
40% {
    transform: translateX(-4px) translateY(-3px);
}
45% {
    transform: translateX(0) translateY(-3px);
}
90% {
    transform: translateX(0) translateY(0);
}
}@-ms-keyframes Furious {
    0% {
    transform: translateX(0) translateY(0);
}
10% {
    transform: translateX(0) translateY(0);
}
15% {
    transform: translateX(4px) translateY(-3px);
}
20% {
    transform: translateX(-4px) translateY(-3px);
}
25% {
    transform: translateX(4px) translateY(-3px);
}
30% {
    transform: translateX(-4px) translateY(-3px);
}
35% {
    transform: translateX(4px) translateY(-3px);
}
40% {
    transform: translateX(-4px) translateY(-3px);
}
45% {
    transform: translateX(0) translateY(-3px);
}
90% {
    transform: translateX(0) translateY(0);
}
}@-o-keyframes Furious {
    0% {
    transform: translateX(0) translateY(0);
}
10% {
    transform: translateX(0) translateY(0);
}
15% {
    transform: translateX(4px) translateY(-3px);
}
20% {
    transform: translateX(-4px) translateY(-3px);
}
25% {
    transform: translateX(4px) translateY(-3px);
}
30% {
    transform: translateX(-4px) translateY(-3px);
}
35% {
    transform: translateX(4px) translateY(-3px);
}
40% {
    transform: translateX(-4px) translateY(-3px);
}
45% {
    transform: translateX(0) translateY(-3px);
}
90% {
    transform: translateX(0) translateY(0);
}
}@keyframes Bad {
    0% {
    transform: translateX(0);
}
10% {
    transform: translateX(0);
}
20% {
    transform: translateX(4px);
}
30% {
    transform: translateX(-4px);
}
40% {
    transform: translateX(4px);
}
50% {
    transform: translateX(-4px);
}
60% {
    transform: translateX(4px);
}
70% {
    transform: translateX(-4px);
}
80% {
    transform: translateX(0);
}
90% {
    transform: translateX(0);
}
}@-webkit-keyframes Bad {
    0% {
    transform: translateX(0);
}
10% {
    transform: translateX(0);
}
20% {
    transform: translateX(4px);
}
30% {
    transform: translateX(-4px);
}
40% {
    transform: translateX(4px);
}
50% {
    transform: translateX(-4px);
}
60% {
    transform: translateX(4px);
}
70% {
    transform: translateX(-4px);
}
80% {
    transform: translateX(0);
}
90% {
    transform: translateX(0);
}
}@-moz-keyframes Bad {
    0% {
    transform: translateX(0);
}
10% {
    transform: translateX(0);
}
20% {
    transform: translateX(4px);
}
30% {
    transform: translateX(-4px);
}
40% {
    transform: translateX(4px);
}
50% {
    transform: translateX(-4px);
}
60% {
    transform: translateX(4px);
}
70% {
    transform: translateX(-4px);
}
80% {
    transform: translateX(0);
}
90% {
    transform: translateX(0);
}
}@-ms-keyframes Bad {
    0% {
    transform: translateX(0);
}
10% {
    transform: translateX(0);
}
20% {
    transform: translateX(4px);
}
30% {
    transform: translateX(-4px);
}
40% {
    transform: translateX(4px);
}
50% {
    transform: translateX(-4px);
}
60% {
    transform: translateX(4px);
}
70% {
    transform: translateX(-4px);
}
80% {
    transform: translateX(0);
}
90% {
    transform: translateX(0);
}
}@-o-keyframes Bad {
    0% {
    transform: translateX(0);
}
10% {
    transform: translateX(0);
}
20% {
    transform: translateX(4px);
}
30% {
    transform: translateX(-4px);
}
40% {
    transform: translateX(4px);
}
50% {
    transform: translateX(-4px);
}
60% {
    transform: translateX(4px);
}
70% {
    transform: translateX(-4px);
}
80% {
    transform: translateX(0);
}
90% {
    transform: translateX(0);
}
}@keyframes Neutral {
    0% {
    transform: translateY(0);
}
10% {
    transform: translateY(0);
}
30% {
    transform: translateX(5px);
}
40% {
    transform: translateX(5px);
}
60% {
    transform: translateX(-5px);
}
70% {
    transform: translateX(-5px);
}
80% {
    transform: translateY(0);
}
90% {
    transform: translateY(0);
}
}@-webkit-keyframes Neutral {
    0% {
    transform: translateY(0);
}
10% {
    transform: translateY(0);
}
30% {
    transform: translateX(5px);
}
40% {
    transform: translateX(5px);
}
60% {
    transform: translateX(-5px);
}
70% {
    transform: translateX(-5px);
}
80% {
    transform: translateY(0);
}
90% {
    transform: translateY(0);
}
}@-moz-keyframes Neutral {
    0% {
    transform: translateY(0);
}
10% {
    transform: translateY(0);
}
30% {
    transform: translateX(5px);
}
40% {
    transform: translateX(5px);
}
60% {
    transform: translateX(-5px);
}
70% {
    transform: translateX(-5px);
}
80% {
    transform: translateY(0);
}
90% {
    transform: translateY(0);
}
}@-ms-keyframes Neutral {
    0% {
    transform: translateY(0);
}
10% {
    transform: translateY(0);
}
30% {
    transform: translateX(5px);
}
40% {
    transform: translateX(5px);
}
60% {
    transform: translateX(-5px);
}
70% {
    transform: translateX(-5px);
}
80% {
    transform: translateY(0);
}
90% {
    transform: translateY(0);
}
}@-o-keyframes Neutral {
    0% {
    transform: translateY(0);
}
10% {
    transform: translateY(0);
}
30% {
    transform: translateX(5px);
}
40% {
    transform: translateX(5px);
}
60% {
    transform: translateX(-5px);
}
70% {
    transform: translateX(-5px);
}
80% {
    transform: translateY(0);
}
90% {
    transform: translateY(0);
}
}@keyframes Good {
    0% {
    transform: translateY(0);
}
10% {
    transform: translateY(0);
}
30% {
    transform: translateY(-7px);
}
40% {
    transform: translateY(5px);
}
80% {
    transform: translateY(0);
}
90% {
    transform: translateY(0);
}
}@-webkit-keyframes Good {
    0% {
    transform: translateY(0);
}
10% {
    transform: translateY(0);
}
30% {
    transform: translateY(-7px);
}
40% {
    transform: translateY(5px);
}
80% {
    transform: translateY(0);
}
90% {
    transform: translateY(0);
}
}@-moz-keyframes Good {
    0% {
    transform: translateY(0);
}
10% {
    transform: translateY(0);
}
30% {
    transform: translateY(-7px);
}
40% {
    transform: translateY(5px);
}
80% {
    transform: translateY(0);
}
90% {
    transform: translateY(0);
}
}@-ms-keyframes Good {
    0% {
    transform: translateY(0);
}
10% {
    transform: translateY(0);
}
30% {
    transform: translateY(-7px);
}
40% {
    transform: translateY(5px);
}
80% {
    transform: translateY(0);
}
90% {
    transform: translateY(0);
}
}@-o-keyframes Good {
    0% {
    transform: translateY(0);
}
10% {
    transform: translateY(0);
}
30% {
    transform: translateY(-7px);
}
40% {
    transform: translateY(5px);
}
80% {
    transform: translateY(0);
}
90% {
    transform: translateY(0);
}
}@keyframes Super {
    0% {
    transform: translateY(0);
}
10% {
    transform: translateY(0);
}
30% {
    transform: translateY(4px);
}
50% {
    transform: translateY(4px);
}
90% {
    transform: translateY(0);
}
}@-webkit-keyframes Super {
    0% {
    transform: translateY(0);
}
10% {
    transform: translateY(0);
}
30% {
    transform: translateY(4px);
}
50% {
    transform: translateY(4px);
}
90% {
    transform: translateY(0);
}
}@-moz-keyframes Super {
    0% {
    transform: translateY(0);
}
10% {
    transform: translateY(0);
}
30% {
    transform: translateY(4px);
}
50% {
    transform: translateY(4px);
}
90% {
    transform: translateY(0);
}
}@-ms-keyframes Super {
    0% {
    transform: translateY(0);
}
10% {
    transform: translateY(0);
}
30% {
    transform: translateY(4px);
}
50% {
    transform: translateY(4px);
}
90% {
    transform: translateY(0);
}
}@-o-keyframes Super {
    0% {
    transform: translateY(0);
}
10% {
    transform: translateY(0);
}
30% {
    transform: translateY(4px);
}
50% {
    transform: translateY(4px);
}
90% {
    transform: translateY(0);
    position: static;
}
}
