//teller element where instructions are made
const tellerTag = document.getElementsByTagName("teller")[0]
//Current rounding hour
var roundingHour = new Date().getHours();
//Predetermined language
var langSession = 'en';
//Color Palette
const almostBlack = '#0D1418';
const realWhite = '#FFFFFF';
const nebulaGrey = '#E8E8E8';
const realGrey = '#808080';
const charmingGrey = '#2A2F32';
const messengerBlue = '#0384FF';
const wspGreen = '#03D79C';
//Platform Buttons
const feedbackMainButton = '<svg id="buttonFeedbackBrick" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px"height="50px" viewBox="0 0 50 50" style="overflow:visible;enable-background:new 0 0 50 50;" xml:space="preserve"><rect class="transparentBG" width="50" height="50"/><circle id="feedbackIconShape" cx="25" cy="25" r="25"/><circle class="feedbackIconButton" cx="16" cy="19" r="1.9"/><circle class="feedbackIconButton" cx="34" cy="19" r="1.9"/><path class="feedbackIconButton" d="M31.9,26.8H18.1c-0.2,0-0.4,0.1-0.5,0.3c-0.1,0.2-0.2,0.4-0.1,0.6c0,0.1,1.3,5.3,7.6,5.3c6.5,0,7.6-5.2,7.6-5.3c0-0.2,0-0.4-0.1-0.6C32.3,26.9,32.1,26.8,31.9,26.8z"/></svg>'
const messengerMainButton = '<svg id="buttonMessengerBrick" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px"height="50px" viewBox="0 0 50 50" style="overflow:visible;enable-background:new 0 0 50 50;" xml:space="preserve"><rect class="transparentBG" width="50" height="50"/><path id="messengerIconShape" d="M24.6,0.4C11.4,0.4,0.6,11.3,0.8,24.5c0.1,6.7,2.9,12.7,7.4,17c0.5,0.5,0.8,1.2,0.8,1.9v4c0,1.5,1.6,2.6,3,1.9l4.4-2c0.6-0.3,1.2-0.3,1.8-0.1c2,0.6,4.2,0.9,6.4,0.9c13.1,0,23.9-10.7,23.9-23.8C48.4,11.1,37.7,0.4,24.6,0.4z"/><path id="messengerIconButton" d="M39.4,18.6l-7.1,11.2c-1.2,1.8-3.6,2.3-5.4,1.1l-2-1.4L21.4,27c-0.7-0.5-1.6-0.4-2.2,0.1l-7.1,5.8c-1.2,0.9-2.7-0.5-1.9-1.7l7.1-11.2c1.2-1.8,3.6-2.3,5.4-1.1l2.9,2.1l2.6,1.9c0.7,0.5,1.6,0.4,2.2-0.1l7.1-5.8C38.6,16,40.2,17.4,39.4,18.6z"/></svg>';
const wspMainButton = '<svg id="buttonWhatsappBrick" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px"height="50px" viewBox="0 0 50 50" style="overflow:visible;enable-background:new 0 0 50 50;" xml:space="preserve"><rect class="transparentBG" width="50" height="50"/><path id="whatsappIconShape" d="M25.3,0.7C12.2,0.7,1.5,11.4,1.5,24.5c0,4.5,1.3,8.9,3.6,12.6L5.7,38l-2.4,8.8l9-2.4l0.9,0.5c3.6,2.2,7.8,3.3,12.1,3.3h0c13.1,0,24-10.7,24-23.8c0-6.4-2.7-12.3-7.2-16.8C37.6,3.2,31.7,0.7,25.3,0.7L25.3,0.7z"/><path  id="whatsappIconButton" d="M39.3,34.7c-0.6,1.7-3.4,3.2-4.8,3.4c-2.3,0.3-4,0.2-8.6-1.8C18.7,33.2,14,26,13.7,25.5s-2.9-3.9-2.9-7.4s1.8-5.2,2.5-6c0.6-0.7,1.4-0.9,1.9-0.9c0.5,0,1,0,1.4,0c0.4,0,1-0.2,1.6,1.2c0.6,1.4,2,4.9,2.2,5.3c0.2,0.4,0.3,0.8,0.1,1.2c-1.4,2.7-2.8,2.6-2.1,3.9c2.8,4.7,5.5,6.4,9.7,8.5c0.7,0.4,1.1,0.3,1.5-0.2c0.4-0.5,1.8-2.1,2.3-2.8c0.5-0.7,1-0.6,1.6-0.4c0.6,0.2,4.2,2,4.9,2.3c0.7,0.4,1.2,0.5,1.4,0.8C39.9,31.6,39.9,33,39.3,34.7z"/></svg>';
const wspSendButtonIcon = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" style="overflow:visible;enable-background:new 0 0 50 50;" xml:space="preserve"><rect class="transparentBG" width="40" height="40"/><polygon id="wspSendButtonSVG" points="21.6,15.3 12.3,11 12.3,17.9 21.8,19.6 12.3,21.4 12.3,28.3 21.6,24 31,19.6 	"/></svg>'
const messengerSendButtonIcon = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="29px" height="29.8px" viewBox="0 0 29 29.8" style="overflow:visible;enable-background:new 0 0 29 29.8;" xml:space="preserve"><path id="messengerIconFull" d="M14.5,0C6.4,0-0.1,6.6,0,14.6c0,4.1,1.8,7.7,4.5,10.3C4.8,25.3,5,25.7,5,26.1v2.4c0,0.9,1,1.6,1.8,1.2l2.7-1.2c0.4-0.2,0.7-0.2,1.1-0.1c1.2,0.3,2.6,0.5,3.9,0.5c8,0,14.5-6.5,14.5-14.5C29,6.5,22.5,0,14.5,0z M23.5,11.1l-4.3,6.8c-0.7,1.1-2.2,1.4-3.3,0.6l-1.2-0.9l-2.1-1.5c-0.4-0.3-0.9-0.3-1.3,0l-4.3,3.5c-0.7,0.6-1.7-0.3-1.2-1l4.3-6.8c0.7-1.1,2.2-1.4,3.3-0.6l1.8,1.3l1.6,1.1c0.4,0.3,0.9,0.3,1.3,0l4.3-3.5C23,9.5,24,10.3,23.5,11.1z"/></svg>'
const tellerSmallA = '<b><a target="_blank" href="https://www.unirvana.com/teller">Teller<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="22px"	 height="14.6px" viewBox="0 0 22 14.6" style="overflow:visible;enable-background:new 0 0 22 14.6;" xml:space="preserve"><style type="text/css">	.stayPlane{fill:'+byTheme(charmingGrey,realWhite)+';}</style><defs></defs><path class="stayPlane" d="M5.1,6l14.5-5.9C19.9,0,20.1,0.3,20,0.5l-9.1,14c-0.1,0.2-0.5,0.1-0.5-0.1L10,7.5c0-0.1-0.1-0.2-0.2-0.3L5.2,6.5C4.9,6.5,4.9,6.1,5.1,6z"/><line class="transparentBG" x1="22" y1="0" x2="0" y2="0"/></svg></a></b>'
//Feedback URL variables
var ffu = "";//feedbackFormUrl
var entryA = "";//Emotion
var entryB = "";//Email
var entryC = "";//Message
var entryD = "";//Day
var entryE = "";//Date
var entryF = "";//Hour
var entryG = "";//Browser language
//Date data
var dayTeller = new Date().getDay()
var dateTeller = new Date().getDate()
var monthTeller = new Date().getMonth()
var yearTeller = new Date().getFullYear()
//Regex section
const regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexHourInterval = /^([0-1]?[0-9]|2?[0-3]|[0-9])[:\-\/]([0-1]?[0-9]|2?[0-3]|[0-9])$/;
const regexMsg = /^[\a-zA-Z\d\s:\u00C0-\u00FF.,¡!¿?]+$/;
//Elements specified
var tellerUseWsp = false;
var tellerUseFeedback = false;
var tellerUseMessenger = false;
var displayedMessenger = false;
var displayedWsp = false;
var displayedFeedback = false;
var displayedSharedComponents = false;

detectNativeLang();
detectBrowserLang();

































































