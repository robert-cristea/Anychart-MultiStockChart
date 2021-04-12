// draw chart
jQuery("#drawChart").click(function () {
    const chartName = $('#firstName').val();
    const digitalTwin = $("#digitalTwin option:selected").val();
    const charts = [];
    const _block = $(".chartData");
    for (let i = 0; i < _block.length; i++) {
        const data = {};
        const element = _block.eq(i);
        data.channelID = element.find('select').eq(0).children("option:selected").val();
        data.networkID = element.find('select').eq(0).children("option:selected").attr("networkID");
        data.chartType = element.find('select').eq(1).children("option:selected").val();
        data.aggregation = element.find('select').eq(2).children("option:selected").val();
        charts.push(data);
    }
    // const _data = {
    //     chartName: chartName,
    //     digitalTwin: digitalTwin,
    //     charts: charts
    // }

    const _data = {
        chartName: "General Chart",
        digitalTwin: "Sibelco, Pasir Gudang, Johor, Malaysia",
        charts: charts
    }

    // var extraXScale = anychart.scales.linear();
    // columnseries.xScale(extraXScale);
    // var extraXAxis = chart.xAxis(1);
    // var extraXAxis2 = chart.xAxis(2);
    // extraXAxis.orientation("bottom");
    // extraXAxis2.orientation("bottom");
    // extraXAxis.scale(extraXScale);
    // extraXAxis2.scale(extraXScale);
    // extraXAxis.title('Extra X Axis');
    // extraXAxis2.title('Extra X Axis2');
    var chart = anychart.column();

    // var res1 = { data: [{ "value": 380.965, "month": 7 }, { "value": 430.68199999999996, "month": 3 }, { "value": 177.968, "month": 6 }, { "value": 387.98699999999997, "month": 8 }, { "value": 418.836, "month": 12 }, { "value": 445.754, "month": 5 }, { "value": 428.803, "month": 1 }, { "value": 403.75399999999996, "month": 11 }, { "value": 423.926, "month": 10 }, { "value": 412.883, "month": 4 }, { "value": 429.65099999999995, "month": 9 }, { "value": 386.404, "month": 2 }], type: "line" };
    // var res2 = { data: [{ "value": 413.264, "month": 5 }, { "value": 524.575, "month": 11 }, { "value": 441.36, "month": 4 }, { "value": 497.604, "month": 7 }, { "value": 521.705, "month": 8 }, { "value": 488.38100000000003, "month": 12 }, { "value": 452.219, "month": 2 }, { "value": 539.653, "month": 1 }, { "value": 569.816, "month": 9 }, { "value": 469.769, "month": 3 }, { "value": 232.339, "month": 6 }, { "value": 585.758, "month": 10 }], type: "area" };
    // var res3 = { data: [{ "value": 380.965, "month": 7 }, { "value": 430.68199999999996, "month": 3 }, { "value": 177.968, "month": 6 }, { "value": 387.98699999999997, "month": 8 }, { "value": 418.836, "month": 12 }, { "value": 445.754, "month": 5 }, { "value": 428.803, "month": 1 }, { "value": 403.75399999999996, "month": 11 }, { "value": 423.926, "month": 10 }, { "value": 412.883, "month": 4 }, { "value": 429.65099999999995, "month": 9 }, { "value": 100.404, "month": 6 }], type: "column" };
    // var res4 = { data: [{ "value": 413.264, "month": 5 }, { "value": 524.575, "month": 11 }, { "value": 441.36, "month": 4 }, { "value": 497.604, "month": 7 }, { "value": 521.705, "month": 8 }, { "value": 488.38100000000003, "month": 12 }, { "value": 452.219, "month": 2 }, { "value": 539.653, "month": 1 }, { "value": 569.816, "month": 9 }, { "value": 469.769, "month": 3 }, { "value": 232.339, "month": 6 }, { "value": 1185.758, "month": 1 }], type: "scatter" };

    // var res = [res1, res2, res3, res4];

    var response = [{ "value": 340.251, "year": 2018, "month": 5 }, { "value": 595.901, "year": 2018, "month": 12 }, { "value": 584.005, "year": 2019, "month": 4 }, { "value": 565.047, "year": 2018, "month": 8 }, { "value": 632.163, "year": 2018, "month": 10 }, { "value": 625.251, "year": 2019, "month": 1 }, { "value": 613.48, "year": 2019, "month": 3 }, { "value": 533.066, "year": 2019, "month": 2 }, { "value": 193.445, "year": 2019, "month": 5 }, { "value": 628.272, "year": 2018, "month": 9 }, { "value": 557.891, "year": 2018, "month": 7 }, { "value": 265.35, "year": 2018, "month": 6 }, { "value": 602.136, "year": 2018, "month": 11 }];

    function convertSeries(response) {
        var arr = [];
        for (i = 0; i < response.length; i++) {
            var item = {};
            item.x = Date.UTC(response[i].year, response[i].month);
            item.value = response[i].value;
            arr.push(item);
        }
        return arr;
    }

    function drawPlot(series) {
        var type = series.type;
        var dataset = anychart.data.set(series.data);
        var mapping = dataset.mapAs({ x: 'month', value: 'value' });

        if (type == "area") {
            return chart.area(mapping).name('area');
        }
        if (type == "line") {
            return chart.line(mapping).name('line');
        }
        if (type == "column") {
            return chart.column(mapping).name('column');
        }
        if (type == "scatter") {
            return chart.marker(mapping).name('scatter');
        }
    }
    var chart = anychart.stock();

    var table = anychart.data.table('x');
    table.addData(convertSeries(response));
    var mapping = table.mapAs({ 'value': 'value' });
    var plot = chart.plot(0);
    var series = plot.column(mapping);
    chart.container('chart_2');
    chart.draw();

    // chart.listen("annotationDrawingFinish", function () {
    //     document.getElementById("typeSelect").value = "default";
    // });

    // var res = [{ data: convertSeries(response), type: "line" }];

    // for (let i = 0; i < res.length; i++) {
    //     var anonySeries = drawPlot(res[i]);

    //     var dateTimeScale = anychart.scales.dateTime();
    //     var dateTimeTicks = dateTimeScale.ticks();
    //     dateTimeTicks.interval(0, 6);
    //     anonySeries.xScale(dateTimeScale);

    //     var yScale = anychart.scales.linear();
    //     yScale.ticks().interval(250);
    //     yScale.minimum(0);
    //     yScale.maximum(1500);
    //     anonySeries.yScale(yScale);

    //     var xAxis = chart.xAxis(i);
    //     xAxis.orientation("bottom");
    //     xAxis.scale(dateTimeScale);
    //     xAxis.title(res[i].type);

    //     var yAxis = chart.yAxis(i);
    //     yAxis.orientation("left");
    //     yAxis.scale(yScale);
    //     yAxis.title(res[i].type);
    // }

    // var tooltiptitle = chart.tooltip().title();
    // tooltiptitle.fontWeight(900);
    // tooltiptitle.text("tooltip");


    // var tooltip = chart.tooltip();
    // tooltip.format(function () {
    //     var value = (this.value).toFixed(0);
    //     var date = new Date(this.x);
    //     var options = { year: "numeric", month: "numeric"};
    //     var transformedDate = date.toLocaleDateString("en-US", options);
    //     tooltip.title().text(transformedDate);

    //     return "Value: $" + value + " mil.\n" + transformedDate;
    // });

    // var controller = chart.annotations();
    // controller.startDrawing('triangle');

    // // controller.ellipse({
    // //     xAnchor: "2018-05-01",
    // //     valueAnchor: 340.251,
    // //     secondXAnchor: "2018-12-01",
    // //     secondValueAnchor: 595.901,
    // // });

    // chart.container('chart_2');
    // chart.draw();

    // create annotations
    $("#typeSelect").click(function () {
        var select = document.getElementById("typeSelect");
        plot.annotations().startDrawing(select.value);
    });

    $("#removeAll").click(function () {
        plot.annotations().removeAllAnnotations();
    });

    $("#export").click(function () {
        chart.saveAsCsv();
    });

});

