// Compare to chart
jQuery("#addChart").click(function() {
    const URL = 'https://dev.alphax.cloud/template/ajax/get.sensors.php';
		fetch(URL, {
                mode: 'cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': 'true',
                    'Access-Control-Allow-Headers': 'X-Requested-With',
                },
            })
            .then(response => response.json())
            .then(response => {
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
			})
            .catch(error => console.log('Response failed : ' + error.message));
    
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