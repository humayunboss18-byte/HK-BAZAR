const submitBtn = document.querySelector(".order button");

submitBtn.addEventListener("click", function () {

  const uid = document.querySelector('input[placeholder="Free Fire UID"]').value.trim();
  const trx = document.querySelector('input[placeholder="Transaction ID"]').value.trim();

  if (uid === "" || trx === "") {
    alert("Please fill all fields!");
    return;
  }

  alert("Order Submitted Successfully!");
});