//Styles sheet/Hoja de estilos
const styleSheetTeller = '<style>\
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;600&display=swap");\
teller {\
    position: fixed!important;\
    z-index: 100000;\
    left: 0;\
    bottom: 0!important;\
    background-color: transparent!important;\
}\
body{\
    background-color: pink;\
}\
.transparentBG{\
    fill:none !important;\
}\
#hoverBrick {\
    position: absolute!important;\
    bottom: 100px!important;\
    left: 30px!important;\
    transition:  .3s !important;\
    -webkit-transition:  .3s !important;\
    -moz-transition:  .3s !important;\
    -o-transition:  .3s !important;\
    border:  none!important;\
    border-radius: 7px;\
    opacity: 0;\
    width: 190px!important;\
    height: auto!important;\
    padding: 10px 70px 15px 15px;\
    text-align: left;\
    font-weight: 200!important;\
    font-size: small!important;\
    font-family: "Outfit", sans-serif;\
    color: '+  byTheme(charmingGrey,realWhite) +';\
    background-color: '+  byTheme(realWhite,charmingGrey) +'!important;\
}\
#hoverBrickClose {\
    position: absolute !important;\
    transition:  .3s !important;\
    -webkit-transition:  .3s !important;\
    -moz-transition:  .3s !important;\
    -o-transition:  .3s !important;\
    right: 10px;\
    top: 10px;\
    width: 20px;\
    height: 20px;\
    background-color: '+ byTheme(charmingGrey,realWhite) +';\
    border-radius: 3px !important;\
}\
#hoverBrickClose:hover {\
    opacity: .8;\
}\
\
\
\
\
#buttonFatherBrick {\
    opacity: 0;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    position: absolute!important;\
    background-color:'+  byTheme(realWhite,charmingGrey) +';\
    width: 50px;\
    height: 50px;\
    left: 30px;\
    bottom: 30px!important;\
    border-radius: 25px;\
    border: none!important;\
}\
\
\
\
\
#buttonsComplementsBrick{\
    z-index: 100000!important;\
    position:absolute;\
    left: 100px;\
    bottom: 30px;\
    background-color: '+  byTheme(realWhite,charmingGrey) +';\
    height: 50px;\
    width: 150px;\
    border-radius: 25px;\
}\
#buttonFeedbackBrick {\
    opacity: 1;\
    display: inline-block\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    background-color: transparent;\
    width: 35px;\
    height: 35px;\
    margin: 7px 7.5px 8px 7.5px;\
    border-radius: none !important;\
    border: none!important;\
}\
#feedbackIconShape{/* \
    stroke:rgba(0, 0, 0, 0.2);\
    stroke-width:.5;\
    stroke-miterlimit:10; */\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    fill:'+ byTheme(nebulaGrey,realGrey)+';\
}\
.feedbackIconButton{\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    fill:'+ byTheme(realWhite,charmingGrey)+';\
}\
#fatherBrick {\
    display: none;\
    opacity: 0;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    font-family: "Outfit", sans-serif;\
    position: absolute!important;\
    background-color:'+byTheme(realWhite,charmingGrey)+'!important;\
    width: 340px!important;\
    height: 200px;\
    left: 30px!important;\
    bottom: 100px!important;\
    border-radius: 10px;\
    transform: translateY(10px);\
}\
#xBrick {\
    opacity: 0;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;    \
    fill: '+  byTheme(charmingGrey,realWhite) +'!important;\
    transform: translateX(30px) scaleX(0);\
}\
#palomita {\
    opacity: 1;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;    \
    fill: '+  byTheme(charmingGrey,realWhite) +'!important;\
    transform: translateX(0px) scaleX(1);\
}\
.questBrick {\
    opacity: 1;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    fill: #cecece;\
}\
#titleBrick {\
    font-weight: 200;\
    color:'+byTheme(almostBlack,realWhite)+'!important;\
    opacity: 1;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    position: absolute!important;\
    background-color: transparent!important;\
    width: 300px!important;\
    height: auto!important;\
    left: 20px!important;\
    top: 10px!important;\
    text-align: center!important;\
}\
#emojisBrick {\
    opacity: 1;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    position: absolute!important;\
    background-color: transparent!important;\
    width: 300px!important;\
    height: 80px!important;\
    left: 20px!important;\
    top: 60px;\
    text-align: center!important;\
}\
#emojiSelectorBrick {\
    opacity: 0;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    position: absolute!important;\
    background-color: #eaeaeb!important;\
    width: 10px!important;\
    height: 10px!important;\
    left: 25px;\
    transform: rotate(45deg)!important;\
    bottom: -7px!important;\
    text-align: center!important;\
}\
#emojiBrick1 {\
    opacity: 1;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    position: absolute!important;\
    background-color: transparent!important;\
    width: 60px!important;\
    height: 80px!important;\
    left: 0!important;\
    top: 0!important;\
    text-align: center!important;\
    cursor: pointer!important;\
}\
#emojiBrick1:hover>#emojiDescriptionBrick1 {\
    opacity: 1!important;\
}\
#emojiBrick2 {\
    opacity: 1;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    position: absolute!important;\
    background-color: transparent!important;\
    width: 60px!important;\
    height: 80px!important;\
    left: 60px!important;\
    top: 0!important;\
    text-align: center!important;\
    cursor: pointer!important;\
}\
#emojiBrick2:hover>#emojiDescriptionBrick2 {\
    opacity: 1!important;\
}\
#emojiBrick3 {\
    opacity: 1;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    position: absolute!important;\
    background-color: transparent!important;\
    width: 60px!important;\
    height: 80px!important;\
    left: 120px!important;\
    top: 0!important;\
    text-align: center!important;\
    cursor: pointer!important;\
}\
#emojiBrick3:hover>#emojiDescriptionBrick3 {\
    opacity: 1!important;\
}\
#emojiBrick4 {\
    opacity: 1;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    position: absolute!important;\
    background-color: transparent!important;\
    width: 60px!important;\
    height: 80px!important;\
    left: 180px!important;\
    top: 0!important;\
    text-align: center!important;\
    cursor: pointer!important;\
}\
#emojiBrick4:hover>#emojiDescriptionBrick4 {\
    opacity: 1!important;\
}\
#emojiBrick5 {\
    opacity: 1;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    position: absolute!important;\
    background-color: transparent!important;\
    width: 60px!important;\
    height: 80px!important;\
    left: 240px!important;\
    top: 0!important;\
    text-align: center!important;\
    cursor: pointer!important;\
}\
#emojiBrick5:hover>#emojiDescriptionBrick5 {\
    opacity: 1!important;\
}\
#emojiFaceBrick1 {\
    opacity: 1!important;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    position: absolute!important;\
    background-color: '+ byTheme(charmingGrey,nebulaGrey) +';\
    width: 40px!important;\
    height: 40px!important;\
    border-radius: 25px;\
    left: 10px!important;\
    top: 10px!important;\
    cursor: pointer!important;\
}\
#emojiFaceBrick2 {\
    opacity: 1!important;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    position: absolute!important;\
    background-color: '+ byTheme(charmingGrey,nebulaGrey) +';\
    width: 40px!important;\
    height: 40px!important;\
    border-radius: 25px;\
    left: 10px!important;\
    top: 10px!important;\
    cursor: pointer!important;\
}\
#emojiFaceBrick3 {\
    opacity: 1!important;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    position: absolute!important;\
    background-color: '+ byTheme(charmingGrey,nebulaGrey) +';\
    width: 40px!important;\
    height: 40px!important;\
    border-radius: 25px;\
    left: 10px!important;\
    top: 10px!important;\
    cursor: pointer!important;\
}\
#emojiFaceBrick4 {\
    opacity: 1!important;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    position: absolute!important;\
    background-color: '+ byTheme(charmingGrey,nebulaGrey) +';\
    width: 40px!important;\
    height: 40px!important;\
    border-radius: 25px;\
    left: 10px!important;\
    top: 10px!important;\
    cursor: pointer!important;\
}\
#emojiFaceBrick5 {\
    opacity: 1!important;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    position: absolute!important;\
    background-color: '+ byTheme(charmingGrey,nebulaGrey) +';\
    width: 40px!important;\
    height: 40px!important;\
    border-radius: 25px;\
    left: 10px!important;\
    top: 10px!important;\
    cursor: pointer!important;\
}\
#SuperFaceTeller {\
    opacity: 1;\
    animation-name: Super!important;\
    animation-direction: normal!important;\
    animation-play-state: paused;\
    animation-duration: 2s!important;\
    animation-timing-function: ease-all!important;\
    animation-iteration-count: infinite!important;\
    cursor: pointer!important;\
}\
#GoodFaceTeller {\
    opacity: 1;\
    animation-name: Good!important;\
    animation-direction: normal!important;\
    animation-play-state: paused;\
    animation-duration: 2s!important;\
    animation-timing-function: ease-all!important;\
    animation-iteration-count: infinite!important;\
    cursor: pointer!important;\
}\
#NeutralFaceTeller {\
    opacity: 1;\
    animation-name: Neutral!important;\
    animation-direction: normal!important;\
    animation-play-state: paused;\
    animation-duration: 2s!important;\
    animation-timing-function: ease-all!important;\
    animation-iteration-count: infinite!important;\
    cursor: pointer!important;\
}\
#BadFaceTeller {\
    opacity: 1;\
    animation-name: Bad!important;\
    animation-direction: normal!important;\
    animation-play-state: paused;\
    animation-duration: 2s!important;\
    animation-timing-function: ease-all!important;\
    animation-iteration-count: infinite!important;\
    cursor: pointer!important;\
}\
#FuriousFaceTeller {\
    opacity: 1;\
    animation-name: Furious!important;\
    animation-direction: normal!important;\
    animation-play-state: paused;\
    animation-duration: 2s!important;\
    animation-timing-function: ease-all!important;\
    animation-iteration-count: infinite!important;\
    cursor: pointer!important;\
}\
.tellersFace {\
    fill: none!important;\
}\
.tellersGesture {\
    fill: '+byTheme(realWhite,almostBlack)+'!important;\
}\
#emojiDescriptionBrick1 {\
    color:'+byTheme(almostBlack,realWhite)+'!important;\
    opacity: 0;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    font-size: small!important;\
    position: absolute!important;\
    background-color: transparent!important;\
    width: 60px!important;\
    height: 20px!important;\
    left: 0!important;\
    bottom: 0!important;\
    text-align: center!important;\
    cursor: pointer!important;\
}\
#emojiDescriptionBrick2 {\
    color:'+byTheme(almostBlack,realWhite)+'!important;\
    opacity: 0;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    font-size: small!important;\
    position: absolute!important;\
    background-color: transparent!important;\
    width: 60px!important;\
    height: 20px!important;\
    left: 0!important;\
    bottom: 0!important;\
    text-align: center!important;\
    cursor: pointer!important;\
}\
#emojiDescriptionBrick3 {\
    color:'+byTheme(almostBlack,realWhite)+'!important;\
    opacity: 0;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    font-size: small!important;\
    position: absolute!important;\
    background-color: transparent!important;\
    width: 60px!important;\
    height: 20px!important;\
    left: 0!important;\
    bottom: 0!important;\
    text-align: center!important;\
    cursor: pointer!important;\
}\
#emojiDescriptionBrick4 {\
    color:'+byTheme(almostBlack,realWhite)+'!important;\
    opacity: 0;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    font-size: small!important;\
    position: absolute!important;\
    background-color: transparent!important;\
    width: 60px!important;\
    height: 20px!important;\
    left: 0!important;\
    bottom: 0!important;\
    text-align: center!important;\
    cursor: pointer!important;\
}\
#emojiDescriptionBrick5 {\
    color:'+byTheme(almostBlack,realWhite)+'!important;\
    opacity: 0;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    font-size: small!important;\
    position: absolute!important;\
    width: 60px!important;\
    height: 20px!important;\
    left: 0!important;\
    bottom: 0!important;\
    text-align: center!important;\
    cursor: pointer!important;\
}\
#textAreasBrick {\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
     -o-transition: .3s!important;\
    display: none;\
    opacity: 0;\
    display: none;\
    position: absolute!important;\
    background-color: #eaeaeb!important;\
    width: 340px!important;\
    height: 110px!important;\
    left: 0!important;\
    top: 100px!important;\
    text-align: center!important;\
}\
\
#textAreaBrick {\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
     -o-transition: .3s!important;\
    color: #333!important;\
    resize: none!important;\
    font-family: "Outfit", sans-serif;\
    font-size: medium!important;\
    outline: 0!important;\
    box-shadow: none!important;\
    border: none!important;\
    position: absolute!important;\
    background-color: transparent!important;\
    width: 300px!important;\
    height: 90px!important;\
    left: 20px!important;\
    top: 10px!important;\
    text-align: left!important;\
}\
\
#inputAreasBrick {\
    display: none;\
    opacity: 0;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    position: absolute!important;\
    background-color: #eaeaeb!important;\
    width: 340px!important;\
    height: 50px!important;\
    left: 0!important;\
    top: 90px!important;\
    text-align: center!important;\
}\
#inputAreaBrick {\
    color: #333!important;\
    opacity: 1;\
    resize: none!important;\
    font-family: "Outfit", sans-serif;\
    font-size: medium!important;\
    outline: 0!important;\
    box-shadow: none!important;\
    border: none!important;\
    position: absolute!important;\
    background-color: transparent!important;\
    width: 300px!important;\
    height: 30px!important;\
    left: 20px!important;\
    top: 10px!important;\
    text-align: center!important;\
}\
#actionButtonBrick {\
    display: none;\
    opacity: 0;\
    position: absolute!important;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    bottom: 10px;\
    right: 20px!important;\
    border-radius: 5px;\
    background-color: '+nebulaGrey+';\
    width: 60px!important;\
    height: 25px!important;\
    font-size: small!important;\
    text-align: center!important;\
    padding-top: 7px!important;\
    color: '+realWhite+';\
    cursor: pointer!important;\
}\
#actionButtonBrick:hover {\
    opacity: .7!important;\
}\
#skipButtonBrick {\
    display: none;\
    opacity: 0;\
    position: absolute!important;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    bottom: 20px!important;\
    right: 80px!important;\
    border-radius: 5px;\
    background-color: transparent!important;\
    width: 60px!important;\
    height: 25px!important;\
    font-size: small!important;\
    text-align: center!important;\
    padding-top: 7px!important;\
    color: '+byTheme(charmingGrey,realWhite)+'!important;\
    cursor: pointer!important;\
    text-decoration: underline!important;\
}\
#paragraphBrick {\
    color:'+byTheme(almostBlack,realWhite)+'!important;\;\
    text-align: right;\
    opacity: 1;\
    position: absolute!important;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    bottom: 10px!important;\
    right: 20px!important;\
    border-radius: 5px;\
    background-color: transparent!important;\
    width: 300px!important;\
    height: 25px!important;\
    font-size: x-small!important;\
    padding-top: 7px!important;\
    cursor: pointer!important;\
}\
#paragraphBrick a {\
    text-decoration: none !important;\
    color:'+byTheme(almostBlack,realWhite)+'!important;\
    font-weight: 600;\
    font-size: x-small;\
}\
#paragraphBrick a svg {\
    transform: scale(.5) !important;\
}\
#notificationParagraphBrick {\
    display: none;\
    opacity: 0;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    font-size: small!important;\
    position: absolute!important;\
    background-color: transparent!important;\
    width: 300px!important;\
    height: 10px!important;\
    left: 20px!important;\
    bottom: 60px!important;\
    text-align: center!important;\
    color:'+byTheme(charmingGrey,realWhite)+'!important;\
}\
@keyframes Furious {\
    0% {\
    transform: translateX(0) translateY(0);\
}\
10% {\
    transform: translateX(0) translateY(0);\
}\
15% {\
    transform: translateX(4px) translateY(-3px);\
}\
20% {\
    transform: translateX(-4px) translateY(-3px);\
}\
25% {\
    transform: translateX(4px) translateY(-3px);\
}\
30% {\
    transform: translateX(-4px) translateY(-3px);\
}\
35% {\
    transform: translateX(4px) translateY(-3px);\
}\
40% {\
    transform: translateX(-4px) translateY(-3px);\
}\
45% {\
    transform: translateX(0) translateY(-3px);\
}\
90% {\
    transform: translateX(0) translateY(0);\
}\
}@-webkit-keyframes Furious {\
    0% {\
    transform: translateX(0) translateY(0);\
}\
10% {\
    transform: translateX(0) translateY(0);\
}\
15% {\
    transform: translateX(4px) translateY(-3px);\
}\
20% {\
    transform: translateX(-4px) translateY(-3px);\
}\
25% {\
    transform: translateX(4px) translateY(-3px);\
}\
30% {\
    transform: translateX(-4px) translateY(-3px);\
}\
35% {\
    transform: translateX(4px) translateY(-3px);\
}\
40% {\
    transform: translateX(-4px) translateY(-3px);\
}\
45% {\
    transform: translateX(0) translateY(-3px);\
}\
90% {\
    transform: translateX(0) translateY(0);\
}\
}@-moz-keyframes Furious {\
    0% {\
    transform: translateX(0) translateY(0);\
}\
10% {\
    transform: translateX(0) translateY(0);\
}\
15% {\
    transform: translateX(4px) translateY(-3px);\
}\
20% {\
    transform: translateX(-4px) translateY(-3px);\
}\
25% {\
    transform: translateX(4px) translateY(-3px);\
}\
30% {\
    transform: translateX(-4px) translateY(-3px);\
}\
35% {\
    transform: translateX(4px) translateY(-3px);\
}\
40% {\
    transform: translateX(-4px) translateY(-3px);\
}\
45% {\
    transform: translateX(0) translateY(-3px);\
}\
90% {\
    transform: translateX(0) translateY(0);\
}\
}@-ms-keyframes Furious {\
    0% {\
    transform: translateX(0) translateY(0);\
}\
10% {\
    transform: translateX(0) translateY(0);\
}\
15% {\
    transform: translateX(4px) translateY(-3px);\
}\
20% {\
    transform: translateX(-4px) translateY(-3px);\
}\
25% {\
    transform: translateX(4px) translateY(-3px);\
}\
30% {\
    transform: translateX(-4px) translateY(-3px);\
}\
35% {\
    transform: translateX(4px) translateY(-3px);\
}\
40% {\
    transform: translateX(-4px) translateY(-3px);\
}\
45% {\
    transform: translateX(0) translateY(-3px);\
}\
90% {\
    transform: translateX(0) translateY(0);\
}\
}@-o-keyframes Furious {\
    0% {\
    transform: translateX(0) translateY(0);\
}\
10% {\
    transform: translateX(0) translateY(0);\
}\
15% {\
    transform: translateX(4px) translateY(-3px);\
}\
20% {\
    transform: translateX(-4px) translateY(-3px);\
}\
25% {\
    transform: translateX(4px) translateY(-3px);\
}\
30% {\
    transform: translateX(-4px) translateY(-3px);\
}\
35% {\
    transform: translateX(4px) translateY(-3px);\
}\
40% {\
    transform: translateX(-4px) translateY(-3px);\
}\
45% {\
    transform: translateX(0) translateY(-3px);\
}\
90% {\
    transform: translateX(0) translateY(0);\
}\
}@keyframes Bad {\
    0% {\
    transform: translateX(0);\
}\
10% {\
    transform: translateX(0);\
}\
20% {\
    transform: translateX(4px);\
}\
30% {\
    transform: translateX(-4px);\
}\
40% {\
    transform: translateX(4px);\
}\
50% {\
    transform: translateX(-4px);\
}\
60% {\
    transform: translateX(4px);\
}\
70% {\
    transform: translateX(-4px);\
}\
80% {\
    transform: translateX(0);\
}\
90% {\
    transform: translateX(0);\
}\
}@-webkit-keyframes Bad {\
    0% {\
    transform: translateX(0);\
}\
10% {\
    transform: translateX(0);\
}\
20% {\
    transform: translateX(4px);\
}\
30% {\
    transform: translateX(-4px);\
}\
40% {\
    transform: translateX(4px);\
}\
50% {\
    transform: translateX(-4px);\
}\
60% {\
    transform: translateX(4px);\
}\
70% {\
    transform: translateX(-4px);\
}\
80% {\
    transform: translateX(0);\
}\
90% {\
    transform: translateX(0);\
}\
}@-moz-keyframes Bad {\
    0% {\
    transform: translateX(0);\
}\
10% {\
    transform: translateX(0);\
}\
20% {\
    transform: translateX(4px);\
}\
30% {\
    transform: translateX(-4px);\
}\
40% {\
    transform: translateX(4px);\
}\
50% {\
    transform: translateX(-4px);\
}\
60% {\
    transform: translateX(4px);\
}\
70% {\
    transform: translateX(-4px);\
}\
80% {\
    transform: translateX(0);\
}\
90% {\
    transform: translateX(0);\
}\
}@-ms-keyframes Bad {\
    0% {\
    transform: translateX(0);\
}\
10% {\
    transform: translateX(0);\
}\
20% {\
    transform: translateX(4px);\
}\
30% {\
    transform: translateX(-4px);\
}\
40% {\
    transform: translateX(4px);\
}\
50% {\
    transform: translateX(-4px);\
}\
60% {\
    transform: translateX(4px);\
}\
70% {\
    transform: translateX(-4px);\
}\
80% {\
    transform: translateX(0);\
}\
90% {\
    transform: translateX(0);\
}\
}@-o-keyframes Bad {\
    0% {\
    transform: translateX(0);\
}\
10% {\
    transform: translateX(0);\
}\
20% {\
    transform: translateX(4px);\
}\
30% {\
    transform: translateX(-4px);\
}\
40% {\
    transform: translateX(4px);\
}\
50% {\
    transform: translateX(-4px);\
}\
60% {\
    transform: translateX(4px);\
}\
70% {\
    transform: translateX(-4px);\
}\
80% {\
    transform: translateX(0);\
}\
90% {\
    transform: translateX(0);\
}\
}@keyframes Neutral {\
    0% {\
    transform: translateY(0);\
}\
10% {\
    transform: translateY(0);\
}\
30% {\
    transform: translateX(5px);\
}\
40% {\
    transform: translateX(5px);\
}\
60% {\
    transform: translateX(-5px);\
}\
70% {\
    transform: translateX(-5px);\
}\
80% {\
    transform: translateY(0);\
}\
90% {\
    transform: translateY(0);\
}\
}@-webkit-keyframes Neutral {\
    0% {\
    transform: translateY(0);\
}\
10% {\
    transform: translateY(0);\
}\
30% {\
    transform: translateX(5px);\
}\
40% {\
    transform: translateX(5px);\
}\
60% {\
    transform: translateX(-5px);\
}\
70% {\
    transform: translateX(-5px);\
}\
80% {\
    transform: translateY(0);\
}\
90% {\
    transform: translateY(0);\
}\
}@-moz-keyframes Neutral {\
    0% {\
    transform: translateY(0);\
}\
10% {\
    transform: translateY(0);\
}\
30% {\
    transform: translateX(5px);\
}\
40% {\
    transform: translateX(5px);\
}\
60% {\
    transform: translateX(-5px);\
}\
70% {\
    transform: translateX(-5px);\
}\
80% {\
    transform: translateY(0);\
}\
90% {\
    transform: translateY(0);\
}\
}@-ms-keyframes Neutral {\
    0% {\
    transform: translateY(0);\
}\
10% {\
    transform: translateY(0);\
}\
30% {\
    transform: translateX(5px);\
}\
40% {\
    transform: translateX(5px);\
}\
60% {\
    transform: translateX(-5px);\
}\
70% {\
    transform: translateX(-5px);\
}\
80% {\
    transform: translateY(0);\
}\
90% {\
    transform: translateY(0);\
}\
}@-o-keyframes Neutral {\
    0% {\
    transform: translateY(0);\
}\
10% {\
    transform: translateY(0);\
}\
30% {\
    transform: translateX(5px);\
}\
40% {\
    transform: translateX(5px);\
}\
60% {\
    transform: translateX(-5px);\
}\
70% {\
    transform: translateX(-5px);\
}\
80% {\
    transform: translateY(0);\
}\
90% {\
    transform: translateY(0);\
}\
}@keyframes Good {\
    0% {\
    transform: translateY(0);\
}\
10% {\
    transform: translateY(0);\
}\
30% {\
    transform: translateY(-7px);\
}\
40% {\
    transform: translateY(5px);\
}\
80% {\
    transform: translateY(0);\
}\
90% {\
    transform: translateY(0);\
}\
}@-webkit-keyframes Good {\
    0% {\
    transform: translateY(0);\
}\
10% {\
    transform: translateY(0);\
}\
30% {\
    transform: translateY(-7px);\
}\
40% {\
    transform: translateY(5px);\
}\
80% {\
    transform: translateY(0);\
}\
90% {\
    transform: translateY(0);\
}\
}@-moz-keyframes Good {\
    0% {\
    transform: translateY(0);\
}\
10% {\
    transform: translateY(0);\
}\
30% {\
    transform: translateY(-7px);\
}\
40% {\
    transform: translateY(5px);\
}\
80% {\
    transform: translateY(0);\
}\
90% {\
    transform: translateY(0);\
}\
}@-ms-keyframes Good {\
    0% {\
    transform: translateY(0);\
}\
10% {\
    transform: translateY(0);\
}\
30% {\
    transform: translateY(-7px);\
}\
40% {\
    transform: translateY(5px);\
}\
80% {\
    transform: translateY(0);\
}\
90% {\
    transform: translateY(0);\
}\
}@-o-keyframes Good {\
    0% {\
    transform: translateY(0);\
}\
10% {\
    transform: translateY(0);\
}\
30% {\
    transform: translateY(-7px);\
}\
40% {\
    transform: translateY(5px);\
}\
80% {\
    transform: translateY(0);\
}\
90% {\
    transform: translateY(0);\
}\
}@keyframes Super {\
    0% {\
    transform: translateY(0);\
}\
10% {\
    transform: translateY(0);\
}\
30% {\
    transform: translateY(4px);\
}\
50% {\
    transform: translateY(4px);\
}\
90% {\
    transform: translateY(0);\
}\
}@-webkit-keyframes Super {\
    0% {\
    transform: translateY(0);\
}\
10% {\
    transform: translateY(0);\
}\
30% {\
    transform: translateY(4px);\
}\
50% {\
    transform: translateY(4px);\
}\
90% {\
    transform: translateY(0);\
}\
}@-moz-keyframes Super {\
    0% {\
    transform: translateY(0);\
}\
10% {\
    transform: translateY(0);\
}\
30% {\
    transform: translateY(4px);\
}\
50% {\
    transform: translateY(4px);\
}\
90% {\
    transform: translateY(0);\
}\
}@-ms-keyframes Super {\
    0% {\
    transform: translateY(0);\
}\
10% {\
    transform: translateY(0);\
}\
30% {\
    transform: translateY(4px);\
}\
50% {\
    transform: translateY(4px);\
}\
90% {\
    transform: translateY(0);\
}\
}@-o-keyframes Super {\
    0% {\
    transform: translateY(0);\
}\
10% {\
    transform: translateY(0);\
}\
30% {\
    transform: translateY(4px);\
}\
50% {\
    transform: translateY(4px);\
}\
90% {\
    transform: translateY(0);\
}\
}\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
#sharedComponentsArea{\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    display: none;\
    opacity: 0;\
}\
#imagenPerfilOperator{\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    position: absolute;\
    left: 20px;\
    top: 20px;\
    z-index: 1000000000;\
    width: 55px;\
    height: 55px;\
    border-radius: 30px;\
    background-color: white;\
}\
#operatorBrick{\
    color: '+byTheme(charmingGrey,realWhite)+'!important;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    font-size: large;\
    padding: 10px;\
    z-index: 10000;\
    position: absolute;\
    left: 80px;\
    top: 15px;\
}\
#stateBrick{\
    color: '+byTheme(charmingGrey,realWhite)+'!important;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    font-size: small;\
    font-weight: 200;\
    padding: 10px;\
    z-index: 10000;\
    position: absolute;\
    left: 80px;\
    top: 40px;\
}\
#platformBoxBrick{\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    position: absolute;\
    background-color: #f2f2f2;\
    left: 0;\
    bottom: 0;\
    width: 340px;\
    height: 0px;\
    border-radius: 0px 0px 10px 10px;\
}\
#bubbleWelcome{\
    position: absolute;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    padding: 10px;\
    z-index: 1000;\
    left: 10px;\
    top: 20px;\
    color: '+byTheme(charmingGrey,realWhite)+'!important;\
    background-color:'+byTheme(realWhite,charmingGrey)+'!important;\;\
    max-width: 200px;\
    max-height: 60px;\
    border-radius: 5px;\
    font-weight: 300;\
}\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
#buttonWhatsappBrick {\
    opacity: 1;\
    display: inline-block\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    background-color: transparent;\
    width: 35px;\
    height: 35px;\
    margin: 7px 7.5px 8px 7.5px;\
    border-radius: none !important;\
    border: none!important;\
}\
#whatsappIconShape{/* \
    stroke:rgba(0, 0, 0, 0.2);\
    stroke-width:.5;\
    stroke-miterlimit:10; */\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    fill:'+ byTheme(nebulaGrey,realGrey)+';\
}\
#whatsappIconButton{\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    fill:'+ byTheme(realWhite,charmingGrey)+';\
}\
#whatsappArea {\
    display: none;\
    opacity: 1;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
     -o-transition: .3s!important;\
}\
\
#textAreaWsp {\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
     -o-transition: .3s!important;\
    color: '+byTheme(charmingGrey,realWhite)+'!important;\
    opacity: 1;\
    resize: none!important;\
    font-family: "Outfit", sans-serif;\
    font-size: medium!important;\
    outline: 0!important;\
    box-shadow: none!important;\
    border: none!important;\
    position: absolute!important;\
    background-color: transparent!important;\
    width: 220px!important;\
    height: 20px!important;\
    left: 20px!important;\
    bottom: 27px!important;\
    text-align: left!important;\
}\
#wspSendButtonBrick{\
    display: block;\
    opacity: 1;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    z-index: 200000000000000;\
    cursor: pointer;\
    position: absolute;\
    width: 40px;\
    height: 40px;\
    bottom: 15px;\
    right: 20px;\
    background-color: #03d79c;\
    border-radius: 25px;\
    color: white;\
    text-align: center;\
    text-decoration: none;\
}\
#wspSendButtonSVG{\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    fill:#fff\
}\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
#buttonMessengerBrick {\
    opacity: 1;\
    display: inline-block\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    background-color: transparent;\
    width: 35px;\
    height: 35px;\
    margin: 7px 7.5px 8px 7.5px;\
    border-radius: none !important;\
    border: none!important;\
}\
#messengerIconShape{/* \
    stroke:rgba(0, 0, 0, 0.2);\
    stroke-width:.5;\
    stroke-miterlimit:10; */\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    fill:'+ byTheme(nebulaGrey,realGrey)+';\
}\
#messengerIconButton{\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    fill:'+ byTheme(realWhite,charmingGrey)+';\
}\
#messengerArea{\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    display: none;\
    opacity: 0;\
}\
#messengerSendButtonBrick{\
    display: block;\
    opacity: 1;\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    cursor: pointer;\
    position: absolute;\
    width: 320px;\
    height: 50px;\
    bottom: 10px;\
    left: 10px;\
    background-color: #0384ff;\
    border-radius: 5px;\
    color: white;\
    text-align: center;\
    text-decoration: none;\
}\
#messengerSendButtonBrick svg{\
    transform: translate(10px, 10px);\
}\
#messengerIconFull{\
    transition: .3s!important;\
    -webkit-transition: .3s!important;\
    -moz-transition: .3s!important;\
    -o-transition: .3s!important;\
    fill: white;\
}</style>'


















































































