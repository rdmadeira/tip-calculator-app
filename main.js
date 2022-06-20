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
    const resultTipDiv = document.getElementById('result-tip-amount');
    const resultTotalDiv = document.getElementById('result-total');

    function calculate() {
        let bill = document.getElementById('bill-input').value;
        let tipValue;
        let tipInputs = document.getElementsByName('select-tip');
        tipInputs.forEach( item => item.checked ? tipValue = item.value : tipValue );
        let people = document.getElementById('number-of-people').value;
        people = Number(people);
        const requiredNumPos = document.getElementById('required-num');
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
        
    } 
    const calculatorMain = document.getElementById('calculator-main');
    const mainDiv = document.getElementById('main__div');
    const tipLabel = document.querySelectorAll('#select-tip-ctn label');
    const tipDiv = document.getElementById('select-tip-ctn');
    if(window.matchMedia('(max-width:500px)').matches) {
        inputstxtAll.forEach( item => {
            item.addEventListener('focus', changeView);
        });
        inputstxtAll.forEach( item => {
            item.addEventListener('focusout', unchangeView);
        });
        function changeView() {
            inputstxtAll.forEach( item => item.style.fontSize = '5.2vw');
            tipLabel.forEach( item => item.style.fontSize = '4vw' );
            calculatorMain.style.width = '100%';
            calculatorMain.style.paddingBottom = '8vw';
            mainDiv.style.justifyContent = 'end';
            resultTipDiv.style.fontSize = '5.5vw';
            resultTotalDiv.style.fontSize = '5.5vw';
            tipDiv.style.gridTemplate = '1fr 1fr 1fr / 1fr 1fr';
        }
        function unchangeView() {
            inputstxtAll.forEach( item => item.removeAttribute('style'));
            tipLabel.forEach( item => item.removeAttribute('style'));
            calculatorMain.removeAttribute('style');
            calculatorMain.removeAttribute('style');
            mainDiv.removeAttribute('style');
            resultTipDiv.removeAttribute('style');
            resultTotalDiv.removeAttribute('style');
            tipDiv.removeAttribute('style');
        }
    }
}
