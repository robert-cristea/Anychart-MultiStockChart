<!DOCTYPE html>
<!-- 
Template Name: Metronic - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.2
Version: 3.2.0
Author: KeenThemes
Website: http://www.keenthemes.com/
Contact: support@keenthemes.com
Follow: www.twitter.com/keenthemes
Like: www.facebook.com/keenthemes
Purchase: http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes
License: You must have a valid license purchased only from themeforest(the above link) in order to legally use the theme for your project.
-->
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
<!--<![endif]-->
<!-- BEGIN HEAD -->
<head>
<meta charset="utf-8"/>
<title>Charts</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<meta http-equiv="Content-type" content="text/html; charset=utf-8">
<meta content="" name="description"/>
<meta content="" name="author"/>
<!-- BEGIN GLOBAL MANDATORY STYLES -->
<link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css">
<link href="assets/font-awesome.min.css" rel="stylesheet" type="text/css">
<link href="assets/simple-line-icons.min.css" rel="stylesheet" type="text/css">
<link href="assets/bootstrap.min.css" rel="stylesheet" type="text/css">
<link href="assets/uniform.default.css" rel="stylesheet" type="text/css">
<!-- END GLOBAL MANDATORY STYLES -->
<!-- BEGIN THEME STYLES -->
<link href="assets/components-rounded.css" id="style_components" rel="stylesheet" type="text/css">
<link href="assets/plugins.css" rel="stylesheet" type="text/css">
<link href="assets/layout.css" rel="stylesheet" type="text/css">
<link href="assets/default.css" rel="stylesheet" type="text/css" id="style_color">
<link href="assets/custom.css" rel="stylesheet" type="text/css">
<!-- END THEME STYLES -->
<link rel="shortcut icon" href="favicon.ico"/>
</head>
<!-- END HEAD -->
<!-- BEGIN BODY -->
<!-- DOC: Apply "page-header-menu-fixed" class to set the mega menu fixed  -->
<!-- DOC: Apply "page-header-top-fixed" class to set the top menu fixed  -->
<body>
<!-- BEGIN HEADER -->
<div class="page-header">
	<!-- BEGIN HEADER TOP -->
	<div class="page-header-top">
		<div class="container">
			<!-- BEGIN LOGO -->
			<div class="page-logo">
				<a href="#"><img src="assets/logo-default.png" alt="logo" class="logo-default"></a>
			</div>
			<!-- END LOGO -->
			<!-- BEGIN RESPONSIVE MENU TOGGLER -->
			<a href="javascript:;" class="menu-toggler"></a>
			<!-- END RESPONSIVE MENU TOGGLER -->
		</div>
	</div>
	<!-- END HEADER TOP -->
	<!-- BEGIN HEADER MENU -->
	<div class="page-header-menu">
		<div class="container">
			<!-- BEGIN MEGA MENU -->
			<!-- DOC: Apply "hor-menu-light" class after the "hor-menu" class below to have a horizontal menu with white background -->
			<!-- DOC: Remove data-hover="dropdown" and data-close-others="true" attributes below to disable the dropdown opening on mouse hover -->
			<div class="hor-menu ">
				<ul class="nav navbar-nav">
					<li>
						<a href="#">Dashboard</a>
					</li>
				</ul>
			</div>
			<!-- END MEGA MENU -->
		</div>
	</div>
	<!-- END HEADER MENU -->
