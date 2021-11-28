console.log("Map.js运行成功！");

const YEARS_for_Map = [
    710, 715, 718, 720, 721, 724, 725, 726,
    727, 728, 730, 731, 732, 733, 734, 735,
    736, 737, 738, 739, 740, 741, 742, 743,
    744, 745, 746, 747, 748, 749, 750, 751,
    752, 753, 754, 755, 756, 757, 758, 759,
    760, 761, 762
];
//[X, Y, RANGE] 0 -> TOTAL
const DATA_for_Map = [
    [100, 100, 1], [100, 100, 1], [100, 100, 1], [100, 100, 1],
    [100, 100, 1], [100, 100, 1], [100, 100, 1], [100, 100, 1],
    [100, 100, 1], [100, 100, 1], [100, 100, 1], [100, 100, 1],
    [100, 100, 1], [100, 100, 1], [100, 100, 1], [100, 100, 1],
    [100, 100, 1], [100, 100, 1], [100, 100, 1], [100, 100, 1],
    [100, 100, 1], [100, 100, 1], [100, 100, 1], [100, 100, 1],
    [100, 100, 1], [100, 100, 1], [100, 100, 1], [100, 100, 1],
    [100, 100, 1], [100, 100, 1], [100, 100, 1], [100, 100, 1],
    [100, 100, 1], [100, 100, 1], [100, 100, 1], [100, 100, 1],
    [100, 100, 1], [100, 100, 1], [100, 100, 1], [100, 100, 1],
    [100, 100, 1], [100, 100, 1], [100, 100, 1]
];

const show_years = document.querySelector(".SHOW_YEARS");
const Input_for_Map = document.getElementById("INPUT_TIME");
// show_years.textContent = "WAITING_FOR_INPUT";

Input_for_Map.value = 0;
show_years.textContent = "现在是：" + YEARS_for_Map[Input_for_Map.value] + "年";

Input_for_Map.addEventListener("input", () => {
    show_years.textContent = "现在是：" + YEARS_for_Map[Input_for_Map.value] + "年";
});

var map = new BMap.Map("map");
    // 创建地图实例
var point = new BMap.Point(116.404, 39.915);
    // 创建点坐标
map.centerAndZoom(point, 15);
    // 初始化地图，设置中心点坐标和地图级别

var PLACE_POINT = [];