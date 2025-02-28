let total = 0;

function addExpense() {
    let name = document.getElementById('expenseName').value;
    let amount = document.getElementById('expenseAmount').value;
    let category = document.getElementById('expenseCategory').value;
    
    if (name && amount) {
        total += parseFloat(amount);
        document.getElementById('totalAmount').innerText = total.toFixed(2);

        let li = document.createElement('li');
        li.innerHTML = `${name} - $${amount} <strong>(${category})</strong>`;
        document.getElementById('expenseList').appendChild(li);

        document.getElementById('expenseName').value = '';
        document.getElementById('expenseAmount').value = '';
    }
}
