// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import AccentTypographyBuild from './modules/accent-typography-build';
import {ANIMATION_WORDS} from './const';


// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

window.onload = () => {
  document.body.classList.add(`onload`);

  ANIMATION_WORDS.forEach((item) => {
    const animationTopScreenTextLine = new AccentTypographyBuild(item.class, 500, item.delay, `active`, `transform`);
    animationTopScreenTextLine.runAnimation();
  });
};
