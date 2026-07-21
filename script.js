const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", function () {
    document.querySelector(".order").scrollIntoView({
      behavior: "smooth"
    });
  });
});
document.querySelector("button:last-of-type").addEventListener("click", function () {

const uid = document.querySelector('input[placeholder="Free Fire UID"]').value;

const trx = document.querySelector('input[placeholder="Transaction ID"]').value;

if(uid === "" || trx === ""){
alert("Please fill all fields!");
return;
}

alert("Order Submitted Successfully!");

});
