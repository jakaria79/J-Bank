
    document.getElementById('btn-deposit').addEventListener('click', function(){

    const newDepositAmount = getInputFieldValueById('deposit-field'); 

    const previousDepositTotal = getTextElementValueById('deposit-total');

    const newDepositTotal = previousDepositTotal + newDepositAmount ;
    
    setTextElementValueById('deposit-total' , newDepositTotal) 
});