//import paragraph

$("#import").click(function () {
    // fetch("./c.json")
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(data => {
    //         console.log(data);
    //         var chart = anychart.stock();

    //         // create data table on loaded data
    //         var dataTable = anychart.data.table();
    //         dataTable.addData(data);
    //         var mapping = dataTable.mapAs({ 'value': 'value' });
    //         var plot = chart.plot(0);
    //         var series = plot.column(mapping);
    //         chart.container('chart_2');
    //         chart.draw();

    //     });

    anychart.data.loadCsvFile("./anychart.csv", function (data) {
            
            console.log(data);
            var chart = anychart.stock();
            var plot = chart.plot(0);
            var column = plot.column(data);

            chart.container('chart_2');
            chart.draw();
});

//     anychart.data.loadJsonFile(
//         './c.json',
//         function (data) {
//             console.log(data);
//             var chart = anychart.fromJson(data);
//             chart.container('chart_2');
//             chart.draw();
//         }
//     )

});


// get RAW chart data from backend using API
function getRawData(_request) {
    var res = [];
    // for(var i=0; i< _request.charts.length; i ++) {
    //     var el = _request.charts[i];
    //     // const URL = "https://dev.alphax.cloud/template/ajax/chart.raw.php?id="+el.networkID+"&ch="+el.channelID;
    //     const URL1 = "https://dev.alphax.cloud/template/ajax/chart.raw.php?id=240ac4027660&ch=1";
    //     // const URL2 = "https://dev.alphax.cloud/template/ajax/chart.raw.php?id=240ac4027660&ch=2";
    //     fetch(URL1, {
    //             mode: 'cors',
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/x-www-form-urlencoded',
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json',
    //                 'Access-Control-Allow-Origin': '*',
    //                 'Access-Control-Allow-Credentials': 'true',
    //                 'Access-Control-Allow-Headers': 'X-Requested-With',
    //                 'app-id': 'f33f9ae5db6d4ed1bc5f3e608cc7f73c',
    //                 'app-secret': 'AF6bC78Bee144a80BC81014383124cC9',
    //             }
    //         })
    //         .then(response => response.json())
    //         .then(response => {
    //             console.log(response);

    //         })
    //         .catch(error => {

    //             // console.log('Response failed : ' + error.message));
    //         });

    //     }

    var res1 = [{ "value": 0.7857142, "timestamp": 1608519615 }, { "value": 0.4190476, "timestamp": 1605045049 }, { "value": 0.77, "timestamp": 1605041147 }, { "value": 0.8380953, "timestamp": 1605037244 }, { "value": 0.6338095, "timestamp": 1605033342 }, { "value": 0.4190476, "timestamp": 1605029439 }, { "value": 0.2042857, "timestamp": 1605021634 }, { "value": 0.6704762, "timestamp": 1605017732 }, { "value": 0.7752381, "timestamp": 1605013829 }, { "value": 0.3352381, "timestamp": 1605009927 }, { "value": 0.5919047, "timestamp": 1604994317 }, { "value": 0.2933333, "timestamp": 1604990415 }, { "value": 0.3404762, "timestamp": 1604986512 }, { "value": 0.2514286, "timestamp": 1604982611 }, { "value": 0.4819048, "timestamp": 1604978707 }, { "value": 0.2933333, "timestamp": 1604974805 }, { "value": 0.4819048, "timestamp": 1604970904 }, { "value": 0.7857142, "timestamp": 1604967000 }, { "value": 0.5971429, "timestamp": 1604963098 }, { "value": 0.5028572, "timestamp": 1604959196 }, { "value": 0.8380953, "timestamp": 1604955293 }, { "value": 0.5866666, "timestamp": 1604951390 }, { "value": 1.005714, "timestamp": 1604943585 }, { "value": 0.8380953, "timestamp": 1604939684 }, { "value": 0.7123809, "timestamp": 1604935781 }, { "value": 0.2514286, "timestamp": 1604931878 }, { "value": 0.5080953, "timestamp": 1604927976 }, { "value": 0.6914286, "timestamp": 1604924074 }, { "value": 0.7385715, "timestamp": 1604920171 }, { "value": 0.8380953, "timestamp": 1604916269 }, { "value": 0.1885714, "timestamp": 1604908464 }, { "value": 0.7123809, "timestamp": 1604904562 }, { "value": 0.7019048, "timestamp": 1604900659 }, { "value": 1.047619, "timestamp": 1604896756 }, { "value": 0.7542858, "timestamp": 1604892854 }, { "value": 0.8380953, "timestamp": 1604888952 }, { "value": 0.4190476, "timestamp": 1604869439 }, { "value": 0.6390476, "timestamp": 1604865537 }, { "value": 0.7542858, "timestamp": 1604861634 }, { "value": 0.9219048, "timestamp": 1604857733 }, { "value": 0.3876191, "timestamp": 1604853830 }, { "value": 1.1, "timestamp": 1604849927 }, { "value": 0.5028572, "timestamp": 1604846025 }, { "value": 0.7647619, "timestamp": 1604842123 }, { "value": 1.026667, "timestamp": 1604838221 }, { "value": 0, "timestamp": 1604834318 }, { "value": 0.607619, "timestamp": 1604830416 }, { "value": 0.3352381, "timestamp": 1604826513 }, { "value": 1.010952, "timestamp": 1604822610 }, { "value": 0.22, "timestamp": 1604818708 }, { "value": 0.8014286, "timestamp": 1604814806 }, { "value": 0.7123809, "timestamp": 1604810903 }, { "value": 0.8380953, "timestamp": 1604807001 }, { "value": 0.6285715, "timestamp": 1604803098 }, { "value": 0.4190476, "timestamp": 1604799196 }, { "value": 0.7542858, "timestamp": 1604795294 }, { "value": 1.005714, "timestamp": 1604791391 }, { "value": 0.3352381, "timestamp": 1604787490 }, { "value": 0.8485715, "timestamp": 1604783587 }, { "value": 0.9638096, "timestamp": 1604779684 }, { "value": 0.9638096, "timestamp": 1604775782 }, { "value": 0.4766667, "timestamp": 1604771880 }, { "value": 1.157619, "timestamp": 1604767977 }, { "value": 0.44, "timestamp": 1604764076 }, { "value": 0.3876191, "timestamp": 1604760173 }];
    var res2 = [{ "value": 0.8380953, "timestamp": 1608519614 }, { "value": 1.1, "timestamp": 1605045047 }, { "value": 0.09428572, "timestamp": 1605041146 }, { "value": 0.8433333, "timestamp": 1605037243 }, { "value": 0.8852381, "timestamp": 1605033340 }, { "value": 0.3352381, "timestamp": 1605029438 }, { "value": 0.602381, "timestamp": 1605021633 }, { "value": 0.3876191, "timestamp": 1605017730 }, { "value": 0.3352381, "timestamp": 1605013828 }, { "value": 0.7123809, "timestamp": 1605009925 }, { "value": 0.08380953, "timestamp": 1604994316 }, { "value": 0.06285715, "timestamp": 1604990414 }, { "value": 0.5028572, "timestamp": 1604986511 }, { "value": 0.7542858, "timestamp": 1604982609 }, { "value": 0.8066668, "timestamp": 1604978706 }, { "value": 0.77, "timestamp": 1604974804 }, { "value": 0.8380953, "timestamp": 1604970902 }, { "value": 0.2514286, "timestamp": 1604966999 }, { "value": 0.3666667, "timestamp": 1604963097 }, { "value": 0.2514286, "timestamp": 1604959195 }, { "value": 0.8590477, "timestamp": 1604955291 }, { "value": 0.937619, "timestamp": 1604951389 }, { "value": 0.8171429, "timestamp": 1604943584 }, { "value": 0.4190476, "timestamp": 1604939683 }, { "value": 0.6914286, "timestamp": 1604935780 }, { "value": 0.6861904, "timestamp": 1604931877 }, { "value": 0.4295238, "timestamp": 1604927975 }, { "value": 0.1466667, "timestamp": 1604924072 }, { "value": 0.3352381, "timestamp": 1604920170 }, { "value": 0.5028572, "timestamp": 1604916267 }, { "value": 0.6390476, "timestamp": 1604908462 }, { "value": 0.3876191, "timestamp": 1604904560 }, { "value": 0.6809524, "timestamp": 1604900658 }, { "value": 0.4661905, "timestamp": 1604896755 }, { "value": 0.7804762, "timestamp": 1604892853 }, { "value": 0.167619, "timestamp": 1604888951 }, { "value": 0.4190476, "timestamp": 1604869438 }, { "value": 0.6704762, "timestamp": 1604865535 }, { "value": 0.7333333, "timestamp": 1604861633 }, { "value": 0.8590477, "timestamp": 1604857731 }, { "value": 0.55, "timestamp": 1604853828 }, { "value": 1.031905, "timestamp": 1604849926 }, { "value": 0.3352381, "timestamp": 1604846024 }, { "value": 0.8380953, "timestamp": 1604842122 }, { "value": 0.9428572, "timestamp": 1604838220 }, { "value": 0.6704762, "timestamp": 1604834317 }, { "value": 0.3352381, "timestamp": 1604830415 }, { "value": 0.932381, "timestamp": 1604826512 }, { "value": 0.5552382, "timestamp": 1604822610 }, { "value": 0.5866666, "timestamp": 1604818707 }, { "value": 0.7752381, "timestamp": 1604814805 }, { "value": 0.6861904, "timestamp": 1604810901 }, { "value": 0.5133333, "timestamp": 1604807000 }, { "value": 0.7752381, "timestamp": 1604803097 }, { "value": 0.9061905, "timestamp": 1604799195 }, { "value": 0.3352381, "timestamp": 1604795293 }, { "value": 0.4190476, "timestamp": 1604791390 }, { "value": 1.005714, "timestamp": 1604787488 }, { "value": 1.089524, "timestamp": 1604783585 }, { "value": 0.4557143, "timestamp": 1604779683 }, { "value": 1.089524, "timestamp": 1604775781 }, { "value": 1.194286, "timestamp": 1604771879 }, { "value": 1.162857, "timestamp": 1604767976 }, { "value": 0.4085714, "timestamp": 1604764074 }, { "value": 1.141905, "timestamp": 1604760172 }];
    res.push(res1);
    res.push(res2);
    return res1;
}
// Group By Data


// Aggregate By Data