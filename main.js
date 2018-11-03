"use strict";

function checker() {
    let result = 0;
    for(let i = 0; i < 5; ++i) {
        let name = "q" + (i + 1);
        let radios = document.getElementsByName(name);

        for(let j = 0; j < radios.length; ++j) {
            if(radios[j].checked) {
                result += parseInt(radios[j].value);
            }

            break;
        }
    }

    if(result === 5) {
        document.getElementById("result").textContent = "I love VandyHacks";
    } else {
        document.getElementById("result").textContent = "Incorrect answers";
    }
}

document.getElementById("submit").addEventListener("click",checker);