//Teller full element
var ballonTellerBrick = '\
<brick id="hoverBrick">' + byLanguage("Share your user experience with us or send us a message.","Comparte tu experiencia con nosotros o envíanos un mensaje.") + '\
    <brick id="hoverBrickClose"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px"height="20px" viewBox="0 0 20 20" style="overflow:visible;enable-background:new 0 0 20 20;" xml:space="preserve"><style type="text/css">.backgroundXCloseAlert{fill:none;}.xCloseAlert{fill:'+  byTheme(realWhite,charmingGrey) +';}</style><circle class="backgroundXCloseAlert" cx="10" cy="10" r="10"/><path class="xCloseAlert" d="M11.6,9.9L14,7.4c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-2.4,2.4L7.7,6c-0.4-0.4-1-0.4-1.4,0	c-0.4,0.4-0.4,1,0,1.4l2.4,2.4l-2.4,2.4c-0.4,0.4-0.4,1,0,1.4C6.5,13.9,6.7,14,7,14c0.3,0,0.5-0.1,0.7-0.3l2.4-2.4l2.4,2.4	c0.2,0.2,0.5,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L11.6,9.9z"/></svg></brick>\
</brick> \
\
<brick id="buttonFatherBrick">\
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" ><circle class="tellersFace" cx="15" cy="15" r="15"/><path id="palomita" d="M7.2,13.9l14.2-5.8c0.2-0.1,0.5,0.2,0.3,0.4l-8.9,13.6c-0.1,0.2-0.5,0.1-0.5-0.1L12,15.3c0-0.1-0.1-0.2-0.2-0.2l-4.5-0.6C7,14.4,7,14,7.2,13.9z"/><path id="xBrick" d="M17.3,14.8l3.7-3.7c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.5-0.6-2.1,0l-3.7,3.7L11.6,9C11,8.4,10,8.4,9.4,9c-0.6,0.6-0.6,1.5,0,2.1l3.7,3.7l-3.7,3.7c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4c0.4,0,0.8-0.1,1.1-0.4l3.7-3.7l3.7,3.7c0.3,0.3,0.7,0.4,1.1,0.4c0.4,0,0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L17.3,14.8z"/></svg>\
</brick> \
\
<brick id="buttonsComplementsBrick">\
'+ buttonFeedbackComposer() +'\
'+ buttonWspComposer() +'\
'+ buttonMessengerComposer() +'\
</brick> \
\
<brick id="fatherBrick">\
\
    <brick id="mainNotificationBrick">\
        <brick id="titleBrick">' + byLanguage("How would you describe your experience?","Califique su experiencia.") + '</brick>\
        <brick id="paragraphBrick">' + byLanguage('Powered by '+ tellerSmallA,'Con el poder de '+ tellerSmallA) + '</brick>\
    </brick>\
    \
    <brick id="feedbackBrick">\
        <brick id="emojisBrick">\
            <brick id="emojiBrick1">\
                <brick id="emojiFaceBrick1"><svg id="SuperFaceTeller" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs></defs><g><circle class="tellersFace" cx="20" cy="20" r="20"/><g><path class="tellersGesture" d="M27.17,13.58a1.51,1.51,0,1,0,1.51,1.51A1.52,1.52,0,0,0,27.17,13.58Z"/><path class="tellersGesture" d="M14.34,15.09a1.51,1.51,0,1,0-1.51,1.51A1.52,1.52,0,0,0,14.34,15.09Z"/><path class="tellersGesture" d="M25.5,20.89h-11a1,1,0,0,0-.79.37,1,1,0,0,0-.19.85A6.32,6.32,0,0,0,20,26.66c4.44,0,6.18-3,6.49-4.58a1,1,0,0,0-.21-.83A1,1,0,0,0,25.5,20.89Z"/></g></g></svg></brick>\
                <brick id="emojiDescriptionBrick1">Super</brick>\
            </brick>\
            <brick id="emojiBrick2">\
                    <brick id="emojiFaceBrick2"><svg id="GoodFaceTeller" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs></defs><g><circle class="tellersFace" cx="20" cy="20" r="20"/><g><path class="tellersGesture" d="M27.17,13.58a1.51,1.51,0,1,0,1.51,1.51A1.52,1.52,0,0,0,27.17,13.58Z"/><path class="tellersGesture" d="M14.34,15.09a1.51,1.51,0,1,0-1.51,1.51A1.52,1.52,0,0,0,14.34,15.09Z"/><path class="tellersGesture" d="M25,20.71a8.54,8.54,0,0,1-5,1.34,8.47,8.47,0,0,1-5-1.34,1,1,0,1,0-1.28,1.53A10.17,10.17,0,0,0,20,24.05a10.17,10.17,0,0,0,6.3-1.81A1,1,0,1,0,25,20.71Z"/></g></g></svg></brick>\
                    <brick id="emojiDescriptionBrick2">' + byLanguage("Good","Buena") + '</brick>\
            </brick>\
            <brick id="emojiBrick3">\
                    <brick id="emojiFaceBrick3"><svg id="NeutralFaceTeller" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs></defs><g><circle class="tellersFace" cx="20" cy="20" r="20"/><g><path class="tellersGesture" d="M27.17,13.58a1.51,1.51,0,1,0,1.51,1.51A1.52,1.52,0,0,0,27.17,13.58Z"/><path class="tellersGesture" d="M12.83,13.58a1.51,1.51,0,1,0,1.51,1.51A1.52,1.52,0,0,0,12.83,13.58Z"/><path class="tellersGesture" d="M23.47,22.4H16.53a1,1,0,0,0,0,2h6.94a1,1,0,0,0,0-2Z"/></g></g></svg></brick>\
                    <brick id="emojiDescriptionBrick3">Neutral</brick>\
            </brick>\
            <brick id="emojiBrick4">\
                    <brick id="emojiFaceBrick4"><svg id="BadFaceTeller" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs></defs><g><circle class="tellersFace" cx="20" cy="20" r="20"/><g><path class="tellersGesture" d="M27.17,13.58a1.51,1.51,0,1,0,1.51,1.51A1.52,1.52,0,0,0,27.17,13.58Z"/><path class="tellersGesture" d="M14.34,15.09a1.51,1.51,0,1,0-1.51,1.51A1.52,1.52,0,0,0,14.34,15.09Z"/><path class="tellersGesture" d="M20,20.47a10.18,10.18,0,0,0-6.3,1.82A1,1,0,1,0,15,23.82a8.46,8.46,0,0,1,5-1.35,8.46,8.46,0,0,1,5,1.35,1,1,0,0,0,.64.23,1,1,0,0,0,.64-1.76A10.18,10.18,0,0,0,20,20.47Z"/></g></g></svg></brick>\
                    <brick id="emojiDescriptionBrick4">' + byLanguage("Bad","Mala") + '</brick>\
            </brick>\
            <brick id="emojiBrick5">\
                    <brick id="emojiFaceBrick5"><svg id="FuriousFaceTeller" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs></defs><g><circle class="tellersFace" cx="20" cy="20" r="20"/><g><path class="tellersGesture" d="M27.17,13.58a1.51,1.51,0,1,0,1.51,1.51A1.52,1.52,0,0,0,27.17,13.58Z"/><path class="tellersGesture" d="M14.34,15.09a1.51,1.51,0,1,0-1.51,1.51A1.52,1.52,0,0,0,14.34,15.09Z"/><path class="tellersGesture" d="M20,20.13c-4.44,0-6.18,3-6.49,4.59a1,1,0,0,0,.21.82,1,1,0,0,0,.78.37h11a1,1,0,0,0,.79-.38,1,1,0,0,0,.19-.84A6.32,6.32,0,0,0,20,20.13Z"/></g></g></svg></brick>\
                    <brick id="emojiDescriptionBrick5">' + byLanguage("Furious","Furiosa") + '</brick>\
            </brick>\
            <brick id="emojiSelectorBrick"></brick>\
        </brick>\
        <brick id="textAreasBrick">\
            <textarea id="textAreaBrick" placeholder="' + byLanguage("How would you describe your experience?","Compartanos su experiencia.") + '"></textarea>\
        </brick>\
        <brick id="inputAreasBrick">\
            <input id="inputAreaBrick" placeholder="' + byLanguage("email@example.com","correo@ejemplo.com") + '"></input>\
        </brick>\
        <brick id="actionButtonBrick">' + byLanguage("NEXT","SIG.") + '</brick>\
        <brick id="skipButtonBrick">' + byLanguage("Skip","Omitir") + '</brick>\
        <brick id="notificationParagraphBrick"></brick>\
    </brick>\
   \
    <brick id="sharedComponentsArea">\
        <img id="imagenPerfilOperator" src="https://i0.wp.com/varbai.com/wp-content/uploads/2019/02/thispersondoesnotexis.jpg?resize=1024%2C1024&ssl=1" alt="Girl in a jacket">\
        <brick id="operatorBrick">'+ operatorData()[0] +'</brick>\
        <brick id="stateBrick">'+ operatorData()[1] +'</brick>\
        <brick id="platformBoxBrick"><brick id="bubbleWelcome">...</brick></brick>\
    </brick>\
   \
    <brick id="whatsappArea">\
        <input id="textAreaWsp" placeholder="' + byLanguage("Send us a message","Escribe un mensaje.") + '"></input>\
        <brick id="wspSendButtonBrick">' + wspSendButtonIcon +'</brick>\
    </brick>\
   \
    <brick id="messengerArea">\
        <a id="messengerSendButtonBrick">'+ byLanguage("Send us a message","Envienos un mensaje") + messengerSendButtonIcon +'</a>\
    </brick>\
   \
</brick>'

