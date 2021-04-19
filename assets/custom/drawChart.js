// draw chart
var annotationsAtServer = { "annotationsList": [{ "enabled": true, "type": "ellipse", "xAnchor": "2007-04-01", "valueAnchor": 34.73, "secondXAnchor": "2008-03-02", "secondValueAnchor": 26.03 }] };
initTooltip('bottom');

var chart;
var $strokeSettings = $('#select-stroke-settings');
var $colorPickerFill = $('.color-picker[data-color="fill"]');
var $colorPickerStroke = $('.color-picker[data-color="stroke"]');
var $annotationLabel;
var $markerSize = $('#select-marker-size');
var $markerSize = $('.volume-btn[data-el-size="marker"]');
var $fontSize = $('.volume-btn[data-el-size="label"]');
var $markerSizeBtn = $('.select-marker-size');
var $fontSettings = $('#select-font-style');
var $labelMethod = $('[data-label-method]');

// page UI elements
createPageColorPicker();

// init selectpicker
$('.selectpicker').selectpicker({
    iconBase: 'ac',
    tickIcon: 'ac-check'
});

// init volume bars
// marker-size, font-size
initVolumeBar();

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

    var response1 = [{ "value": 340.251, "year": 2018, "month": 5 }, { "value": 595.901, "year": 2018, "month": 12 }, { "value": 584.005, "year": 2019, "month": 4 }, { "value": 565.047, "year": 2018, "month": 8 }, { "value": 632.163, "year": 2018, "month": 10 }, { "value": 625.251, "year": 2019, "month": 1 }, { "value": 613.48, "year": 2019, "month": 3 }, { "value": 533.066, "year": 2019, "month": 2 }, { "value": 193.445, "year": 2019, "month": 5 }, { "value": 628.272, "year": 2018, "month": 9 }, { "value": 557.891, "year": 2018, "month": 7 }, { "value": 265.35, "year": 2018, "month": 6 }, { "value": 602.136, "year": 2018, "month": 11 }];
    var response2 = [{ "value": 430.68199999999996, "year": 2019, "month": 3 }, { "value": 177.968, "year": 2018, "month": 6 }, { "value": 380.965, "year": 2018, "month": 7 }, { "value": 428.803, "year": 2019, "month": 1 }, { "value": 423.926, "year": 2018, "month": 10 }, { "value": 403.75399999999996, "year": 2018, "month": 11 }, { "value": 307.317, "year": 2018, "month": 5 }, { "value": 138.43699999999998, "year": 2019, "month": 5 }, { "value": 429.65099999999995, "year": 2018, "month": 9 }, { "value": 418.836, "year": 2018, "month": 12 }, { "value": 386.404, "year": 2019, "month": 2 }, { "value": 387.98699999999997, "year": 2018, "month": 8 }, { "value": 412.883, "year": 2019, "month": 4 }];
    var response3 = [{ "value": 452.219, "year": 2019, "month": 2 }, { "value": 497.604, "year": 2018, "month": 7 }, { "value": 585.758, "year": 2018, "month": 10 }, { "value": 232.339, "year": 2018, "month": 6 }, { "value": 488.38100000000003, "year": 2018, "month": 12 }, { "value": 142.924, "year": 2019, "month": 5 }, { "value": 539.653, "year": 2019, "month": 1 }, { "value": 441.36, "year": 2019, "month": 4 }, { "value": 569.816, "year": 2018, "month": 9 }, { "value": 270.34, "year": 2018, "month": 5 }, { "value": 469.769, "year": 2019, "month": 3 }, { "value": 524.575, "year": 2018, "month": 11 }, { "value": 521.705, "year": 2018, "month": 8 }];

    var res = [response1, response2, response3];

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

    chart = anychart.stock();

    for (j = 0; j < res.length; j++) {
        var table = anychart.data.table('x');
        table.addData(convertSeries(res[j]));
        var plot = chart.plot(0);
        mapping = table.mapAs({ 'value': 'value' });

        if (j === 0) {
            plot.column(mapping);
        }
        if (j === 1) {
            plot.line(mapping);
        }
        if (j == 2) {
            plot.marker(mapping);
        }
    }
    chart.container('chart_2');
    chart.draw();


    $("#export").click(function (e) {
        // e.preventDefault();
        save();
        chart.saveAsCsv();
        $("#chart_2").empty();
    });

    $("#annotation_load").click(function () {
        load(plot);
    })

    // send annotations to the server
    function sendAnnotationsToServer(data) {
        /* here a variable for saving annotations is used,
        but you can save them to a database, local storage, or server*/
        annotationsAtServer = data;
        download(annotationsAtServer, 'annotation.json', 'text/plain');
    }

    // save annotations
    function save() {
        sendAnnotationsToServer(plot.annotations().toJson(true));
    }

    function download(content, fileName, contentType) {

        var a = document.createElement("a");
        var file = new Blob([content], { type: contentType });

        a.href = URL.createObjectURL(file);

        a.download = fileName;
        a.click();
        URL.revokeObjectURL(file);
    }

    // add annotation items in context menu
    chart.contextMenu().itemsFormatter(contextMenuItemsFormatter);

    // use annotation events to update application UI elements
    chart.listen('annotationDrawingFinish', onAnnotationDrawingFinish);
    chart.listen('annotationSelect', onAnnotationSelect);
    chart.listen('annotationUnSelect', function () {
        $colorPickerFill.removeAttr('disabled');
        // $markerSizeBtn.removeAttr('disabled');
        $('.drawing-tools-solo').find('.bootstrap-select').each(function () {
            $(this).removeClass('open');
        })
    });
    chart.listen('chartDraw', function () {
        hidePreloader();

        var $body = $('body');
        var $textArea = '<textarea id="annotation-label"></textarea>';

        if (!$body.find('#annotation-label').length) {
            $body.find('[data-annotation-type="label"]').length ?
                $body.find('[data-annotation-type="label"]').after($textArea) :
                $body.append($textArea);
            $annotationLabel = $('#annotation-label');
        }
    });

    // add textarea for label annotation and listen events
    chart.listen('annotationDrawingFinish', function (e) {
        if (e.annotation.type === 'label') {

            $annotationLabel.val(e.annotation.text())
                .focus()
                .on('change keyup paste', function (e) {
                    if (e.keyCode === 46) return;

                    try {
                        var annotation = chart.annotations().getSelectedAnnotation();
                        annotation.enabled();
                    } catch (err) {
                        annotation = null;
                    }

                    if (annotation) {
                        $(this).val() ? annotation.text($(this).val()) : annotation.text(' ') && $(this).val(' ');
                    }
                });

            chart.listen('annotationDrawingFinish', function (e) {
                if (e.annotation.type === 'label') {
                    $annotationLabel.val(e.annotation.text())
                        .focus();
                }
            });

            chart.listen('annotationSelect', function (e) {
                if (e.annotation.type === 'label') {
                    $annotationLabel.val(e.annotation.text())
                        .focus();
                }
            });

            chart.listen('annotationUnselect', function () {
                if (e.annotation.type === 'label') {
                    $annotationLabel.val('');
                }
            });
        }
    });



});

