//Animate Smooth Scroll from Nav button
$('#portfolio-nav').on('click', function () {
    const portfolio = $('#portfolio').position().top;
    $('html, body').animate({
            scrollTop: portfolio
        },
        900
    );
});

$('#about-nav').on('click', function () {
    const about = $('#about').position().top;
    $('html, body').animate({
            scrollTop: about
        },
        900
    );
});

$('#contact-nav').on('click', function () {
    const footer = $('#footer').position().top;
    $('html, body').animate({
            scrollTop: footer
        },
        900
    );
});

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scroll-top-btn").style.display = "block";
    } else {
        document.getElementById("scroll-top-btn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
$("#scroll-top-btn").on('click', function () {
    $('html, body').animate({
            scrollTop: document.body.scrollTop = 0
        },
        900
    );

    //topFunction();
});