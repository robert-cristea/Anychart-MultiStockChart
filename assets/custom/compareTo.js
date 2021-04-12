// Compare to chart
jQuery("#addChart").click(function() {
    // const URL = 'https://dev.alphax.cloud/template/ajax/get.sensors.php';
	// 	fetch(URL, {
    //             mode: 'cors',
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/x-www-form-urlencoded',
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json',
    //                 'Access-Control-Allow-Origin': '*',
    //                 'Access-Control-Allow-Credentials': 'true',
    //                 'Access-Control-Allow-Headers': 'X-Requested-With',
    //             },
    //         })
    //         .then(response => response.json())
    //         .then(response => {
                var response = [{"id":"5a8fa5b2d84e7e5ae30f0b94","channelID":"1","channelDescription":"JFN303 Motor DE","siteName":"Eastlink","tag":"JFN303","networkID":"240ac4027660"},{"id":"5a8fa5b2d84e7e5ae30f0b94","channelID":"2","channelDescription":"JFN303 Motor NDE","siteName":"Eastlink","tag":"JFN303","networkID":"240ac4027660"},{"id":"5a8fa5b2d84e7e5ae30f0b94","channelID":255,"channelDescription":"Battery Voltage","siteName":"Eastlink","tag":"JFN303","networkID":"240ac4027660"},{"id":"5a8fa5b2d84e7e5ae30f0b94","channelID":254,"channelDescription":"Signal Strength RSSI","siteName":"Eastlink","tag":"JFN303","networkID":"240ac4027660"},{"id":"5a8fa5b2d84e7e5ae30f0b94","channelID":252,"channelDescription":"Error Code","siteName":"Eastlink","tag":"JFN303","networkID":"240ac4027660"},{"id":"5ab35d92325899eed523d6b2","channelID":"1","channelDescription":"B2-BMGBIV","siteName":"Sibelco, Pasir Gudang, Johor, Malaysia","tag":"SPM001","networkID":"4D52FB"},{"id":"5ab35d92325899eed523d6b2","channelID":"2","channelDescription":"B2-BMGBIH","siteName":"Sibelco, Pasir Gudang, Johor, Malaysia","tag":"SPM001","networkID":"4D52FB"},{"id":"5ab35d92325899eed523d6b2","channelID":255,"channelDescription":"Battery Voltage","siteName":"Sibelco, Pasir Gudang, Johor, Malaysia","tag":"SPM001","networkID":"4D52FB"},{"id":"5ab35d92325899eed523d6b2","channelID":254,"channelDescription":"Signal Strength RSSI","siteName":"Sibelco, Pasir Gudang, Johor, Malaysia","tag":"SPM001","networkID":"4D52FB"},{"id":"5ab35d92325899eed523d6b2","channelID":252,"channelDescription":"Error Code","siteName":"Sibelco, Pasir Gudang, Johor, Malaysia","tag":"SPM001","networkID":"4D52FB"},{"id":"5ab364c5325899f31032bdd2","channelID":"1","channelDescription":"B2-BMPBOV","siteName":"Sibelco, Pasir Gudang, Johor, Malaysia","tag":"SPM002","networkID":"4D5301"},{"id":"5ab364c5325899f31032bdd2","channelID":"2","channelDescription":"B2-BMPBOH","siteName":"Sibelco, Pasir Gudang, Johor, Malaysia","tag":"SPM002","networkID":"4D5301"},{"id":"5ab364c5325899f31032bdd2","channelID":"3","channelDescription":"B2-BMPBIV","siteName":"Sibelco, Pasir Gudang, Johor, Malaysia","tag":"SPM002","networkID":"4D5301"},{"id":"5ab364c5325899f31032bdd2","channelID":"4","channelDescription":"B2-BMPBIH","siteName":"Sibelco, Pasir Gudang, Johor, Malaysia","tag":"SPM002","networkID":"4D5301"},{"id":"5ab364c5325899f31032bdd2","channelID":255,"channelDescription":"Battery Voltage","siteName":"Sibelco, Pasir Gudang, Johor, Malaysia","tag":"SPM002","networkID":"4D5301"}]; 
                var data = [];
                for (let index = 0; index < response.length; index++) {
					const element = response[index];
					const obj = {};
					obj.channelID = element.channelID;
					obj.networkID = element.networkID;
                    obj.channelDescription = element.channelDescription;
					data.push(obj);
				}
                var x = $('.chartData').length;
                var component = compareTo(x, data);
                $("#chart"+x).after(component);
			// })
            // .catch(error =>console.log('Response failed : ' + error.message));
    
});
function compareTo(x, dataset) {
    var txt2 = x + 1;
    var txt1 = 	'<div class="row chartData" id="chart'+txt2+'">'+
                '<div class="col-md-4">'+
                '<div class="form-group">'+
                '<label class="control-label">Dataset <span class="required" aria-required="true"> * </span></label>'+
                '<select class="select2_category form-control" data-placeholder="Choose a Category" tabindex="1">';
                for (let i = 0; i < dataset.length; i++) {
                    const element = dataset[i];
                    txt1 += '<option value="'+element.channelID+'" networkID="'+element.networkID+'">'+element.channelDescription+'</option>';
                }
                
        txt1 += '</select>'+
                '</div>'+
                '</div>'+
                '<div class="col-md-4">'+
                '<div class="form-group">'+
                '<label class="control-label">Chart Type <span class="required" aria-required="true"> * </span></label>'+
                '<select class="select2_category form-control" data-placeholder="Choose a Category" tabindex="1">'+
                '<option value="line">Line</option>'+
                '<option value="scatter">Scatter</option>'+
                '<option value="bar">Bar</option>'+
                '<option value="area">Area</option>'+
                '</select>'+
                '</div>'+
                '</div>'+
                '<div class="col-md-4">'+
                '<div class="form-group">'+
                '<label class="control-label">Aggregation <span class="required" aria-required="true"> * </span></label>'+
                '<select class="select2_category form-control" data-placeholder="Choose a Category" tabindex="1">'+
                '<option value="none">None</option>'+
                '<option value="annual">Annual</option>'+
                '<option value="monthly">Monthly</option>'+
                '<option value="weekly">Weekly</option>'+
                '<option value="daily">Daily</option>'+
                '<option value="hourOfDay">Hour of Day</option>'+
                '<option value="dayOfWeek">Day of Week</option>'+
                '<option value="dayOfMonth">Day of Month</option>'+
                '<option value="monthOfYear">Month of Year</option>'+
                '</select>'+
                '</div>'+
                '</div>'+
                '</div>';
    return txt1;
}