$("#import").click(function () {

    anychart.data.loadCsvFile("./anychart.csv", function (data) {

        console.log(data);

        csvSettings = { ignoreFirstRow: true, columnsSeparator: ",", rowsSeparator: "\n" };

        var dataTable = anychart.data.table();
        dataTable.addData(data, csvSettings);

        var columnMapping = dataTable.mapAs({ value: 1 })
        var lineMapping = dataTable.mapAs({ value: 2 })
        var scatterMapping = dataTable.mapAs({ value: 3 })

        chart = anychart.stock();
        var plot = chart.plot(0);
        plot.column(columnMapping);
        plot.line(lineMapping);
        plot.marker(scatterMapping);
        chart.container('chart_3');
        chart.draw();
        // $("#annotation_load").click(function () {
            load(plot);
        // })

    });

});

$('select.choose-drawing-tools').on('change', changeAnnotations);
$('select.choose-marker').on('change', changeAnnotations);
$('[data-annotation-type]').on('click', changeAnnotations);

$('#annotation-label-autosize').on('click', function () {
    var annotation = chart.annotations().getSelectedAnnotation();

    if (annotation && annotation.type === 'label') {
        annotation.width(null);
        annotation.height(null);
    }

    setToolbarButtonActive(null);

    $annotationLabel.focus();
});

