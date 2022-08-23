const selectArray = [];

function display(playerName) {
    const listIteam = document.getElementById('player-name');
    listIteam.innerHTML = '';

    for (let i = 0; i < playerName.length; i++) {

        const name = selectArray[i].playerName;
        const ol = document.createElement('li');
        ol.innerHTML = `<li> ${i + 1} ${name}</li>
        
        `;

        listIteam.appendChild(ol);
    }
}

function addToSelect(element) {
    const playerName = element.parentNode.parentNode.children[1].innerText;
    const playerObj = {
        playerName: playerName
    }
    selectArray.push(playerObj)
    display(selectArray);
    element.disabled = true;

}


document.getElementById('calculate-btn').addEventListener('click', function () {
    const selectPlayer = document.getElementById('player-name');
    const selectPlayerNumber = selectPlayer.innerText;

    const selectPlayerString = parseInt(selectPlayerNumber)

    console.log(selectPlayerString)
})

