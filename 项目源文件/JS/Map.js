console.log("Map.js运行成功！");

const show_years = document.querySelector(".SHOW_YEARS");
const Input = document.getElementById("INPUT_TIME");
show_years.textContent = "WAITING_FOR_INPUT";
Input.addEventListener("input", () => {
    show_years.textContent = "现在是：" + Input.value + "年";
});