// Get model of teller from HTML with teller TAG and execute it
function getModelAndExecute(){    
    modeSelected = tellerTag.getAttribute("tellerMode")
    return eval(modeSelected+"()");
;}

//Detect browser section /////Must go out
function detectBrowser(){
    isIE = /*@cc_on!@*/false || !!document.documentMode;
    isEdge = !isIE && !!window.StyleMedia;
    if(navigator.userAgent.indexOf("Chrome") != -1 && !isEdge){return 'chrome';}
    else if(navigator.userAgent.indexOf("Safari") != -1 && !isEdge){return 'safari';}
    else if(navigator.userAgent.indexOf("Firefox") != -1 ) {return 'firefox';}
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )){return 'ie';}//IF IE > 10
    else if(isEdge){return 'edge';}
    else {return 'other-browser';}
}

//Detect native language set by client
detectNativeLang()
function detectNativeLang(){    
    var nl = tellerTag.getAttribute("nativeLang");    
    if (nl == (null||""||"none")){return}
    else if(/[es|ES]/.test(nl)){langSession = "es";}
    else if(/[en|EN]/.test(nl)){langSession = "en";}
}

//Detect browser language
function detectBrowserLang(){
    var bl = navigator.language || navigator.userLanguage || navigator.browserLanguage;    
    if (bl == (null||""||"none")){return}
    else if(/[es|ES]/.test(bl)){langSession = "es";}
    else if(/[en|EN]/.test(bl)){langSession = "en";}
}

