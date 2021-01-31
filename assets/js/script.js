var movingCamperEl = document.querySelector("#moving-camper");
var movingCamperContainerEl = document.querySelector("#moving-camper-container")

var padding = 0;
var count = 0;
var startMoving = function () {
    var moveCount = setInterval(function() {
        count++;
        padding += 10;
        /*
        movingCamperEl.setAttribute("padding-left", padding.toString().trim() + "px");
        movingCamperContainerEl.appendChild(movingCamperEl);
        console.log(movingCamperEl);
        */
        if (count === 121) {
            count = 0;
            padding = 0;
            document.getElementById("moving-camper").style.padding = ("0 0 0 " + padding.toString() + "px");
            clearInterval(moveCount);
            console.log("count = 10");

        }

        document.getElementById("moving-camper").style.padding = ("0 0 0 " + padding.toString() + "px");

        console.log(count, padding);

    }, 75);    
}

movingCamperEl.addEventListener("mouseover", startMoving);