function changeAnnotations() {
    var $that = $(this);

    setTimeout(function () {
        var $target = $that;
        var active = $target.hasClass('active');
        var markerSize = $markerSize.attr('data-volume');
        var fontSize = $fontSize.attr('data-volume');
        var fontColor = $('[data-color="fontColor"]').find('.color-fill-icon').css('background-color');

        var colorFill = $colorPickerFill.find('.color-fill-icon').css('background-color');
        var colorStroke = $colorPickerStroke.find('.color-fill-icon').css('background-color');

        var strokeType;
        var strokeWidth;
        var strokeDash;
        var STROKE_WIDTH = 1;

        if ($strokeSettings.val()) {
            switch ($strokeSettings.val()[0]) {
                case '6':
                case '7':
                case '8':
                    strokeType = $strokeSettings.val()[0];
                    strokeWidth = $strokeSettings.val()[1] || STROKE_WIDTH;
                    break;
                default:
                    strokeWidth = $strokeSettings.val()[0];
                    strokeType = $strokeSettings.val()[1];
                    break;
            }
        }

        switch (strokeType) {
            case '6':
                strokeDash = null;
                break;
            case '7':
                strokeDash = '1 1';
                break;
            case '8':
                strokeDash = '10 5';
                break;
        }

        var strokeSettings = {
            thickness: strokeWidth,
            color: colorStroke,
            dash: strokeDash
        };

        var fontSettings = normalizeFontSettings($fontSettings.val());

        if (active) {
            chart.annotations().cancelDrawing();
            setToolbarButtonActive(null);
        } else {
            var type = $target.data().annotationType || $target.find('option:selected').data().annotationType;

            if (!$target.data().annotationType) {
                var markerType = $target.find('option:selected').data().markerType;
            }

            setToolbarButtonActive(type, markerType);

            if (type) {

                if (!$target.data().annotationType) {
                    var markerAnchor = $target.find('option:selected').data().markerAnchor;
                }

                var drawingSettings = {
                    type: type,
                    size: markerSize,
                    markerType: markerType,
                    anchor: markerAnchor,
                    fontSize: fontSize,
                    fontColor: fontColor
                };

                $.extend(drawingSettings, fontSettings);

                if (type === 'label') {
                    drawingSettings.anchor = fontSettings.anchor;

                    drawingSettings.background = {
                        fill: colorFill,
                        stroke: strokeSettings
                    };
                    drawingSettings.hovered = {
                        background: {
                            stroke: strokeSettings
                        }
                    };
                    drawingSettings.selected = {
                        background: {
                            stroke: strokeSettings
                        }
                    };
                } else {
                    drawingSettings.fill = colorFill;
                    drawingSettings.stroke = strokeSettings;
                    drawingSettings.hovered = {
                        stroke: strokeSettings
                    };
                    drawingSettings.selected = {
                        stroke: strokeSettings
                    };
                }

                chart.annotations().startDrawing(drawingSettings);
            }
        }

        var annotation = chart.annotations().getSelectedAnnotation();

        if (annotation.fill || annotation.background) {
            $colorPickerFill.removeAttr('disabled');
        } else {
            $colorPickerFill.attr('disabled', 'disabled');
        }

        $target.val('');
    }, 1);
}

$('.btn[data-action-type]').click(function (evt) {
    var annotation = chart.annotations().getSelectedAnnotation();
    var $target = $(evt.currentTarget);
    $target.blur();
    var type = $target.attr('data-action-type');

    switch (type) {
        case 'removeAllAnnotations':
            removeAllAnnotation();
            break;
        case 'removeSelectedAnnotation':
            removeSelectedAnnotation();
            break;
        case 'unSelectedAnnotation':
            chart.annotations().unselect(annotation).cancelDrawing();
            setToolbarButtonActive(null);
            break;
    }

});

$strokeSettings.on('change', function () {
    var strokeWidth;
    var strokeType;
    var STROKE_WIDTH = 1;
    var colorStroke = $colorPickerStroke.find('.color-fill-icon').css('background-color');

    if ($(this).val()) {
        switch ($(this).val()[0]) {
            case '6':
            case '7':
            case '8':
                strokeType = $(this).val()[0];
                strokeWidth = $(this).val()[1] || STROKE_WIDTH;
                break;
            default:
                strokeType = $(this).val()[1];
                strokeWidth = $(this).val()[0];
                break;
        }

        updatePropertiesBySelectedAnnotation(colorStroke, strokeWidth, strokeType);
    }
});

$markerSize.on('change', function () {
    var annotation = chart.annotations().getSelectedAnnotation();

    if (annotation && annotation.type === 'marker') {
        annotation.size($(this).val());
    }
});

$('body').on('change', '.volume-bar', function () {
    var annotation = chart.annotations().getSelectedAnnotation();

    var $popover = $(this).closest('.popover');

    $popover.prev('.volume-btn')
        .attr('data-volume', $(this).val());

    $popover.find('.volume-bar-value').text($(this).val() + 'px');

    if (annotation && annotation.type === 'label' &&
        $popover.prev('.volume-btn').attr('data-el-size') === 'label') {
        annotation.fontSize($(this).val());
        $annotationLabel.focus();
    } else if (annotation && annotation.type === 'marker' &&
        $popover.prev('.volume-btn').attr('data-el-size') === 'marker') {
        annotation.size($(this).val());
    }
});

