<script>
  import { _ } from "svelte-i18n";
  // error-input class is used to show error message
  let errorMessage;
  const showSnackbar = (snackbar) => {
    snackbar.classList.add("show");
        setTimeout(function () {
          snackbar.classList.remove("show");
        }, 3000);
  }
  const onSendClick = () => {
    errorMessage = "";
    const name = document.querySelector(".name");
    name.classList.remove("error-input");
    const email = document.querySelector(".email");
    email.classList.remove("error-input");
    const message = document.querySelector(".textarea");
    message.classList.remove("error-input");
    if (name.value === "") {
      errorMessage = $_("contact.error.required");
      name.classList.add("error-input");
      return;
    } else if (email.value === "") {
      errorMessage = $_("contact.error.required");
      email.classList.add("error-input");
      return;
    } else if (message.value === "") {
      errorMessage = $_("contact.error.required");
      message.classList.add("error-input");
      return;
    }
    if (!email.value.includes("@")) {
      errorMessage = $_("contact.error.email");
      email.classList.add("error-input");
      return;
    }
    const data = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "andrej.koman123@gmail.com",
      Password: process.env.STMP_PASS,
      To: "andrej.koman123@gmail.com",
      From: "andrej.koman123@gmail.com",
      Subject: data.email,
      Body: data.name + "\n" + data.message,
    })
      .then((message) => {
        // Show snackbar
        var snackbar = document.getElementsByClassName("snackbar")[0];
        showSnackbar(snackbar);
      })
      .catch((err) => {
        var snackbar = document.getElementsByClassName("snackbar")[0];
        snackbar.innerHTML = err;
        showSnackbar(snackbar);
      });
    // Reset the form
    name.value = "";
    email.value = "";
    message.value = "";
  };

  const resetInput = (e) => {
    e.target.classList.remove("error-input");
    errorMessage = "";
  };
</script>

<section class="contact-section">
  <h1 id="contact-title">{$_("contact.title")}</h1>
  <input
    type="text*"
    class="contact-input name"
    placeholder="{$_('contact.name')}*"
    required
    on:input={resetInput}
    on:focusout={resetInput}
  />
  <br />
  <input
    on:input={resetInput}
    on:focusout={resetInput}
    type="email*"
    class="contact-input email"
    placeholder="{$_('contact.email')}*"
    required
  />
  <textarea
    on:input={resetInput}
    on:focusout={resetInput}
    class="contact-input textarea"
    placeholder="{$_('contact.message')}*"
    rows="100"
    cols="75"
    required
  />
  {#if errorMessage}
    <span class="contact-error">{errorMessage}</span>
  {/if}
  <button on:click={onSendClick} class="contact-button" light block outlined
    >{$_("contact.send")}</button
  >
</section>
<div class="snackbar">{$_("contact.snackbar")}</div>

<style>
  .contact-section {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(10, 10%);
  }

  #contact-title {
    grid-column: 5 / 7;
    font-size: 30px;
    justify-self: center;
    margin-top: 100px;
  }

  .contact-input {
    height: 40px;
    border: 1px solid gray;
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 20px;
    font-family: monospace;
  }

  .contact-input.name,
  .contact-input.email,
  .contact-input.textarea,
  .contact-button {
    grid-column: 5 / 7;
    width: 100%;
    justify-self: center;
  }

  .contact-input.textarea {
    height: 250px;
    resize: none;
    padding-top: 10px;
  }

  .contact-button {
    margin-bottom: 100px;
    width: 100px;
    padding: 10px;
    background-color: gray;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: monospace;
  }

  .contact-error {
    color: rgb(186, 48, 48);
    grid-column: 5 / 7;
    margin-top: -15px;
    margin-left: -10px;
    margin-bottom: 20px;
  }

  .snackbar {
    visibility: hidden;
    min-width: 150px;
    margin-left: -125px;
    background-color: #696969;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 51.5%;
    bottom: 30px;
  }
</style>
