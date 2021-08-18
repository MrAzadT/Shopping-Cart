// function iPhoneCart(e) {
//   const phoneInput = document.getElementById("phoneInput");
//   const phoneInputNumber = phoneInput.value;

//   console.log(phoneInputNumber);
// }

document.getElementById("buttonP").addEventListener("click", () => {
  const phoneInput = document.getElementById("phoneInput");
  const phoneInputNumber = phoneInput.value;
  phoneInput.value = parseFloat(phoneInputNumber) + 1;
});
