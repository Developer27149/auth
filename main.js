import "./style.css";

const form = document.querySelector("form.form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = form.querySelector("input.input");
  // valid input
  if (input.value) {
    console.log(input.value);
    new Toast({
      message: "谢谢注册，请稍后检查您的邮箱 📮 ",
      type: "success",
    });
  }
});
