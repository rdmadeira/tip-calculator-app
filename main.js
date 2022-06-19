window.onload = () => {
    const customRadio = document.getElementById('custom');
    const customInput = document.getElementById('custom-input');
    customInput.addEventListener('focus', ()=> {
        customRadio.checked = true;
        calculate();
    });
    customInput.addEventListener('input', ()=> {
        customRadio.setAttribute('value', customInput.value);
    });

    let inputstxtAll = document.querySelectorAll('input[type="text"]');
    inputstxtAll.forEach(item => item.addEventListener('input',calculate));
    let inputCheck = document.querySelectorAll('input[type="radio"]');
    inputCheck.forEach( item => item.addEventListener('change',calculate));

    function calculate() {
        let bill = document.getElementById('bill-input').value;
        let tipValue;
        let tipInputs = document.getElementsByName('select-tip');
        tipInputs.forEach( item => item.checked ? tipValue = item.value : tipValue );
        let people = document.getElementById('number-of-people').value;
        people = Number(people);
        const requiredNumPos = document.getElementById('required-num');
        const resultTipDiv = document.getElementById('result-tip-amount');
        const resultTotalDiv = document.getElementById('result-total');
        const resultTip = Number(bill) * (Number(tipValue)/100) / Number(people,10);
        const resultTotal = Number(bill) / Number(people) + resultTip;
        resultTipDiv.textContent = '$0.00';
        resultTotalDiv.textContent = '$0.00';
        if(people===0 || people==''){
            requiredNumPos.textContent = 'Can´t be zero!';
            document.getElementById('number-of-people').style.outline = 'solid hsl(0deg 76% 52%) 2px';
        } else if(people < 0 || isNaN(people)) {
            requiredNumPos.textContent = 'Only (+) numbers!';
            document.getElementById('number-of-people').style.outline = 'solid hsl(0deg 76% 52%) 2px';
        } else if(!Number.isInteger(people)) {
            requiredNumPos.textContent = 'Only integer numbers!';
            document.getElementById('number-of-people').style.outline = 'solid hsl(0deg 76% 52%) 2px';
        }
        else {
            requiredNumPos.textContent = '✅';
            document.getElementById('number-of-people').style.outline = 'solid var(--Strong_cyan) 2px';
            resultTipDiv.textContent = '$'+resultTip.toFixed(2);
            resultTotalDiv.textContent = '$'+resultTotal.toFixed(2);
        }
        console.log(bill);
        console.log(tipValue);
        console.log(people);
    } 

}