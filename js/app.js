const selectArray = [];
function addToSelect(element) {
    const playerName = element.parentNode.parentNode.children[1].innerText;
    const playerObj = {
        playerName: playerName
    }
    selectArray.push(playerObj)
    console.log(selectArray)
    console.log(selectArray.length)
}

