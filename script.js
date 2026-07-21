document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".hero button");

  button.addEventListener("click", () => {
    alert("Welcome to HK BAZAR!\nOrder system coming soon.");
  });
});
document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    alert("Thanks for choosing HK BAZAR! Payment system coming soon.");
  });
});
