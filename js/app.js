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
    document.getElementById('selected-player').innerText = selectArray.length
    display(selectArray);

    element.disabled = true;

}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayerFieldElement = document.getElementById('per-player-field');
    const perPlayerString = perPlayerFieldElement.value;
    const perPlayer = parseInt(perPlayerString);
    perPlayerFieldElement.value = perPlayer;

    const selectedPlayerElement = document.getElementById('selected-player');
    const selectedPlayerString = selectedPlayerElement.innerText;
    const selectedPlayer = parseInt(selectedPlayerString);
    selectedPlayerElement.innerText = selectedPlayer;

    const playerExpensesElement = document.getElementById('player-expenses');
    const playerExpensesString = playerExpensesElement.innerText;
    const playerExpenses = parseInt(playerExpensesString);

    const totalExpenses = perPlayer * selectedPlayer;
    playerExpensesElement.innerText = totalExpenses;

})







document.getElementById('calculate-total').addEventListener('click', function () {
    const playerExpensesElement = document.getElementById('player-expenses');
    const playerExpensesString = playerExpensesElement.innerText;
    const playerExpenses = parseInt(playerExpensesString);
    playerExpensesElement.innerText = playerExpenses;


    const managerAmountElement = document.getElementById('manager-amount');
    const managerAmountString = managerAmountElement.value;
    const managerAmount = parseInt(managerAmountString);
    managerAmountElement.value = managerAmount;


    const coachAmountElement = document.getElementById('coach-amount');
    const coachAmountString = coachAmountElement.value;
    const coachAmount = parseInt(coachAmountString);
    coachAmountElement.value = coachAmount;


    const totalElement = document.getElementById('total');
    const totalString = totalElement.innerText;
    const total = parseInt(totalString);
    const totalAmount = playerExpenses + managerAmount + coachAmount;
    totalElement.innerText = totalAmount;


})

