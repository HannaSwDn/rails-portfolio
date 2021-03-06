// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

// global variables
let scrollLine, nameAnimation, item1, item2, item3, item4, item5, musicModal, song, worksModal, contactFormX, list, aboutModal, aboutScroll, aboutLine2

document.addEventListener('turbolinks:load', () => {
    scrollLine = document.querySelector('#scrollLineTwo')
    nameAnimation = document.querySelector('#nameAnimation')
    item1 = document.querySelector('#item1')
    item2 = document.querySelector('#item2')
    item3 = document.querySelector('#item3')
    item4 = document.querySelector('#item4')
    item5 = document.querySelector('#item5')
    musicModal = document.querySelector('#musicModal')
    song = document.querySelector('#song')
    worksModal = document.querySelector('#worksModal')
    contactFormX = document.querySelector('#closeContactForm')
    list = document.querySelector('.list')
    aboutModal = document.querySelector('#aboutMeModal')
    aboutScroll = document.querySelector('.aboutScroll')
    aboutLine2 = document.querySelector('.aboutLine2')

    musicModal.style.display = 'none'

    setTimeout(function() {
        scrollLine.style.left = '0'
        scrollLine.style.right = 'auto'
        scrollLine.style.width = '100%'
    }, 10)

    setTimeout(function() {
        scrollLine.style.left = 'auto'
        scrollLine.style.right = '0'
        scrollLine.style.width = '0%'
    }, 1010)

    setInterval(function() {
        scrollingAnimation(scrollLine)
    }, 4000)

    setInterval(function() {
        scrollingAnimation2(aboutLine2)
    }, 4000)

    // go to top of home page

    item1.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    })

    // open music modal

    item5.addEventListener('click', () => {
        musicModal.style.display = 'flex'

        setTimeout(function() {
            musicModal.style.height = '100vh'
        }, 10)

        musicModal.style.top = window.pageYOffset + 'px'
        song.innerHTML = songs[Math.floor(Math.random() * songs.length)]
    })
})

// open about me modal

const openAboutMeModal = () => {
    aboutModal.style.display = 'block'

    setTimeout(function() {
        aboutModal.style.height = '100vh'
        aboutScroll.style.bottom = '0'
        aboutScroll.style.position = 'fixed'
    }, 20)
}

const closeAboutMeModal = () => {
    aboutModal.style.height = '0vh'

    setTimeout(function() {
        aboutModal.style.display = 'none'
    }, 520)
}

// hide music modal

const hideMusicModal = () => {
    musicModal.style.height = '0vh'

    setTimeout(function() {
        musicModal.style.display = 'none'
    }, 520)
}

// scroll to navigation

const goToNavigation = () => {
    list.scrollIntoView({
        behavior: 'smooth'
    });
}

// animation for scrolling line

const scrollingAnimation = () => {
    setTimeout(function() {
        scrollLine.style.left = '0'
        scrollLine.style.right = 'auto'
        scrollLine.style.width = '100%'
    }, 10)

    setTimeout(function() {
        scrollLine.style.left = 'auto'
        scrollLine.style.right = '0'
        scrollLine.style.width = '0%'
    }, 1010)
}

const scrollingAnimation2 = () => {
    setTimeout(function() {
        aboutLine2.style.left = '0'
        aboutLine2.style.right = 'auto'
        aboutLine2.style.width = '100%'
    }, 10)

    setTimeout(function() {
        aboutLine2.style.left = 'auto'
        aboutLine2.style.right = '0'
        aboutLine2.style.width = '0%'
    }, 1010)
}

document.addEventListener('scroll', () => {
    let offset = window.pageYOffset

    musicModal.style.top = offset + 'px'
    worksModal.style.top = offset + 'px'
    aboutModal.style.top = offset + 'px'

    // for navigation animations

    if (offset >= 200) {
        item1.style.width = '100vw'
    } else {
        item1.style.width = '0vw'
    }

    if (offset >= 300) {
        item2.style.width = '100vw'
    } else {
        item2.style.width = '0vw'
    }

    if (offset >= 400) {
        item3.style.width = '100vw'
    } else {
        item3.style.width = '0vw'
    }

    if (offset >= 500) {
        item4.style.width = '100vw'
    } else {
        item4.style.width = '0vw'
    }

    if (offset >= 600) {
        item5.style.width = '100vw'
    } else {
        item5.style.width = '0vw'
    }
})

// open works modal

const openWorksModal = () => {
    worksModal.style.display = 'block'

    setTimeout(function() {
        worksModal.style.height = '100vh'
    }, 20)
}

// close works modal

const closeWorksModal = () => {
    worksModal.style.height = '0vh'

    setTimeout(function() {
        worksModal.style.display = 'none'
    }, 520)
}

// close contact form

const closeContactForm = () => {
    window.location.href = 'https://cryptic-shore-60293.herokuapp.com/'
}

// songs

let songs = [
    'sweater weather - the neighbourhood',
    'ElDark - Художник',
    'idontwannabeyouanymore - Billie Eilish',
    "if i had a gun - noel gallagher's high flying birds",
    '24k magic - Bruno Mars',
    "Sinkin' in - Cody Simpson",
    'Talking to the moon - Bruno Mars',
    'cry baby - the neighbourhood'
]
