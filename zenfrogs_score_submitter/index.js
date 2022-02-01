let button = document.getElementById("button");
let ethwallet = document.getElementById("ethwallet");
let score = document.getElementById("score");
button.onclick = function() {
    fetch("https://www.zenfrogs.com/api/save-score", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Referer": "https://game.zenfrogs.com/"
        },
        body: `address=${ethwallet.value}&score=${score.value}`
    }).then(data => {
        data.text().then(function(text) {
            alert(text);
        })
    })
};