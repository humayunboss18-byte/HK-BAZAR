const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", function () {
    document.querySelector(".order").scrollIntoView({
      behavior: "smooth"
    });
  });
});
