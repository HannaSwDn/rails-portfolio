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
let scrollLine, nameAnimation, item1, item2, item3, item4

document.addEventListener('DOMContentLoaded', () => {
    scrollLine = document.querySelector('#scrollLineTwo')
    nameAnimation = document.querySelector('#nameAnimation')
    item1 = document.querySelector('#item1')
    item2 = document.querySelector('#item2')
    item3 = document.querySelector('#item3')
    item4 = document.querySelector('#item4')

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
    }, 3000)
})

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

// animation for works div

document.addEventListener('scroll', () => {
    let offset = window.pageYOffset

    if (offset >= 200) {
        item1.style.width = '100vw'
    } else {
        item1.style.width = '0vw'
    }

    if (offset >= 350) {
        item2.style.width = '100vw'
    } else {
        item2.style.width = '0vw'
    }

    if (offset >= 500) {
        item3.style.width = '100vw'
    } else {
        item3.style.width = '0vw'
    }

    if (offset >= 650) {
        item4.style.width = '100vw'
    } else {
        item4.style.width = '0vw'
    }
})

// songs

let songs = [
    'sweater weather - the neighbourhood',
    'ElDark - Художник',
    'idontwannabeyouanymore - Billie Eilish',
    "if i had a gun - noel gallagher's high flying birds",
    '24k magic - Bruno Mars'
]