</div>
<!-- END HEADER -->
<!-- BEGIN PAGE CONTAINER -->
<div class="page-container">
	<!-- BEGIN PAGE HEAD -->
	<div class="page-head">
		<div class="container">
			<!-- BEGIN PAGE TITLE -->
			<div class="page-title" style="width: 100%;">
				<h1 style="display: inline-block;">My Chart <small>You will be able to analyse time series data</small></h1>
				<div class="clearfix" style="display: inline-block;float: right;">
					<a href="#portlet-config" data-toggle="modal" class="btn yellow" data-original-title="" title="">
						Create Chart
					</a>
					<a href="#portlet-config" data-toggle="modal" class="btn purple" data-original-title="" title="">
						Update Chart
					</a>
					<button type="button" class="btn red">Export</button>
					<button type="button" class="btn green">Import</button>
				</div>
			</div>
			<!-- END PAGE TITLE -->
		</div>
	</div>
	<!-- END PAGE HEAD -->
	<!-- BEGIN PAGE CONTENT -->
	<div class="page-content">
		<div class="container">
			<!-- BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM-->
			<div class="modal fade" id="portlet-config" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
							<h4 class="modal-title">Create Alert Wizard</h4>
							<small>Please complete this form to create a new alert. All the * marked fields are necessary to Complete</small>
						</div>
						<div class="modal-body">
							 <!-- BEGIN FORM-->
							 <form action="javascript:;" class="horizontal-form create-chart-form" to-text="alert1">
								<div class="form-body">
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<label class="control-label">Name <span class="required" aria-required="true"> * </span></label>
												<input type="text" id="firstName" class="form-control" placeholder="Chee Kin">
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label class="control-label">Digital Twin <span class="required" aria-required="true"> * </span></label>
												<select class="select2_category form-control" id="digitalTwin" tabindex="1">
												</select>
											</div>
										</div>
									</div>
									<!--/row-->
									<div class="row chartData" id="chart1">
										<div class="col-md-4">
											<div class="form-group">
												<label class="control-label">Dataset <span class="required" aria-required="true"> * </span></label>
												<select class="select2_category form-control" data-placeholder="Choose a Category" tabindex="1">
													<option value="Category 1">Axial Fans</option>
													<option value="Category 2">Category 2</option>
													<option value="Category 3">Category 5</option>
													<option value="Category 4">Category 4</option>
												</select>
											</div>
										</div>
										<div class="col-md-4">
											<div class="form-group">
												<label class="control-label">Chart Type <span class="required" aria-required="true"> * </span></label>
												<select class="select2_category form-control" data-placeholder="Choose a Category" tabindex="1">
													<option value="line">Line</option>
													<option value="scatter">Scatter</option>
													<option value="bar">Bar</option>
													<option value="area">Area</option>
												</select>
											</div>
										</div>
										<div class="col-md-4">
											<div class="form-group">
												<label class="control-label">Aggregation <span class="required" aria-required="true"> * </span></label>
												<select class="select2_category form-control" data-placeholder="Choose a Category" tabindex="1">
													<option value="none">None</option>
													<option value="annual">Annual</option>
													<option value="monthly">Monthly</option>
													<option value="weekly">Weekly</option>
													<option value="daily">Daily</option>
													<option value="hourOfDay">Hour of Day</option>
													<option value="dayOfWeek">Day of Week</option>
													<option value="dayOfMonth">Day of Month</option>
													<option value="monthOfYear">Month of Year</option>
												</select>
											</div>
										</div>
									</div>
								</div>
								<div class="hidden">
									<button type="submit" id="sendRequest"><i class="fa fa-check"></i> Save</button>
								</div>
							</form>
							<!-- END FORM-->
							<div class="form-actions">
								<a id="addChart"><i class="fa fa-plus-square"></i> Compare To...</a>
							</div>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn blue" id="drawChart"><i class="fa fa-bar-chart-o"></i> OK</button>
							<button type="button" class="btn default" data-dismiss="modal">Close</button>
						</div>
					</div>
					<!-- /.modal-content -->
				</div>
				<!-- /.modal-dialog -->
			</div>
			<!-- END SAMPLE PORTLET CONFIGURATION MODAL FORM-->
			<!-- BEGIN PAGE CONTENT INNER -->
			<div class="row">
				<div class="col-md-12">
					<!-- BEGIN ROW -->
					<div class="row">
						<div class="col-md-12">
							<!-- BEGIN CHART PORTLET-->
							<div class="portlet light">
								<div class="portlet-title">
									<div class="caption">
										<i class="icon-bar-chart font-green-haze"></i>
										<span class="caption-subject bold uppercase font-green-haze"> Line & Area</span>
										<span class="caption-helper">duration on value axis</span>
									</div>
									<div class="tools">
										<a href="javascript:;" class="fullscreen">
										</a>
									</div>
								</div>
								<div class="portlet-body">
									<div id="chart_2" class="chart" style="height: 90vh;">
									</div>
								</div>
							</div>
							<!-- END CHART PORTLET-->
						</div>
					</div>
					<!-- END ROW -->
				</div>
			</div>
			<!-- END PAGE CONTENT INNER -->
		</div>
	</div>
	<!-- END PAGE CONTENT -->
</div>
<!-- END PAGE CONTAINER -->

<!-- BEGIN FOOTER -->
<div class="page-footer">
	<div class="container">
		 2021 &copy; F. All Rights Reserved.
	</div>
</div>
<div class="scroll-to-top">
	<i class="icon-arrow-up"></i>
</div>

<script src="assets/jquery.min.js" type="text/javascript"></script>
<script src="assets/jquery-migrate.min.js" type="text/javascript"></script>
<!-- IMPORTANT! Load jquery-ui.min.js before bootstrap.min.js to fix bootstrap tooltip conflict with jquery ui tooltip -->
<script src="assets/jquery-ui.min.js" type="text/javascript"></script>
<script src="assets/bootstrap.min.js" type="text/javascript"></script>
<script src="assets/bootstrap-hover-dropdown.min.js" type="text/javascript"></script>
<script src="assets/jquery.slimscroll.min.js" type="text/javascript"></script>
<script src="assets/jquery.blockui.min.js" type="text/javascript"></script>
<script src="assets/jquery.cokie.min.js" type="text/javascript"></script>
<script src="assets/jquery.uniform.min.js" type="text/javascript"></script>
<!-- END CORE PLUGINS -->
<!-- BEGIN PAGE LEVEL PLUGINS -->

<!-- END PAGE LEVEL PLUGINS -->
<!-- BEGIN PAGE LEVEL SCRIPTS -->
<script src="assets/metronic.js" type="text/javascript"></script>
<script src="assets/layout.js" type="text/javascript"></script>
<script src="assets/custom/getDigitalTwinAndDatasetOptions.js"></script>
<script src="assets/custom/compareTo.js"></script>
<script src="assets/custom/drawChart.js"></script>
<script>
	jQuery(document).ready(function() {       
	// initiate layout and plugins
		Metronic.init(); // init metronic core components
		Layout.init(); // init current layout
		localStorage.removeItem("digitalTwin");
		localStorage.removeItem("dataset");
		GetDigitalTwinAndDatasetOptions.init();
	});
</script>
<!-- END PAGE LEVEL SCRIPTS -->
</body>
<!-- END BODY -->
</html>