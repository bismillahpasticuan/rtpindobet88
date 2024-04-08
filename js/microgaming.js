var x = [1887, 1896, 1905, 1914, 1923, 1932, 1941, 1950, 1959, 1968, 1977, 1986, 1995, 2004, 2013, 2022, 2031, 2040, 2049, 2058, 2067, 2076, 2085, 2094, 2103, 2112, 2121, 2130, 1635, 1644, 1653, 1662, 1671, 1680, 1689, 1698, 1707, 1716, 1725, 1734, 1743, 1752, 1761, 1770, 1779, 1788, 1797, 1806, 1815, 1824, 1833, 1842, 1851, 1860, 1869, 1878, 1134, 1143, 1152, 1161, 1170, 1179, 1188, 1197, 1206, 1215, 1224, 1233, 1242, 1251, 1260, 1269, 1278, 1287, 1296, 1305, 1314, 1323, 1332, 1341, 1350, 1359, 1368, 1377, 1386, 1395, 1404, 1413, 1422, 1431, 1440, 1449, 1458, 1467, 1476, 1485, 1494, 1503, 1512, 1521, 1530, 1539, 1548, 1557, 1566, 1575, 1584, 1593, 1602, 1611, 1620, 1626];
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

    if (i == 135 || i == 89 || i == 110 || i == 63 || i == 52 || i == 126) {
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