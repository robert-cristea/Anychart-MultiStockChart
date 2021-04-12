// draw chart
jQuery("#import").click(function() {
    anychart.fromJsonFile("testJson.json", function (data) {
    // set additional settings
    console.log(data)
    chart = anychart.bar(data);
    chart.title("Create a chart from JSON file");
    // display chart
    chart.container("chart_2");
    chart.draw();
});
});
// Group By Data