//Set phrase by language and set it
function byLanguage(en,es){  
    if (langSession == 'en') {return en;}
    else if (langSession == 'es'){return es;}
}

//Get color selected by user
function userColor(){
    a = tellerTag.getAttribute("userColor")
    if (a == null || a == "none" || a == "")
    return "white";
    else{return a}
}

//Get border-radius of bubble selected by user    
function userBorderRadius(){
    a = tellerTag.getAttribute("borderRadius")
    if (a == null || a == "none" || a == "")
    return "25";
    else{return a}
}

//Select description emoji function(x: Selected description emoji)
function sde(x){
    x.style.opacity = "1";
    x.style.transform = "translateY(-5px)";
}

//Unselect description emoji function(x: Unselected description emoji)
function ude(x){
    x.style.opacity = "0";
    x.style.transform = "translateY(0px)";
}

//stayButHide(x: object that u wanna stay but hide)
function hmm(x){
    x.style.opacity = "0";
    setTimeout(function(){ x.style.display = "none";  },300);
}

//showMeMan(x: object that u wanna show man)
function smm(x){
    x.style.display = "block";
    setTimeout(function(){ x.style.opacity = "1";  },1);
}

//minify my opacity men
function mmom(x){
    x.style.opacity = "0.25"; 
}

//Brick appear after x milliseconds
function appearAfter(){
    a = tellerTag.getAttribute("appearAfter")
    if (a == null || a == "none" || a == "")
    return 1;
    else{return parseInt(a)}
}

//Get theme selected by user
function userTheme(){
    a = tellerTag.getAttribute("theme")
    if (a == null || a == "none" || a == "" || a == "light") {return "light";}      
    else {return "dark";}
}

//Select colors by theme
function byTheme(light,dark){  
    if (userTheme() == 'dark') {return dark;}
    else{return light;}
}

//Create or not Feedback Button
function buttonFeedbackComposer(){
    a = tellerTag.getAttribute("formUrl")
    if (a == null || a == "none" || a == ""){
        tellerUseFeedback = false;
        return '';
    }
    else{
        tellerUseFeedback = true;
        return feedbackMainButton
    };
}

//Create or not messenger Button
function buttonMessengerComposer(){
    a = tellerTag.getAttribute("messengerID")
    if (a == null || a == "none" || a == ""){
        tellerUseMessenger = false;
        return '';
    }
    else{
        tellerUseMessenger = true;
        return messengerMainButton;
    };
}

//Create or not Whatsapp Button
function buttonWspComposer(){
    a = tellerTag.getAttribute("whatsappNumber")
    if (a == null || a == "none" || a == ""){
        tellerUseWsp = false;
        return '';
    }
    else{
        tellerUseWsp = true;
        return wspMainButton
    };
}

//Get infoUser and date to submit
function dayGetTeller(){
    if (dayTeller == 0){return "Dom-Sun"}
    else if (dayTeller == 1){return "Lun-Mon"}
    else if (dayTeller == 2){return "Mar-Tue"}
    else if (dayTeller == 3){return "Mie-Wed"}
    else if (dayTeller == 4){return "Jue-Thu"}
    else if (dayTeller == 5){return "Vie-Fri"}
    else if (dayTeller == 6){return "Sab-Sat"}
}
        
function hourGetTeller(){
    roundingHour = new Date().getHours() 
    if (roundingHour < 10){return ("0" + roundingHour)}
    else {return roundingHour}
}
    
function minutesGetTeller(){
    minutes = new Date().getMinutes() 
    if (minutes < 10){return ("0" + minutes)}
    else {return minutes}
}

//Get operator state (online/offline & name)
function operatorData(){
    //User attributes
    u = tellerTag.getAttribute("username")
    n = tellerTag.getAttribute("operatorName")    
    h = tellerTag.getAttribute("operatorHour")
    var isHour = regexHourInterval.test(h);
    //Get or set operatorName
    function operatorName(){
        if(n == null || n == "none" || n == "" && u == null || u == "none" || u == ""){return byLanguage("Bot John","Bot Juancho");}
        else if(u == null || u == "none" || u == ""){return n}
        else if(n == null || n == "none" || n == ""){return u}
        else{return n}
    } 
    //Get or set operatorState (online/offline)
    function operatorState(){
        if(isHour){
            oh = h.slice(0, 2);
            eh = h.slice(3, 5);
            if((oh < eh && roundingHour >= oh && roundingHour < eh) || (oh > eh && roundingHour < eh && roundingHour < oh) || (oh == eh)){return byLanguage("online","en linea");}
            else{return byLanguage("offline","desconectado");}
    }
        else{return byLanguage("online","en linea");}
    }    
    n = operatorName();
    s = operatorState();
    return [n,s]
}

//Message from operator on platforms
function welcomeBubble(){
    a = tellerTag.getAttribute("bubbleText")
    if (a == null || a == "none" || a == "")return byLanguage("Hi! What can i do for you?","¡Hola! ¿Qué puedo hacer por ti?");
    else{return a};
}

//On load execute model 
window.addEventListener('DOMContentLoaded', function() {
    getModelAndExecute()
});

