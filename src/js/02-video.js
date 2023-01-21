//import VimeoPlayer from '@vimeo/player';
const player = require('@vimeo/player');
//let player = require("@vimeo/player");
//const throttle = require("lodash.throttle");

const iframe = document.querySelector('iframe');
const newPlayer = new Vimeo.Player(iframe)