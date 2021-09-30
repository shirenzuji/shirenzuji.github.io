console.log("SUCCESS!");

const show_years = document.querySelector(".SHOW_YEARS");
const Input = document.getElementById("INPUT_TIME");
show_years.textContent = "WAITING_FOR_INPUT";
Input.addEventListener("input", () => {
    show_years.textContent = Input.value;
});