////Main ballon function
function ballon() {
    //General status
    //statusBallon()
    //Detect browser for fetch
    detectBrowser()
    //Create ballon
    tellerTag.innerHTML = styleSheetTeller + ballonTellerBrick;
    //Get form entries for feedback query
    function urlFeedbackConstructor(){
        ffu = tellerTag.getAttribute("formUrl")
        ss = ffu.match("https(.*)/viewform");
        var formEntries = ffu.match(/entry.([0-9]+)/g);
        entryA = formEntries[0];
        entryB = formEntries[1];
        entryC = formEntries[2];
        entryD = formEntries[3];
        entryE = formEntries[4];
        entryF = formEntries[5];
        entryG = formEntries[6];
        return ss[0].replace("viewform", "formResponse?usp=pp_url");        
    }
    //Displayed Box or not
    var displayed = false;

    //Already interacted Box or not
    var interacted = false;

    //Ready to fetch
    var emotionSelected= false;
    var messageReady = false;
    var emailReadyTeller = false;
    var lockAndLoudTeller=false;

    //User input data
    var emotionTeller = "";
    var messageTeller = "";
    var emailTeller = "";
    
    ////Components

    //Main Button
    const buttonFatherBrick = document.getElementById("buttonFatherBrick");
    const xBrick = document.getElementById("xBrick");
    const palomita = document.getElementById("palomita");
    const buttonMessengerBrick = document.getElementById("buttonMessengerBrick");
    const buttonWhatsappBrick = document.getElementById("buttonWhatsappBrick");
    const buttonFeedbackBrick = document.getElementById("buttonFeedbackBrick");

    //Main Button Notification
    const hoverBrick = document.getElementById("hoverBrick");
    const hoverBrickClose = document.getElementById("hoverBrickClose");

    //Global Components
    const mainNotificationBrick = document.getElementById("mainNotificationBrick");
    const feedbackBrick = document.getElementById("feedbackBrick");

    //Main Brick
    const fatherBrick = document.getElementById("fatherBrick");
    const titleBrick = document.getElementById("titleBrick");
    const notificationParagraphBrick = document.getElementById("notificationParagraphBrick")
    const paragraphBrick = document.getElementById("paragraphBrick"); 
    
    //EmailInput
    const inputAreaBrick = document.getElementById("inputAreaBrick");

    //Feedback textarea
    const textAreasBrick = document.getElementById("textAreasBrick");
    const textAreaBrick = document.getElementById("textAreaBrick");

    //Action Buttons
    const actionButtonBrick = document.getElementById("actionButtonBrick");
    const skipButtonBrick = document.getElementById("skipButtonBrick");
    const buttonsComplementsBrick = document.getElementById("buttonsComplementsBrick");

    //Messenger components
    const messengerArea = document.getElementById("messengerArea");
    const messengerSendButtonBrick = document.getElementById("messengerSendButtonBrick");
    const messengerIconShape = document.getElementById("messengerIconShape");
    const messengerIconButton = document.getElementById("messengerIconButton");

    //Wsp components
    const whatsappArea = document.getElementById("whatsappArea");
    const textAreaWsp = document.getElementById("textAreaWsp");
    const wspSendButtonBrick = document.getElementById("wspSendButtonBrick");
    const whatsappIconShape = document.getElementById("whatsappIconShape");
    const whatsappIconButton = document.getElementById("whatsappIconButton");

    //Shared platforms components
    const platformBoxBrick = document.getElementById("platformBoxBrick")
    const bubbleWelcome = document.getElementById("bubbleWelcome")
    const imagenPerfilOperator = document.getElementById("imagenPerfilOperator")
    const operatorBrick= document.getElementById("operatorBrick")
    const stateBrick= document.getElementById("stateBrick")

    //Emoji Zone
    const emojiSelectorBrick = document.getElementById("emojiSelectorBrick");
    const emojisBrick = document.getElementById("emojisBrick");
    const emojiBrick1 = document.getElementById("emojiBrick1");
    const emojiBrick2 = document.getElementById("emojiBrick2");
    const emojiBrick3 = document.getElementById("emojiBrick3");
    const emojiBrick4 = document.getElementById("emojiBrick4");
    const emojiBrick5 = document.getElementById("emojiBrick5");
    const emojiDescriptionBrick1 = document.getElementById("emojiDescriptionBrick1");
    const emojiDescriptionBrick2 = document.getElementById("emojiDescriptionBrick2");
    const emojiDescriptionBrick3 = document.getElementById("emojiDescriptionBrick3");
    const emojiDescriptionBrick4 = document.getElementById("emojiDescriptionBrick4");
    const emojiDescriptionBrick5 = document.getElementById("emojiDescriptionBrick5");
    const SuperFaceTeller = document.getElementById("SuperFaceTeller");
    const GoodFaceTeller = document.getElementById("GoodFaceTeller");
    const NeutralFaceTeller = document.getElementById("NeutralFaceTeller");
    const BadFaceTeller = document.getElementById("BadFaceTeller");
    const FuriousFaceTeller = document.getElementById("FuriousFaceTeller");

    //Show paragraph brick on left
    function spbol(){        
        if(!emotionSelected){
            hmm(paragraphBrick)
            setTimeout(function(){ paragraphBrick.style.textAlign= "left"} , 300);
            setTimeout(function(){ smm(paragraphBrick);  }, 600);
        }
    }

    //Create link for messenger and redirect
    function toMessenger(){
        a = tellerTag.getAttribute("messengerID")
        if (a == null || a == "none" || a == ""){
            return "";
        }
        else{window.open( 'https://m.me/'+a, "_blank")};
    }  

    //Create link for Whatsapp and redirect
    function getWspMsg(){
        tx = textAreaWsp.value;
        if (tx == null || tx == "none" || tx == ""){return ""}
        else {return encodeURIComponent(tx);}
    }

    function toWhatsapp(){
        a = tellerTag.getAttribute("whatsappNumber")
        if (a == null || a == "none" || a == "")return "";
        else if (getWspMsg() == ""){
            window.open( 'https://wa.me/'+ a, "_blank")
        }
        else{window.open( 'https://wa.me/'+ a +'?text=' + getWspMsg(), "_blank")};
    }
  
    //General status
    function statusBallon(){
        setTimeout(function(){    
            console.log("")
            console.log("browserLang: "+ langSession)
            console.log("browserName: "+ detectBrowser())
            console.log("displayed: "+ displayed)
            console.log("interacted: "+ interacted)
            console.log("emotionSelected: "+ emotionSelected)
            console.log("emotionTeller: "+ emotionTeller)
            console.log("messageReady: "+ messageReady)
            console.log("messageTeller: "+ messageTeller)
            console.log("emailReadyTeller: "+ emailReadyTeller)
            console.log("emailTeller: "+ emailTeller)
            console.log("lockAndLoudTeller: "+ lockAndLoudTeller)
            console.log("")
        }, 1000);
    }

    function notificationAppear(l,c){
        hmm(l)
        l.textContent = "";
        setTimeout(function(){
            l.textContent = c;
            smm(l)
        },300);
    }

    //Function blow ballon
    function blowBallon(){
        hoverBrick.style.opacity = "1";
    }

    function unblowBallon(){         
        hoverBrick.style.opacity = "0";
    }

    //Apagar boton
    function offButtonBrick(o,i){
        setTimeout(function(){
            o.style.fill = byTheme(nebulaGrey,realGrey);
            i.style.fill = byTheme(realWhite,charmingGrey);
        },300);
    }

    //Display shared elements
    function showSharedComponent(){
        if(!displayedSharedComponents){
            //Show shared parts
            setTimeout(function(){
                notificationAppear(bubbleWelcome,welcomeBubble())
            },1200);
            smm(sharedComponentsArea)
            displayedSharedComponents = true;
            console.log("displayedShared: "+displayedSharedComponents)
        }
    }

    function hideSharedComponents(){
        if(displayedSharedComponents){
            hmm(sharedComponentsArea)
            //Show shared parts
            displayedSharedComponents = false;
            console.log("displayedShared: "+displayedSharedComponents)

        }
    }

    //Hide teller components
    function hideTellerComponents(){
        hmm(feedbackBrick)
        hmm(mainNotificationBrick)
    }

    //Show teller components
    function showTellerComponents(){
        smm(feedbackBrick)
        smm(mainNotificationBrick)
        if(!emotionSelected){
            fatherBrick.style.height = "200px"
        }
        else if((emotionSelected == true && messageReady == true && emailReadyTeller == false && lockAndLoudTeller == false)||(emotionSelected == true && messageReady == true && emailReadyTeller == true && lockAndLoudTeller == true)){            
            fatherBrick.style.height = "220px"
        }
    }
    
    //Show messenger content
    function showMessengerContent(){
        //Show messengerArea
        fatherBrick.style.height = "290px";
        smm(messengerArea)
        //Resize fatherBrick
        setTimeout(function(){
            //Change color to button selected
            messengerIconShape.style.fill = messengerBlue;
            messengerIconButton.style.fill = realWhite;
            //Show messenger parts
            platformBoxBrick.style.height = "190px";
            platformBoxBrick.style.bottom = "0";
            platformBoxBrick.style.opacity = "1";
            platformBoxBrick.style.borderRadius = " 0px 0px 10px 10px";
        },300);
        displayedMessenger = true;
        console.log("displayedMessenger: "+displayedMessenger)
    }
    
    //Hide messenger content
    function hideMessengerContent(){    
        if(tellerUseMessenger){
            if(displayedMessenger){
                //Hide elements
                hmm(messengerArea)
                //off button
                offButtonBrick(messengerIconShape, messengerIconButton)
                displayedMessenger = false;
                console.log("displayedMessenger: "+displayedMessenger)
            }
        }
    }

    //Show wsp content
    function showWspContent(){
        //Show wspArea
            fatherBrick.style.height = "290px";
        smm(whatsappArea)
        //Resize fatherBrick
        setTimeout(function(){
            //Change color to button selected
            whatsappIconShape.style.fill = wspGreen;
            whatsappIconButton.style.fill = realWhite;
            //Restyle shared components
            platformBoxBrick.style.height = "120px";
            platformBoxBrick.style.bottom = "70px";
            platformBoxBrick.style.opacity = "1";
            platformBoxBrick.style.borderRadius = " 0px 0px 0px 0px";
        },300);
        displayedWsp = true;
        console.log("displayedWsp: "+displayedWsp)
    }

    //Hide wsp parts
    function hideWspContent(){
        if(tellerUseWsp){
            if(displayedWsp){
                //Hide elements
                hmm(whatsappArea)
                //off button
                offButtonBrick(whatsappIconShape, whatsappIconButton)
                displayedWsp = false;
                console.log("displayedWsp: "+displayedWsp)
            }
        }
    }

    //Messenger main Button
    messengerBrickListener()
    function messengerBrickListener(){
        if(tellerUseMessenger)
            buttonMessengerBrick.addEventListener("click", function() {
                if(!displayedMessenger){
                //Make actions
                hideTellerComponents();
                hideWspContent();
                showSharedComponent();
                showMessengerContent();
                //Set variables
                console.log("msg clicked")
                }
            })
    }

    //whatsapp main Button
    wspBrickListener()
    function wspBrickListener(){
        if(tellerUseWsp)
            buttonWhatsappBrick.addEventListener("click", function() {
                if(!displayedWsp){
                    hideTellerComponents();
                    hideMessengerContent();
                    showSharedComponent();
                    showWspContent()
                    //Set variables
                    console.log("wsp clicked")
                }
            })
    }

    //Feedback main Button
    feedbackBrickListener()
    function feedbackBrickListener(){
        if(tellerUseFeedback)
            buttonFeedbackBrick.addEventListener("click", function() {
                if(!displayedFeedback){
                    //Make actions
                    hideWspContent();
                    hideMessengerContent();
                    hideSharedComponents();
                    setTimeout(function(){showTellerComponents()}, 300);
                    //Set variables
                    console.log("feedback clicked")
                }
            })
    }
    
    //Messenger button
    messengerSendButtonBrick.addEventListener("click", function() {
        toMessenger()
    })

    //Wsp send button
    wspSendButtonBrick.addEventListener("click", function() {
        console.log("redirected to wsp")
        toWhatsapp()
    })

    //Hover button
    buttonFatherBrick.addEventListener("mouseover", function() {
        if(!displayed){
        	blowBallon()
        }
        setTimeout(function(){
        	unblowBallon()
        },5000);
    })

    //Show invitation to comment initially
    setTimeout(function(){
        buttonFatherBrick.style.opacity = "1";
        if(!displayed && !interacted){
            setTimeout(function(){blowBallon()}, appearAfter());
            setTimeout(function(){unblowBallon()}, appearAfter() + 5000);
    }
    }, 1000);

    //By main button
    hoverBrickClose.addEventListener("click", function() {
    	unblowBallon()
    });

    //By main button
    buttonFatherBrick.addEventListener("click", function() {
    	unblowBallon()
        interacted = true;
        if(displayed){
            displayed = false;
            console.log("displayed: "+ displayed)
            xBrick.style.opacity = "0";
            xBrick.style.transform = "translateX(30px) scaleX(0)";
            fatherBrick.style.opacity = "0";
            fatherBrick.style.transform = "translateY(10px)";
            emojisBrick.style.opacity = "0";
            emojisBrick.style.transform = "translateY(20px)";
            setTimeout(function(){
                palomita.style.opacity = "1";
                palomita.style.transform = "translateX(0px) scaleX(1)";
                buttonFatherBrick.style.borderRadius = userBorderRadius() + "px";
                fatherBrick.style.display = "none";
            }, 300);
        }

        else{
            displayed = true;
            console.log("displayed: "+ displayed)
        	unblowBallon()
            buttonFatherBrick.style.borderRadius = "30px 30px 30px 30px";
            fatherBrick.style.display = "block";
            palomita.style.opacity = "0";
            palomita.style.transform = "translateX(-30px) scaleX(0)";
            setTimeout(function(){
                fatherBrick.style.opacity = "1";
                fatherBrick.style.transform = "translateY(0px)";
                emojisBrick.style.opacity = "1";
                emojisBrick.style.transform = "translateY(0px)";
            }, 10);
            setTimeout(function(){
                xBrick.style.opacity = "1";
                xBrick.style.transform = "translateX(0px) scaleX(1)";
            }, 300);
        }
    });

    //Cuando hago click en el icon1
    emojiBrick1.addEventListener("click", function() {
        emotionTeller = "Super";
        fatherBrick.style.height = "290px";
        hmm(titleBrick)
        spbol()
        emojiSelectorBrick.style.left = "25px";
        emojiSelectorBrick.style.opacity = "1";
        emojisBrick.style.top = "20px";
        smm(emojiBrick1);
        mmom(emojiBrick2);
        mmom(emojiBrick3); 
        mmom(emojiBrick4); 
        mmom(emojiBrick5); 
        sde(emojiDescriptionBrick1);
        ude(emojiDescriptionBrick2);
        ude(emojiDescriptionBrick3);
        ude(emojiDescriptionBrick4);
        ude(emojiDescriptionBrick5);
        smm(actionButtonBrick)
        smm(textAreasBrick)
        setTimeout(function(){ actionButtonBrick.style.bottom = "20px" }, 300);
        emotionSelected = true;
    });

    //Cuando hago click en el icon2
    emojiBrick2.addEventListener("click", function() {
        emotionTeller = "Good";
        fatherBrick.style.height = "290px";
        hmm(titleBrick)
        spbol()
        emojiSelectorBrick.style.left = "85px";
        emojiSelectorBrick.style.opacity = "1";
        emojisBrick.style.top = "20px";
        smm(emojiBrick2);
        mmom(emojiBrick1);
        mmom(emojiBrick3); 
        mmom(emojiBrick4); 
        mmom(emojiBrick5);
        sde(emojiDescriptionBrick2)
        ude(emojiDescriptionBrick1);
        ude(emojiDescriptionBrick3);
        ude(emojiDescriptionBrick4);
        ude(emojiDescriptionBrick5);
        smm(actionButtonBrick)
        smm(textAreasBrick)
        setTimeout(function(){ actionButtonBrick.style.bottom = "20px" }, 300);
        emotionSelected = true;
    });

    //Cuando hago click en el icon3
    emojiBrick3.addEventListener("click", function() {
        emotionTeller = "Neutral";
        fatherBrick.style.height = "290px";
        hmm(titleBrick)
        spbol()
        emojiSelectorBrick.style.left = "145px";
        emojiSelectorBrick.style.opacity = "1";
        emojisBrick.style.top = "20px";
        smm(emojiBrick3);
        mmom(emojiBrick1);
        mmom(emojiBrick2); 
        mmom(emojiBrick4); 
        mmom(emojiBrick5);
        sde(emojiDescriptionBrick3)
        ude(emojiDescriptionBrick1);
        ude(emojiDescriptionBrick2);
        ude(emojiDescriptionBrick4);
        ude(emojiDescriptionBrick5);
        smm(actionButtonBrick)
        smm(textAreasBrick)
        setTimeout(function(){ actionButtonBrick.style.bottom = "20px" }, 300);
        emotionSelected = true;
    });

    //Cuando hago click en el icon4
    emojiBrick4.addEventListener("click", function() {
        emotionTeller = "Bad";
        fatherBrick.style.height = "290px";
        hmm(titleBrick)
        spbol()
        emojiSelectorBrick.style.left = "205px";
        emojiSelectorBrick.style.opacity = "1";
        emojisBrick.style.top = "20px";
        smm(emojiBrick4);
        mmom(emojiBrick1);
        mmom(emojiBrick2); 
        mmom(emojiBrick3); 
        mmom(emojiBrick5);
        sde(emojiDescriptionBrick4)
        ude(emojiDescriptionBrick1);
        ude(emojiDescriptionBrick2);
        ude(emojiDescriptionBrick3);
        ude(emojiDescriptionBrick5);
        smm(actionButtonBrick)
        smm(textAreasBrick)
        setTimeout(function(){ actionButtonBrick.style.bottom = "20px" }, 300);
        emotionSelected = true;
    });

    //Cuando hago click en el icon5
    emojiBrick5.addEventListener("click", function() {
        emotionTeller = "Furious";
        fatherBrick.style.height = "290px";
        hmm(titleBrick)
        spbol()
        emojiSelectorBrick.style.left = "265px";
        emojiSelectorBrick.style.opacity = "1";
        emojisBrick.style.top = "20px";
        smm(emojiBrick5);
        mmom(emojiBrick1);
        mmom(emojiBrick2);
        mmom(emojiBrick3); 
        mmom(emojiBrick4);
        sde(emojiDescriptionBrick5)
        ude(emojiDescriptionBrick1);
        ude(emojiDescriptionBrick2);
        ude(emojiDescriptionBrick3);
        ude(emojiDescriptionBrick4);
        smm(actionButtonBrick)
        smm(textAreasBrick)
        setTimeout(function(){ actionButtonBrick.style.bottom = "20px" }, 300);
        emotionSelected = true;
    });

    //Icon1 hover
    emojiBrick1.addEventListener("mouseover", function() {
        emojiFaceBrick1.style.transform="translateY(-10px)";
        SuperFaceTeller.style.animationPlayState = "running";
        if(!emotionSelected){
        smm(emojiDescriptionBrick1);
        mmom(emojiBrick2);
        mmom(emojiBrick3);
        mmom(emojiBrick4);
        mmom(emojiBrick5);
        }
        emojiBrick1.addEventListener("mouseout", function() {
            emojiFaceBrick1.style.transform="translateY(0px)";
            SuperFaceTeller.style.animationPlayState = "paused";
            if(!emotionSelected){
            emojiDescriptionBrick1.style.opacity= "0";
            }      
        });
    });

    //Icon2 hover
    emojiBrick2.addEventListener("mouseover", function() {
        emojiFaceBrick2.style.transform="translateY(-10px)";
        GoodFaceTeller.style.animationPlayState = "running";
        if(!emotionSelected){
        smm(emojiDescriptionBrick2);
        mmom(emojiBrick1);
        mmom(emojiBrick3); 
        mmom(emojiBrick4); 
        mmom(emojiBrick5); 
        }
        emojiBrick2.addEventListener("mouseout", function() {
            emojiFaceBrick2.style.transform="translateY(0px)";
            GoodFaceTeller.style.animationPlayState = "paused";
            if(!emotionSelected){
            emojiDescriptionBrick2.style.opacity="0";
            }     
        });
    });

    //Icon3 hover
    emojiBrick3.addEventListener("mouseover", function() {
        emojiFaceBrick3.style.transform="translateY(-10px)";
        NeutralFaceTeller.style.animationPlayState = "running";
        if(!emotionSelected){
        smm(emojiDescriptionBrick3);
        mmom(emojiBrick1);
        mmom(emojiBrick2);
        mmom(emojiBrick4); 
        mmom(emojiBrick5); 
        }
        emojiBrick3.addEventListener("mouseout", function() {
            emojiFaceBrick3.style.transform="translateY(0px)";
            NeutralFaceTeller.style.animationPlayState = "paused";
            if(!emotionSelected){
            emojiDescriptionBrick3.style.opacity="0";
            }    
        });
    });

    //Icon4 hover
    emojiBrick4.addEventListener("mouseover", function() {
        emojiFaceBrick4.style.transform="translateY(-10px)";
        BadFaceTeller.style.animationPlayState = "running";
        if(!emotionSelected){
        smm(emojiDescriptionBrick4);
        mmom(emojiBrick1);
        mmom(emojiBrick2);
        mmom(emojiBrick3);
        mmom(emojiBrick5);
        }
        emojiBrick4.addEventListener("mouseout", function() {
            emojiFaceBrick4.style.transform="translateY(0px)";
            BadFaceTeller.style.animationPlayState = "paused";
            if(!emotionSelected){
            emojiDescriptionBrick4.style.opacity="0";
            }    
        });
    });

    //Icon5 hover
    emojiBrick5.addEventListener("mouseover", function() {
        emojiFaceBrick5.style.transform="translateY(-10px)";
        FuriousFaceTeller.style.animationPlayState = "running";
        if(!emotionSelected){
        smm(emojiDescriptionBrick5);
        mmom(emojiBrick1);
        mmom(emojiBrick2)
        mmom(emojiBrick3);
        mmom(emojiBrick4);
        }
        emojiBrick5.addEventListener("mouseout", function() {
            emojiFaceBrick5.style.transform="translateY(0px)";
            FuriousFaceTeller.style.animationPlayState = "paused";
            if(!emotionSelected){
            emojiDescriptionBrick5.style.opacity="0";
            }     
        });
    });

    //Text area regex
    textAreaBrick.addEventListener("input", function() {        
        notificationAppear(notificationParagraphBrick, "");
        var isMsg = regexMsg.test(textAreaBrick.value);        
        if(textAreaBrick.value == ""){
            messageTeller = "";
            messageReady = false; // Confirm message setted
            messageTeller = ""; //Set message on variable
            actionButtonBrick.style.color = realWhite;
            actionButtonBrick.style.backgroundColor = nebulaGrey;
            notificationAppear(notificationParagraphBrick, byLanguage("The message must not be empty","El mensaje no puede estar vacío."));
        }
        else if(isMsg){
            messageTeller = textAreaBrick.value;
            messageReady = true; // Confirm message setted
            messageTeller = textAreaBrick.value; //Set message on variable
            actionButtonBrick.style.color = byTheme(realWhite,charmingGrey);
            actionButtonBrick.style.backgroundColor = byTheme(charmingGrey,realWhite);
            notificationAppear(notificationParagraphBrick, byLanguage("Thanks for your feedback","Gracias por tu comentario."));
        }
        else if(!isMsg){
            messageTeller = "";
            messageReady = false; // Confirm message setted
            messageTeller = ""; //Set message on variable
            actionButtonBrick.style.color = realWhite;
            actionButtonBrick.style.backgroundColor = nebulaGrey;
            notificationAppear(notificationParagraphBrick, byLanguage("Use letters from Aa-Zz, numbers from 0-9, and supported special signs (?!.,; :)." ,"Usá letras de Aa-Zz, números de 0-9, y signos admitidos (?!.,;:)."));
        }    
        return;
    });


    //Check if is valid email and show notifications (Just regular expression, not real comprobation)
    function checkEmail(){
        var isEmail = regexMail.test(inputAreaBrick.value);
        if(inputAreaBrick.value==""){
            emailTeller = "";
            emailReadyTeller = false;
            lockAndLoudTeller = false;
            actionButtonBrick.style.color = realWhite;
            actionButtonBrick.style.backgroundColor = nebulaGrey;
            notificationAppear(notificationParagraphBrick, byLanguage('The field cannot be empty.' ,'Este campo debe llenarse.'));
        }
        else if(!isEmail){
            emailTeller = "";
            emailReadyTeller = false;
            lockAndLoudTeller = false;
            actionButtonBrick.style.color = realWhite;
            actionButtonBrick.style.backgroundColor = nebulaGrey;
            notificationAppear(notificationParagraphBrick, byLanguage("Not valid email address." ,"Correo electrónico no válido."));
        }
        else if(isEmail){
            emailTeller = inputAreaBrick.value;
            emailReadyTeller = true;
            lockAndLoudTeller = true;
            actionButtonBrick.style.color = byTheme(realWhite,charmingGrey);
            actionButtonBrick.style.backgroundColor = byTheme(charmingGrey,realWhite);
            notificationAppear(notificationParagraphBrick, "");
        }
    }

    
    inputTimeTeller = hourGetTeller() + ":" + minutesGetTeller();
    
    var dayWeekTeller = dayGetTeller();
    var fullDateTeller = (yearTeller + "-" + (monthTeller+1) + "-" + dateTeller)
    var zoneTeller = "undefined"

    function entryComposer(entry,resp){
      if (entry==""){return ""}
      else return ('&'+entry+'='+resp)}

    //Submit fetch
    function submit (answer) {      
        if(lockAndLoudTeller){
        answer = encodeURIComponent(answer)
        var fullFeedbackurl = urlFeedbackConstructor()+ 
        entryComposer(entryA,emotionTeller) +
        entryComposer(entryB,emailTeller) +
        entryComposer(entryC,messageTeller) +
        entryComposer(entryD,dayWeekTeller) +
        entryComposer(entryE,fullDateTeller) +
        entryComposer(entryF,inputTimeTeller) +
        entryComposer(entryG,langSession) +
        '&submit=Submit'

        var opts = {
        method: "POST",
        mode: "no-cors", // Google will only submit a form if "mode" is "no-cors"
        redirect: "follow", 
        referrer: "no-referrer"
        }
        console.log("Making request");
        if(detectBrowser() == "ie"){
            titleBrick.style.display = "block";
            skipButtonBrick.style.display = "none";
            inputAreaBrick.style.display = "none";
            actionButtonBrick.style.display = "none";
            titleBrick.style.transform = "translateY(65px)";
            notificationAppear(titleBrick, byLanguage('Your browser does not support the request, we will have to redirect it.','Su navegador no admite la solicitud, tendremos que redirigirla.')); 
            
            setTimeout(function(){ window.open(fullFeedbackurl, 'tellerRequest'); }, 1500);        
            setTimeout(function(){ ballon() }, 5000);  
        } 
        else{     
            fetch(fullFeedbackurl, opts).then(function(response) {
            return response.text();
        })
        .then(function(text) {      
            titleBrick.style.display = "block";  
            skipButtonBrick.style.display = "none";
            inputAreaBrick.style.display = "none";
            actionButtonBrick.style.display = "none";
            titleBrick.style.transform = "translateY(65px)";
            notificationAppear(titleBrick, byLanguage('We receive the feedback, thanks for your time.','Recibimos su comentario, gracias por su tiempo.')); 
            
        })
        .catch(function(error) {
            titleBrick.style.display = "block";  
            skipButtonBrick.style.display = "none";
            inputAreaBrick.style.display = "none";
            actionButtonBrick.style.display = "none";
            titleBrick.style.transform = "translateY(35px)";
            notificationAppear(titleBrick, byLanguage('Something went wrong, you should try later.','Algo salió mal, no hemos podido cargar su solicitud, por favor intentelo más tarde.')); 
            
        });
        setTimeout(function(){fatherBrick.style.transform = "translateY(20px)";
            displayed = false
            fatherBrick.style.opacity = "0";
            titleBrick.style.opacity = "0";
            emojisBrick.style.opacity = "0";
            emojisBrick.style.transform = "translateY(20px)";
            xBrick.style.opacity = "0";

            setTimeout(function(){
                titleBrick.style.display = "none";
                fatherBrick.style.display = "none";
                hoverBrick.style.display = "none" 
            }, 300);
        }, 3000);
        setTimeout(function(){ ballon(); }, 3000);
        }
    }}
    
    //Event listener for skip button
    skipButtonBrick.addEventListener("click", function() {
        console.log("pressing skip")
        notificationParagraphBrick.style.opacity = "0"
        emailTeller = "none";
        emailReadyTeller = true;
        lockAndLoudTeller = true;
        paragraphBrick.innerHTML = byLanguage('Powered by '+ tellerSmallA,'Con el poder de '+ tellerSmallA);
        paragraphBrick.style.textAlign= "center";             
        paragraphBrick.style.opacity = "1";
        titleBrick.style.opacity = "0";
        skipButtonBrick.style.opacity = "0";
        inputAreasBrick.style.opacity = "0";
        actionButtonBrick.style.opacity = "0";
        submit();
    });

    //Next button event listener on click
    actionButtonBrick.addEventListener("click", function() {
        //Empty message
        if(textAreaBrick.value == ""){
            notificationAppear(notificationParagraphBrick, byLanguage("The message must not be empty","El mensaje no puede estar vacío."));
        }
        //Emotion, message and email ready to fetch
        else if(emotionSelected == true && messageReady == true && emailReadyTeller == true && lockAndLoudTeller == true){
            notificationAppear(notificationParagraphBrick, byLanguage("",""));
            actionButtonBrick.style.opacity = "0";
            titleBrick.style.opacity = "0";
            skipButtonBrick.style.opacity = "0";
            inputAreasBrick.style.opacity = "0";
            paragraphBrick.style.textAlign= "center";
            paragraphBrick.style.opacity = "1";
            setTimeout(function(){submit()}, 1000);
        }
        //Emotion and message completed
        else if(emotionSelected == true && messageReady == true && emailReadyTeller == false && lockAndLoudTeller == false){
            titleBrick.textContent = "";
            emojiSelectorBrick.style.opacity = 0;
            notificationAppear(notificationParagraphBrick, byLanguage("",""));
            emojisBrick.style.transform = "translateY(20px)";
            emojisBrick.style.opacity = "0";
            paragraphBrick.style.opacity = "0";
            titleBrick.style.opacity = "0";
            titleBrick.style.display = "block";
            skipButtonBrick.style.display = "block";
            textAreasBrick.style.transform = "translateY(20px)";
            textAreasBrick.style.opacity = "0";
            inputAreasBrick.style.display = "block";
            setTimeout(function(){
                notificationAppear(titleBrick, byLanguage('Please enter your email if you are happy for us to contact you, if not press "skip".','Ingrese su correo si esta de acuerdo en que nos comuniquemos con usted, de lo contrario presione "omitir".'));
                emojisBrick.style.display = "none";
                checkEmail();
                fatherBrick.style.height = "220px";
                actionButtonBrick.textContent = byLanguage("SEND","ENVIAR");
                actionButtonBrick.style.color = realWhite;
                actionButtonBrick.style.backgroundColor = nebulaGrey;
                inputAreasBrick.style.top = "120px";
                inputAreasBrick.style.opacity = "1";
                textAreasBrick.style.display = "none";
                skipButtonBrick.style.opacity = "1";
                titleBrick.style.opacity = "1";
            }, 300);
        }
    });
    //Listen email input
    inputAreaBrick.addEventListener("input", function() {    
        checkEmail()    
    });
}


