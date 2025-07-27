const albums = Array.from(document.getElementsByClassName('albums'));
const play_button = Array.from(document.getElementsByClassName('play_button'));
const music = document.querySelectorAll('audio')
const imgs = document.querySelectorAll('img')
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const touchScreen = window.matchMedia("(pointer: coarse)").matches;
document.querySelector('.content').style.opacity = '0'


function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
    })
}

imgs.forEach((img) => {
    loadImage(img).then(image => {
        document.body.appendChild(img);
    }).catch(err => console.error('fail'))
})

window.addEventListener('load', () => {
    const loading = document.querySelector('.loading');
    
    const content = document.querySelector('.content');
    loading.style.opacity = '0';
    loading.style.transition = 'opacity 0.5s ease';
    content.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        loading.style.display = 'none';
        content.style.display = 'block';
        
    }, 500)
    setTimeout(() => {
        content.style.opacity = '1';
    }, 1000)
    console.log('loaded')
})

if(isMobile || touchScreen) {
        function toggleBtn() {
        play_button.forEach(button => {
            button.addEventListener('click', () => {
                if(!button.classList.contains('playing')) {
                    pauseAll()
                    button.classList.add('playing')
                    console.log('playing')
                    music[play_button.indexOf(button)].currentTime = music_start(play_button.indexOf(button))
                    music[play_button.indexOf(button)].play();
                    button.innerHTML = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
                                <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                                <svg width="800px" height="800px" viewBox="-1 0 8 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    
                                    <title>pause [#1006]</title>
                                    <desc>Created with Sketch.</desc>
                                    <defs>
        
                                </defs>
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="Dribbble-Light-Preview" transform="translate(-227.000000, -3765.000000)" fill="white">
                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                <path d="M172,3605 C171.448,3605 171,3605.448 171,3606 L171,3612 C171,3612.552 171.448,3613 172,3613 C172.552,3613 173,3612.552 173,3612 L173,3606 C173,3605.448 172.552,3605 172,3605 M177,3606 L177,3612 C177,3612.552 176.552,3613 176,3613 C175.448,3613 175,3612.552 175,3612 L175,3606 C175,3605.448 175.448,3605 176,3605 C176.552,3605 177,3605.448 177,3606" id="pause-[#1006]">
        
                                </path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>`
                }
                else {
                    music[play_button.indexOf(button)].pause();
                    pauseAll()
                }
            })
        })
    }
    const pauseAll = function() {
        play_button.forEach(btn => {
            if(btn.classList.contains('playing')) {
                btn.classList.remove('playing')
                console.log('pause')
                btn.innerHTML = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.23832 3.04445C5.65196 2.1818 3.75 3.31957 3.75 5.03299L3.75 18.9672C3.75 20.6806 5.65196 21.8184 7.23832 20.9557L20.0503 13.9886C21.6499 13.1188 21.6499 10.8814 20.0503 10.0116L7.23832 3.04445ZM2.25 5.03299C2.25 2.12798 5.41674 0.346438 7.95491 1.72669L20.7669 8.6938C23.411 10.1317 23.411 13.8685 20.7669 15.3064L7.95491 22.2735C5.41674 23.6537 2.25 21.8722 2.25 18.9672L2.25 5.03299Z" fill="white"/>
                            </svg>`
                music[play_button.indexOf(btn)].pause()
            }
    
        })
    }
}
else {
    function toggleBtn() {
        play_button.forEach(button => {
            button.addEventListener('click', () => {
                if(!button.classList.contains('playing')) {
                    pauseAll()
                    button.classList.add('playing')
                    console.log('playing')
                    music[play_button.indexOf(button)].currentTime = music_start(play_button.indexOf(button))
                    fadeIn(music[play_button.indexOf(button)])
                    button.innerHTML = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
                                <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                                <svg width="800px" height="800px" viewBox="-1 0 8 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    
                                    <title>pause [#1006]</title>
                                    <desc>Created with Sketch.</desc>
                                    <defs>
        
                                </defs>
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="Dribbble-Light-Preview" transform="translate(-227.000000, -3765.000000)" fill="white">
                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                <path d="M172,3605 C171.448,3605 171,3605.448 171,3606 L171,3612 C171,3612.552 171.448,3613 172,3613 C172.552,3613 173,3612.552 173,3612 L173,3606 C173,3605.448 172.552,3605 172,3605 M177,3606 L177,3612 C177,3612.552 176.552,3613 176,3613 C175.448,3613 175,3612.552 175,3612 L175,3606 C175,3605.448 175.448,3605 176,3605 C176.552,3605 177,3605.448 177,3606" id="pause-[#1006]">
        
                                </path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>`
                }
                else {
                    fadeOut(music[play_button.indexOf(button)])
                    pauseAll()
                }
            })
        })
    }
    const pauseAll = function() {
        play_button.forEach(btn => {
            if(btn.classList.contains('playing')) {
                btn.classList.remove('playing')
                console.log('pause')
                btn.innerHTML = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.23832 3.04445C5.65196 2.1818 3.75 3.31957 3.75 5.03299L3.75 18.9672C3.75 20.6806 5.65196 21.8184 7.23832 20.9557L20.0503 13.9886C21.6499 13.1188 21.6499 10.8814 20.0503 10.0116L7.23832 3.04445ZM2.25 5.03299C2.25 2.12798 5.41674 0.346438 7.95491 1.72669L20.7669 8.6938C23.411 10.1317 23.411 13.8685 20.7669 15.3064L7.95491 22.2735C5.41674 23.6537 2.25 21.8722 2.25 18.9672L2.25 5.03299Z" fill="white"/>
                            </svg>`
                fadeOut(music[play_button.indexOf(btn)])
            }
    
        })
    }
}

toggleBtn()


    



function fadeIn(audio) {
    audio.volume = 0;
    const playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(() => {
            const fadeInInterval = setInterval(() => {
                if (audio.volume < 0.9) {
                    audio.volume = Math.min(audio.volume + 0.1, 1);
                } else {
                    clearInterval(fadeInInterval);
                }
            }, 100);
        }).catch(error => {
            console.error("Playback failed:", error);
        });
    }
}

function fadeOut(audio) {
    if (audio.paused) {
        audio.play().then(() => {
            startFadeOut(audio);
        }).catch(error => {
            console.error("Playback failed:", error);
        });
    } else {
        startFadeOut(audio);
    }
}

function startFadeOut(audio) {
    const fadeOutInterval = setInterval(() => {
        if (audio.volume > 0.1) {
            audio.volume = Math.max(audio.volume - 0.1, 0);
        } else {
            audio.volume = 0;
            audio.pause();
            clearInterval(fadeOutInterval);
        }
    }, 100);
}

function music_start(index) {
    switch (index) {
        case 0:
            return(15);
        case 1:
            return(66);
        case 2:
            return(208);
        case 3:
            return(46);
        case 4:
            return(167);
        case 5:
            return(33);
        case 6:
            return(51);
        case 7:
            return(289);
        case 8:
            return(33);
        case 9:
            return(182);
        case 10:
            return(74);
        case 11:
            return(19);
    }
}













albums.forEach((album, index) => {
    let hls_proportions = (360/play_button.length) * index
    album.style.border = `3px solid hsl(${hls_proportions}, 90%, 70%)`
})