
document.getElementById('btn-deposit').addEventListener('click', function(){

    const newWithdrawAmount = getInputFieldValueById('withdraw-field'); 

    const previousWithdrawTotal = getTextElementValueById('withdraw-total');

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount ;
    
    setTextElementValueById('withdraw-total' , newWithdrawTotal); 
});