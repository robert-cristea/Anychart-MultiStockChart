
var GetDigitalTwinAndDatasetOptions = function () {

    
    //* BEGIN:DIGITAL TWIN HANDLERS *//
    // this function handles to get data using API.

    // get data using API
    var getDigitalTwin = function () {        
        // const URL = 'https://app.alphax.cloud/template/ajax/enterprise.collection.php';
		// fetch(URL, {
        //         mode: 'no-cors',
        //         method: 'get',
        //         headers: {
        //             'Content-Type': 'application/x-www-form-urlencoded',
        //             'Content-Type': 'application/json',
        //             'Accept': 'application/json',
        //             'Access-Control-Allow-Origin': '*',
        //             'Access-Control-Allow-Credentials': 'true',
        //             'Access-Control-Allow-Headers': 'X-Requested-With',
        //         },
        //     })
        //     .then(response => response.json())
        //     .then(response => {
                const response = [{"_id":{"$oid":"5a8d0056d84e7e7aa17444b1"},"type":"site","name":"Sibelco, Pasir Gudang, Johor, Malaysia","prefix":"PG"},{"_id":{"$oid":"5ac055a7325899665e1b7c32"},"type":"site","name":"City of Casey","prefix":"CoC"},{"_id":{"$oid":"5ae1d01f3258992c3479d262"},"type":"site","name":"Sibelco, Galong, NSW, Australia","prefix":"GAL"},{"_id":{"$oid":"5b18d5ac3258994429598fe2"},"type":"site","name":"Engie Services","prefix":"ENG"},{"_id":{"$oid":"5bff61543258991fc2585922"},"type":"site","name":"Inasolve","prefix":"INN"},{"_id":{"$oid":"5c478567d220dc592422bbd1"},"type":"site","name":"Bureau of Meterology","prefix":"BOM"},{"_id":{"$oid":"5c482842d220dcd360049cb3"},"type":"site","name":"Australia Post - Hobart GPO","prefix":"AP-Hobart","sensor":[["5c496ba3d220dcafc63ea4af","1"],["5c496dfdd220dcb32a07c3bb","1"]]},{"_id":{"$oid":"5d50fad7b5ef9feb2f3661c7"},"type":"site","name":"City of Whittlesea","prefix":"COW","sensor":[],"heatData":[]},{"_id":{"$oid":"5a938a643258995bee2117f2"},"type":"site","name":"Minnovation","prefix":"PDL","polygon":[{"lat":-38.09762089445075,"lng":145.48165226165477},{"lat":-38.09511322942733,"lng":145.4817166346702},{"lat":-38.09166821597144,"lng":145.49084687415575},{"lat":-38.09607577769199,"lng":145.48946285431168},{"lat":-38.10152575703825,"lng":145.4875102061461}],"sensor":[["5d6c417a3552abab41bd9c53","1"]],"heatData":[]},{"_id":{"$oid":"5db52d37b5ef9f7e393b13d4"},"type":"site","name":"City of Frankston","prefix":"CoF","sensor":[["5e1bdd54d99a40bcb06a4843","1"],["5e1bde02d99a40c3a6684dc2","1"]],"heatData":[]},{"_id":{"$oid":"5d074263d220dc9711114201"},"type":"site","name":"Seven Mile Waste Facility","prefix":"KA","polygon":[],"sensor":[["5fc714a6d99a40ca5d02a172","1"],["603f045ad99a4004cb2ec562","1"],["5fb5f45cd99a40129c7561e2","1"]],"heatData":[]},{"_id":{"$oid":"5bdeb0d83258993a43546d42"},"type":"site","name":"Clayton Sites","prefix":"CLA","sensor":[["5fd2b1b8d99a40643d740803","1"],["5fd29cfdd99a4040663397b3","1"]],"heatData":[]},{"_id":{"$oid":"5db79a6ab5ef9f9e5c748bb3"},"type":"site","name":"City of Banyule","prefix":"COB"},{"_id":{"$oid":"5db79aa4b5ef9f9e5c748bb5"},"type":"site","name":" Mitchell Shire Council","prefix":"MSC"},{"_id":{"$oid":"5db79acdb5ef9f9e5c748bb8"},"type":"site","name":"City of Moreland","prefix":"COM","sensor":[],"heatData":[],"polygon":[]},{"_id":{"$oid":"5db79ae7b5ef9f9e5c748bba"},"type":"site","name":"Nillumbik Shire Council","prefix":"NSC"},{"_id":{"$oid":"5dba43e0b5ef9fc48a65a264"},"type":"site","name":"City of Glen Eira","prefix":"COG","sensor":[["5e4cb989d99a40481e725795","1"],["5e55e2c9d99a40674f281e12","1"],["5e55daa2d99a40555e315874","1"],["5e55d7add99a404d151e9dd5","1"],["5e55d88bd99a404d151e9dd7","1"],["5e55dc3ad99a404d19025c17","1"],["5e55d9b3d99a40555e315872","1"],["5e546a38d99a405c304adc62","1"]]},{"_id":{"$oid":"5ba321873258992dca6b8b12"},"type":"site","name":"Run Energy","prefix":"RE","sensor":[["5da942d4257f9ca477cc8c5b","1"],["5daf88a8257f9ca477d8ca36","1"]],"heatData":[]},{"_id":{"$oid":"5cc67f69d220dc764d4b729f"},"type":"site","name":"AP Maryvale","prefix":"AP","polygon":[],"sensor":[["5cc6806ad220dc7b1e067d4d","1"],["5f88fdbcd99a40d71230df12","1"]],"heatData":[]},{"_id":{"$oid":"5a8fa5c6d84e7e5c5f0a8ab2"},"type":"site","name":"Eastlink","prefix":"EL","polygon":[{"lat":-37.80024096372179,"lng":145.19557368830598},{"lat":-37.803106274730226,"lng":145.19411456660188},{"lat":-37.80619186996653,"lng":145.20327699259676},{"lat":-37.809819822529825,"lng":145.21110904292024},{"lat":-37.80905695010823,"lng":145.2154220350162},{"lat":-37.80407265633413,"lng":145.21010053233064},{"lat":-37.800902199204934,"lng":145.2008737333194}],"sensor":[["5bee57f332589906536090f2","1"],["5a8fa5b2d84e7e5ae30f0b94","1"],["5b6d286932589983a267eaf2","1"],["5b6e2e343258993888296bd2","1"],["5b6e43f732589949333a1d22","1"],["5b6e72f932589969125e8c02","1"],["5b6e75173258996a670d78d2","1"],["5bee5bb93258990a4126cd32","1"],["5bef7d3e32589921416d9e52","1"],["5afd2a9a3258992ba86d8552","2"],["5bee59ac325899080a773b52","1"],["5bef77b93258991c13054982","1"],["5bef7a503258991e7c3ab582","1"]]},{"_id":{"$oid":"5df016d4d99a40ec12153db3"},"type":"site","name":"Clayton Regional Landfill","prefix":"CRLJV","sensor":[["5ddb6d02b5ef9f5ffc418824","1"],["5ddb6d02b5ef9f5ffc418824","2"],["5fd2b1b8d99a40643d740803","1"],["5fd29cfdd99a4040663397b3","1"]],"heatData":[]},{"_id":{"$oid":"5e3c8a4ad99a40c5116b8b92"},"type":"site","name":"EnviroEye","prefix":"ENV"},{"_id":{"$oid":"5ee6fe66d99a403bd72862e6"},"type":"site","name":"Whittlesea Waterway Education","prefix":"WWE"},{"_id":{"$oid":"5f20f33ed99a404d89423395"},"type":"site","name":"Dexus","prefix":"DXS","sensor":[["5f17dceed99a40476f3475a2","1"],["5f17dceed99a40476f3475a2","2"],["5f17dceed99a40476f3475a2","3"],["5f17dceed99a40476f3475a2","4"]]},{"_id":{"$oid":"5f2e08c6d99a40c18e596cda"},"type":"site","name":"City of Ballarat","prefix":"BAL"},{"_id":{"$oid":"5f80f641d99a40b3aa4fe252"},"type":"site","name":"Kilmany Landfill","prefix":"KM","sensor":[["5f83d46cd99a4003cc79bd14","1"]],"heatData":[]},{"_id":{"$oid":"5f80f650d99a40b3d7696662"},"type":"site","name":"Wingfield","prefix":"ACC","sensor":[["5fc6e9a9d99a4078501f37a2","1"]],"heatData":[]},{"_id":{"$oid":"5f80f65ed99a40b3e50c6012"},"type":"site","name":"Lucas Heights","prefix":"LH2","sensor":[["5f839e73d99a409cfd47c5a2","1"],["5f83e5aed99a4023314131e2","1"],["5f87e15dd99a40adfa611343","1"]],"heatData":[]},{"_id":{"$oid":"5fd025e1d99a40a90b1c2382"},"type":"site","name":"Westan","prefix":"WES"},{"_id":{"$oid":"5fd6b1dfd99a40b23a5ea972"},"type":"site","name":"Australia Post - Pakenham","prefix":"AP-Pakenham"},{"_id":{"$oid":"5fd9920fd99a4077e828e8b2"},"type":"site","name":"Australia Post - Moorabbin","prefix":"AP-Moorabbin","sensor":[["5f3cb277d99a407a90008b54","1"]]},{"_id":{"$oid":"5fe2d8bbd99a4040637c59f2"},"type":"site","name":"City of Casey - SoC","prefix":"SoC"},{"_id":{"$oid":"600a24d3d99a407bb03de5a3"},"type":"site","name":"Dulverton Waste Management","prefix":"DWM","sensor":[["600a2517d99a407c34330b22","1"]]},{"_id":{"$oid":"6034d084d99a40e32e26bbf6"},"type":"site","name":"OneWiFi","prefix":"OWF"}];
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
            // })
            // .catch(error => console.log('Response failed : ' + error.message));
        
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
        // const URL = 'https://dev.alphax.cloud/template/ajax/get.sensors.php';
		// fetch(URL, {
        //         mode: 'cors',
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/x-www-form-urlencoded',
        //             'Content-Type': 'application/json',
        //             'Accept': 'application/json',
        //             'Access-Control-Allow-Origin': '*',
        //             'Access-Control-Allow-Credentials': 'true',
        //             'Access-Control-Allow-Headers': 'X-Requested-With',
        //         },
        //     })
        //     .then(response => response.json())
        //     .then(response => {
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
                localStorage.setItem("dataset", data);
                drawDataset(data);
			
			// })
            // .catch(error =>console.log('Response failed : ' + error.message));
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