$fontSettings.on('change', function () {
    var annotation = chart.annotations().getSelectedAnnotation();

    if (annotation && annotation.type === 'label') {

        var fontSettings = normalizeFontSettings($(this).val());

        $labelMethod.each(function () {
            var method = $(this).data().labelMethod;

            annotation[method](fontSettings[method]);
        });

        $annotationLabel.focus();
    }
});

$('html').keyup(function (e) {
    if (e.keyCode === 46) {
        removeSelectedAnnotation();
    }
})

//import paragraph

function initVolumeBar() {
    $('.volume-btn').on('mouseenter', function () {
        var self = this;

        $(this).popover({
            placement: 'bottom',
            html: true,
            trigger: 'manual',
            content: function () {
                return '<div id="volume-popover">\n' +
                    '     <div class="volume-bar-value text-center">' + $(this).attr('data-volume') + 'px' +
                    '     </div>\n' +
                    '     <input type="range" id="volume-bar" class="volume-bar" step="1" value="' + $(this).attr('data-volume') + '"' +
                    '      min="5" max="35">\n' +
                    '   </div>'
            }
        });

        $(this).popover('show');

        $(this).siblings('.popover').on('mouseleave', function () {
            setTimeout(function () {
                if (!$('.popover:hover').length) {
                    $(self).popover('hide')
                }
            }, 100);
        });
    }).on('mouseleave', function () {
        var self = this;

        setTimeout(function () {
            if (!$('.popover:hover').length) {
                $(self).popover('hide')
            }
        }, 100);
    });
}

function createPageColorPicker() {
    var colorPicker = $('.color-picker');
    var strokeWidth;
    var STROKE_WIDTH = 1;
    colorPicker.colorpicker({
        'color': '#e06666',
        'align': 'left'
    });

    colorPicker.on('create', function () {
        var color = $(this).data('color');

        if ($(this).find('.color-fill-icon[data-color]').length) {
            color = $(this).find('.color-fill-icon').attr('data-color');
        }

        $('.color-fill-icon', $(this)).css('background-color', color);
    });

    colorPicker.on('showPicker', function () {
        $(this).parent('div').find('.tooltip.in').tooltip('hide');
    });

    colorPicker.on('changeColor', function () {
        var color = $(this).data('color');
        var annotation = chart.annotations().getSelectedAnnotation();
        var _annotation = annotation;

        if (annotation) {
            if (annotation.type === 'label') {
                $annotationLabel.focus();
                annotation = annotation.background();
            }

            switch ($(this).attr('data-color')) {
                case 'fill':
                    annotation.fill(color);
                    break;
                case 'stroke':
                    strokeWidth = annotation.stroke().thickness || STROKE_WIDTH;
                    strokeDash = annotation.stroke().dash || '';
                    var settings = {
                        thickness: strokeWidth,
                        color: color,
                        dash: strokeDash
                    };

                    setAnnotationStrokeSettings(annotation, settings);
                    break;
                case 'fontColor':
                    if (_annotation.type === 'label') _annotation.fontColor(color);
                    break;
            }
        }

        if (color === null) {
            $('.color-fill-icon', $(this)).addClass('colorpicker-color');
        } else {
            $('.color-fill-icon', $(this)).removeClass('colorpicker-color')
                .css('background-color', color);
        }
    });
}

function removeSelectedAnnotation() {
    var annotation = chart.annotations().getSelectedAnnotation();
    if (annotation) chart.annotations().removeAnnotation(annotation);

    return !!annotation;
}

function removeAllAnnotation() {
    chart.annotations().removeAllAnnotations();
}

function onAnnotationDrawingFinish() {
    setToolbarButtonActive(null);
}

