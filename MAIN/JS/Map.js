console.log("Map.js运行成功！");

const YEARS_for_map = [
    710, 715, 718, 720, 721, 724, 725, 726,
    727, 728, 730, 731, 732, 733, 734, 735,
    736, 737, 738, 739, 740, 741, 742, 743,
    744, 745, 746, 747, 748, 749, 750, 751,
    752, 753, 754, 755, 756, 757, 758, 759,
    760, 761, 762
];

const show_years = document.querySelector(".SHOW_YEARS");
const Input_for_map = document.getElementById("INPUT_TIME");
show_years.textContent = "WAITING_FOR_INPUT";
Input_for_map.addEventListener("input", () => {
    show_years.textContent = "现在是：" + YEARS_for_map[Input_for_map.value] + "年";
});