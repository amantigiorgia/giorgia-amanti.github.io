

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("newsletterForm");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    successMessage.style.display = "block"; 
    form.reset(); 
  });
});



