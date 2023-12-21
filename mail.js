function main() {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const form = document.querySelector("#form");

  const submitBtn = document.querySelector("#submitBtn");
  const name = document.querySelector("#name");
  const nameError = document.querySelector("#nameError");

  const email = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");

  const message = document.querySelector("#message");
  const messageError = document.querySelector("#messageError");

  function error(first, number, errorLabel, content) {
    submitBtn.addEventListener("click", function () {
      if (first.value.length < number) {
        errorLabel.textContent = content;
      } else {
        errorLabel.textContent = "";
      }
    });
  }

  function emailControl() {
    submitBtn.addEventListener("click", function () {
      if (!re.test(email.value)) {
        emailError.textContent = "This is not a valid email address.";
      } else {
        emailError.textContent = "";
      }
    });
  }

  function checkFormAndLog() {
    const isNameValid = name.value.length >= 4;
    const isMessageValid = message.value.length >= 20;
    const isEmailValid = re.test(email.value);

    if (isNameValid && isMessageValid && isEmailValid) {
      (async () => {
        const rawResponse = await fetch(
          "https://cuttybackend.onrender.com/send-email",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              subject: "Yeni Bir Mailin Var Berk!",
              text: "",
              to: "bicakciberk.com@gmail.com",
              html: `
                  ${name.value}
    
        ${message.value}
                    `,
            }),
          }
        );
        const content = await rawResponse.json();

        console.log(content);

        const successEmail = document.querySelector(".successEmail");

        successEmail.classList.remove("hidden");
        setTimeout(() => {
          successEmail.classList.add("hidden");
        }, 3000);
      })();
    }
  }

  error(name, 4, nameError, "This content must be at least 4 characters.");
  error(
    message,
    20,
    messageError,
    "This content must be at least 20 characters."
  );
  emailControl();

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    checkFormAndLog();
  });
}

main();
