cal = document.querySelector('#calisthenics');

cal.addEventListener("click", function () {
    if (confirm('Are you sure you want to see the picture? (My upper body is naked)')) {
        console.log("");
    }

    else {
        return;
    }
})
