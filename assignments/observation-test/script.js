function startGame() {
    document.getElementById("displayOfButtons").innerHTML = "";
    document.getElementById("winMessage").innerHTML = "";
    const numbersArray = [];
    for (i = 1; i <= 25; i++) {
        numbersArray.push(i);
    }
    let target = 1;
    shuffle(numbersArray);

    for (i = 0; i < 25; i++) {
        const numberButton = document.createElement("button");
        numberButton.classList.add('tile');
        const randomNumber = numbersArray[i];
        const newText = document.createTextNode(randomNumber);
        numberButton.appendChild(newText);
        document.getElementById("displayOfButtons").appendChild(numberButton);
        numberButton.addEventListener("click", function buttons(event) {
            let clickedNumber = event.target.innerHTML
        if(clickedNumber == target) {
            event.target.classList.add("clicked");
            target++
        }
        if(target > numbersArray.length) {
            const winMessage = document.createElement("h1")
            const winMessageText = document.createTextNode("Congratulations, You Win!");
            winMessage.appendChild(winMessageText);
            document.getElementById('winMessage').appendChild(winMessage);
        }
        })  
    }
}
document.getElementById('startButton').addEventListener("click", startGame);

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
 return array;
}