function onAnnotationSelect(evt) {
    var annotation = evt.annotation;
    var colorFill;
    var colorStroke;
    var strokeWidth;
    var strokeDash;
    var strokeType;
    var markerSize;
    var fontColor;
    var fontSize;

    var $colorPickerFontColor = $('.color-picker[data-color="fontColor"]');

    var fontSettings = [];

    if (annotation.fill || annotation.background) {
        $colorPickerFill.removeAttr('disabled');
        colorFill = annotation.fill ? annotation.fill() : annotation.background().fill();
        colorStroke = annotation.stroke ? annotation.stroke() : annotation.background().stroke();
    } else {
        $colorPickerFill.attr('disabled', 'disabled');
    }

    if (annotation.type === 'label') {
        $annotationLabel.focus();

        fontSize = annotation.fontSize();

        $fontSize.attr('data-volume', fontSize);

        fontColor = annotation.fontColor();

        fontSettings = [];

        $labelMethod.each(function () {
            var method = $(this).data().labelMethod;

            fontSettings.push(annotation[method]());
        });

        // update font settings select
        $fontSettings.val(fontSettings).selectpicker('refresh');

        annotation = annotation.background();
    }

    if (annotation.fill && typeof annotation.fill() === 'function') {
        colorFill = $colorPickerFill.find('.color-fill-icon').css('background-color');
    }

    if (colorStroke !== 'none') {
        colorStroke = annotation.stroke().color;
        strokeWidth = annotation.stroke().thickness;
        strokeDash = annotation.stroke().dash;
    }

    if (annotation.type === 'marker') {
        markerSize = annotation.size();
        $markerSize.attr('data-volume', markerSize);
    } else {
        $markerSizeBtn.attr('disabled', 'disabled');
    }

    if (annotation.fill !== undefined) {
        annotation.fill(colorFill);
    }

    if (fontSize) {
        evt.annotation.fontSize(fontSize);
    }

    switch (strokeDash) {
        case '1 1':
            strokeType = 7;
            break;
        case '10 5':
            strokeType = 8;
            break;
        default:
            if (strokeWidth) {
                strokeType = 6;
            }
            break;
    }

    $colorPickerFill.find('.color-fill-icon').css('background-color', colorFill);
    $colorPickerStroke.find('.color-fill-icon').css('background-color', colorStroke);
    $colorPickerFontColor.find('.color-fill-icon').css('background-color', fontColor);
    $strokeSettings.val([strokeWidth, strokeType]).selectpicker('refresh');
}

function contextMenuItemsFormatter(items) {
    // insert context menu item on 0 position
    items['annotations-remove-selected'] = {
        text: "Remove selected annotation",
        action: removeSelectedAnnotation,
        index: -10
    };

    // insert context menu item on 1 position
    items['annotations-remove-all'] = {
        text: "Remove all annotations",
        action: removeAllAnnotation,
        index: -5
    };

    // insert context menu separator
    items['annotations-separator'] = {
        index: -4
    };

    return items;
}

function setToolbarButtonActive(type, markerType) {
    var $buttons = $('.btn[data-annotation-type]');
    $buttons.removeClass('active');
    $buttons.blur();

    if (type) {
        var selector = '.btn[data-annotation-type="' + type + '"]';
        if (markerType) selector += '[data-marker-type="' + markerType + '"]';
        $(selector).addClass('active');
    }
}

function updatePropertiesBySelectedAnnotation(colorStroke, strokeWidth, strokeType) {
    var annotation = chart.annotations().getSelectedAnnotation();
    if (annotation === null) return;

    if (annotation.type === 'label') {
        $annotationLabel.focus();
        annotation = annotation.background();
    }

    switch (strokeType) {
        case '6':
            strokeType = null;
            break;
        case '7':
            strokeType = '1 1';
            break;
        case '8':
            strokeType = '10 5';
            break;
    }

    var settings = {
        thickness: strokeWidth,
        color: colorStroke,
        dash: strokeType
    };

    setAnnotationStrokeSettings(annotation, settings);
}

function setAnnotationStrokeSettings(annotation, settings) {
    annotation.stroke(settings);
    if (annotation.hovered || annotation.selected) {
        annotation.hovered().stroke(settings);
        annotation.selected().stroke(settings);
    }
}

function hidePreloader() {
    $('#loader-wrapper').fadeOut('slow');
}

function initTooltip(position) {
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip({
            'placement': position,
            'animation': false
        }).on('show.bs.tooltip', function () {
            if ($(this).hasClass('color-picker') && $('.colorpicker-visible').length) {
                return false
            }
        })
    });
}

function normalizeFontSettings(val) {
    var fontMethods = {};

    $labelMethod.each(function () {
        fontMethods[$(this).data().labelMethod] = null;
    });

    val && val.forEach(function (item) {
        if (item) {
            $fontSettings.find('[data-label-method]').each(function () {
                var $that = $(this);
                var $el = $(this).find('option').length ? $(this).find('option') : $(this);

                $el.each(function () {
                    if ($(this).val() === item) {
                        fontMethods[$that.attr('data-label-method')] = item;
                    }
                });
            });
        }
    });

    return fontMethods
}



// load annotations from the server
function getAnnotationsFromServer() {
    /* here a variable for load annotations is used,
    but you can load them from a database, local storage, or server*/

    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "/annotation.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
}

// load all saved annotations
function load(plot) {
    var annotations = getAnnotationsFromServer();
    plot.annotations().fromJson(annotations);
}


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