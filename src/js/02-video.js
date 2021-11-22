import videoplayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const storageKeyCurrentTime = "videoplayer-current-time"; //STORAGE_KEY_CURRENT_TIME
const iframe = document.querySelector('iframe');
const player = new videoplayer(iframe);
    
player.on('timeupdate', throttle(data => localStorage.setItem(storageKeyCurrentTime, data.seconds), 1000));
player.setCurrentTime(localStorage.getItem(storageKeyCurrentTime));
