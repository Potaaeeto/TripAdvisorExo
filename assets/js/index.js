const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  const modal = $.querySelector(".modal");
  const body = $.querySelector("body");
  const form = $.querySelector("#contactForm");
  const submitButton = $.querySelector("#submit-btn");

  console.log("document loaded");
  // ----------------------------------------
  // When the button "Connectez-vous" is clicked
  // ----------------------------------------
  $.querySelector(".btn-signup").addEventListener("click", () => {
    // Display modal
    modal.classList.remove("hidden");
    // Disable scroll
    body.classList.add("disable");
  });

  // // ----------------------------------------
  // // Submit the form (=> when the back is running)
  // // ----------------------------------------
  // Function to empty the form
  const cleanForm = () => {
    form.reset();
  };

  // // Function to deactivate the submit button
  // const isDisabled = () => {
  //   submitButton.setAttribute("disabled", "disabled");
  //   submitButton.classList.add("disabled-btn");
  // };

  // // Function to reactivate the submit button
  // const isEnabled = () => {
  //   submitButton.removeAttribute("disabled");
  //   submitButton.classList.remove("disabled-btn");
  // };

  // When the submit button is clicked
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    // isDisabled();

    const data = {
      firstname: $.querySelector("#firstname").value,
      lastname: $.querySelector("#lastname").value,
      email: $.querySelector("#email").value,
      message: $.querySelector("#message").value,
    };

    try {
      const response = await axios.post("http://localhost:3000/form", data);

      if (response.status === 200) {
        alert("Votre formulaire a bien été envoyé");
        // cleanForm();
        // isEnabled();
      }
    } catch (error) {
      if (error.response?.data.message === "Missing parameters") {
        alert("Veuillez remplir tous les champs du formulaire");
      } else {
        alert("Une erreur est survenue");
        cleanForm();
      }

      // isEnabled();
    }
  });

  // ----------------------------------------
  // When the cross on the modal is clicked
  // ----------------------------------------
  $.querySelector(".icon-times").addEventListener("click", () => {
    // Hide modal
    modal.classList.add("hidden");
    // Enable scroll
    body.classList.remove("disable");
  });
});