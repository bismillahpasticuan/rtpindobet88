
var x = [1662, 1413, 1278, 1467, 1476, 1485, 1689, 1698, 1566, 1134, 1575, 1359, 1368, 1557, 1671, 1680, 1422, 1350, 1539, 1548, 1377, 1584, 1224, 1233, 1707, 1653, 1386, 1395, 1404, 1197, 1350, 1602, 1716, 1512, 1359, 1368, 1377, 1269, 1494, 1503, 1521, 1143, 1152, 1161, 1170, 1179, 1188, 1422, 1287, 1296, 1341, 1530, 1611, 1620, 1626, 1440, 1449, 1458, 1431, 1206, 1215, 1260, 1635, 1305, 1314, 1323, 1332, 1593, 1413, 1242, 1251, 1644];
for (let i = 1; i <= 200; i++) {
    const d = new Date();
    var date = d.getUTCDate();
    var day = d.getUTCDay() + 1;
    var year = d.getUTCFullYear();
    var month = d.getUTCMonth() + 1;
    var hour = d.getUTCHours();
    var min = d.getMinutes();
    if (min < 30) {
        min = 1;
    } else {
        min = 2;
    }
    var xx = day + year * month * date;
    xx = Math.pow(xx, hour * min);
    xx = xx * x[i];
    // xx = xx * 2 - 1;
    // xx = xx/2;

    if (i == 39 || i == 92 || i == 85 || i == 52 || i == 31 || i == 97) {
        xx = xx % 27;
        xx += 65;
    } else {
        xx = xx % 83;
        xx += 8;
    }
    const as = "percent-bar-" + i;
    const asd = "percent-txt-" + i;
    var percentTxt = document.getElementById("percent-txt-" + i);
    var bar = document.getElementById("percent-bar-" + i);
    const bartext = document.getElementById("card-title" + i);
    percentTxt.innerHTML = xx + "%";
    $("#percent-bar-" + i)
        .attr("aria-valuenow", xx)
        .css("width", xx + "%");
    if (xx < 30) {
        bar.classList.add("red");
    } else if (xx > 70) {
        bar.classList.add("green");
    } else {
        bar.classList.add("yellow");
    }
}