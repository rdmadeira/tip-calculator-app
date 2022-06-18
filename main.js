window.onload = () => {
    const customRadio = document.getElementById('custom');
    const customInput = document.getElementById('custom-input');
    customInput.addEventListener('focus', ()=> {
        customRadio.checked = true;
        customInput.style.backgroundColor = 'var(--Strong_cyan)';
    });
    customInput.addEventListener('input', ()=> {
        customRadio.setAttribute('value', customInput.value);
    });
    let inputsAll = document.querySelectorAll('input');
    inputsAll.forEach(item => item.addEventListener('input',calculate))
    
    function calculate() {
        const bill = document.getElementById('bill-input').value;
        let tipValue;
        let tipInputs = document.getElementsByName('select-tip');
        tipInputs.forEach( item => item.checked ? tipValue = item.value : tipValue );
        const people = document.getElementById('number-of-people').value;
        const resultTipDiv = document.getElementById('result-tip-amount');
        const resultTotalDiv = document.getElementById('result-total');
        const resultTip = Number(bill) * (Number(tipValue)/100) / Number(people,10);
        resultTipDiv.textContent = resultTip.toFixed(2);
        const resultTotal = Number(bill) / Number(people) + resultTip;
        resultTotalDiv.textContent = resultTotal.toFixed(2);
        console.log(bill);
        console.log(tipValue);
        console.log(people)
    } 

}