document.getElementById('calculate').addEventListener('click',function(){

   const input = document.getElementById('current');
   const ammount = input.value;
   const income = parseFloat(ammount);
   
      const food = document.getElementById('foodcost');
      const foodammount = food.value;
      const foodvalue = parseFloat(foodammount);
      const rent = document.getElementById('rentcost');
      const rentammount = rent.value;
      const rentvalue = parseFloat(rentammount);
      const clothes = document.getElementById('clothes');
      const clothesammount = clothes.value;
      const clothesvlue = parseFloat(clothesammount);
      const totalcost = foodvalue + rentvalue + clothesvlue ;
      const totalvalue = parseFloat(totalcost);
      const expense = document.getElementById('total');
      const expenseamount = expense.innerText;
      const expensevalue = parseFloat(expenseamount);
      expense.innerText = totalvalue;
      const bal = document.getElementById('available');
      const availablemoney = bal.innerText;
      const balancetext = parseFloat(availablemoney);
      bal.innerText = income - totalvalue ;
     
      

})
document.getElementById('save-money').addEventListener('click',function(){
   const input = document.getElementById('current');
   const ammount = input.value;
   const income = parseFloat(ammount);
   const saveamount = document.getElementById('savings');
   const savings = saveamount.value;
   const savingfloat = parseFloat(savings); 
  const parcentage = (savingfloat/100)*income ;
  const parcentamount = parseFloat(parcentage);
  const savingbal = document.getElementById('savescreen');
  const savingText = savingbal.innerText;
   const convertsave = parseFloat(savingText);
   savingbal.innerText = parcentamount;
})


