function iPhoneCart(e) {
  const phoneInput = document.getElementById("phoneInput");
  const phoneInputNumber = phoneInput.value;
  if (e == true) {
    phoneInput.value = parseFloat(phoneInputNumber) + 1;
  } else if (phoneInputNumber > 0) {
    phoneInput.value = parseFloat(phoneInputNumber) - 1;
  }
  const PhoneAmount = document.getElementById("PhoneAmount");
  PhoneAmount.innerText = phoneInputNumber * 1219;
}

document.getElementById("buttonP").addEventListener("click", () => {
  iPhoneCart(true);
});
document.getElementById("BtnMinus").addEventListener("click", () => {
  iPhoneCart(false);
});