/* Primer dìa, por la mañana cojo una copa de vidrio, la lleno con agua y la pongo al sol. Por la tarde tomo
de la copa de acuerdo a cuanto sienta he de beber de ella.

Por la mañana en el primer día cojo una copa de vidrio con agua y la pongo al sol. Por la tarde tomo
del vaso de acuerdo a cuanto sienta he de beber de ella.

Por la mañana el primer día cojo una copa de vidrio con agua y la pongo al sol. Por la tarde tomo
del vaso de acuerdo sienta he de beber de ella.

El primer día por la mañana coloco una copa de vidrio con agua al sol y tomo de acuerdo sienta
he de beber de ella. Por la tarde. */



/* No es correcto talar un árbol para que deje de crecer pues acrentecen sus raíces.

Me escucho. Mi ansiedad esta ahí para hablarme.
Dejo de hacer eso que por hacer o por no hacer me causo ansiedad.

Las cosas se solucionan dejando de hacer cosas, no haciendo más cosas. Si quieren podemos ponerle un nombre etimológico, emmm WU WEI me gusta.

Primero me vacío de eso que me causa en este caso "ansiedad". Tomar te, respirar lindo, mirar el río son pasos re lindos pero están más adelante si nos queremos poner técnicos.

Uso mi oscuridad, si soy procrastinador no me pongo a ver un video de cómo dejar de procrastinar, porque caí en la trampa, no solo admito que soy un procrastinador, si no que encima procrastino mis tareas por ponerme a ver un video de como dejar de procrastinar.

Ahora reemplaze procrastinar por el "martirio" que lo acongoje.

Cachetazo para los new ages, que parece abundan en este grupo.*/




/* //UTF Constructor
const utfTeller = document.createElement("meta");
    utfTeller.setAttribute("charset", "UTF-8");
    utfTeller.setAttribute("type", "text/javascript");
    document.head.appendChild(utfTeller);
*/
