
var GetDigitalTwinAndDatasetOptions = function () {

    
    //* BEGIN:DIGITAL TWIN HANDLERS *//
    // this function handles to get data using API.

    // get data using API
    var getDigitalTwin = function () {        
        const URL = 'https://app.alphax.cloud/template/ajax/enterprise.collection.php';
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
					obj.id = element._id.$oid;
					obj.name = element.name;
					data.push(JSON.stringify(obj));
				}
                localStorage.setItem("digitalTwin", data);
                drawDigitalTwin();
            })
            .catch(error => console.log('Response failed : ' + error.message));    
    };
    // draw options of Digital Twin from localStorage
    var drawDigitalTwin = function() {
        var digitalTwin = localStorage.getItem("digitalTwin");
		var jsonObj = $.parseJSON('[' + digitalTwin + ']');
		var options = '';
		for (let i = 0; i < jsonObj.length; i++) {
			const element = jsonObj[i];
			options += '<option value="'+element.id+'">'+element.name+'</option>';
		}
		$("#digitalTwin").html(options);
    }

    //* BEGIN:DATASET HANDLERS *//
    // this function handles to get dataset using API.
    var getDataset = function() {
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
                localStorage.setItem("dataset", data);
                drawDataset(data);
			})
            .catch(error => console.log('Response failed : ' + error.message));
    }
    var drawDataset = function(data) {
		var options = '';
		for (let i = 0; i < data.length; i++) {
			const element = data[i];
			options += '<option value="'+element.channelID+'" networkID = "'+element.networkID+'">'+element.channelDescription+'</option>';
		}
        $(".chartData").eq(0).find('select').eq(0).html(options);
    }

    return {
        
        init: function () { 
            getDigitalTwin();           
            getDataset();
        },
    };

}();