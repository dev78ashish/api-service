// Retrieve bank lists
fetch('http://localhost:3000/banks')
  .then(response => response.json())
  .then(bankList => {
    console.log(bankList);
  })
  .catch(error => {
    console.error(error);
  });
