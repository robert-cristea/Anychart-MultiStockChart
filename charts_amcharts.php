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
	<meta charset="utf-8" />
	<title>Charts</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta content="width=device-width, initial-scale=1.0" name="viewport" />
	<meta http-equiv="Content-type" content="text/html; charset=utf-8">
	<meta content="" name="description" />
	<meta content="" name="author" />
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

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" />

	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.10.0/css/bootstrap-select.min.css">

	<!-- Bootstrap -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">

	<!-- ColorPicker -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-colorpicker/2.5.1/css/bootstrap-colorpicker.css" />

	<!-- AnyChart UI -->
	<link rel="stylesheet" href="https://cdn.anychart.com/releases/v8/css/anychart-ui.min.css" />
	<link rel="stylesheet" href="https://cdn.anychart.com/fonts/latest/css/anychart-font.min.css">

	<!--style-->
	<link rel="stylesheet" href="assets/style.css" />
	<!-- END THEME STYLES -->
	<link rel="shortcut icon" href="favicon.ico" />
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
					<div class="btn-group clearfix" style="display: inline-block;float: right;">

						<a href="#portlet-config" data-toggle="modal" class="btn yellow" data-original-title="" title="">
							Create Chart
						</a>
						<a href="#portlet-config" data-toggle="modal" class="btn purple" data-original-title="" title="">
							Update Chart
						</a>
						<button type="button" class="btn red" id="export">Export</button>
						<button type="button" class="btn green" id="import">Import</button>
						<!-- <button type="button" class="btn green" id="annotation_load">Annotation Load</button> -->
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
										<table class="table-container">
											<tr>
												<td>
													<div class="toolbar">
														<div class="btn-group">
															<button type="button" class="btn btn-default color-picker" data-color="fill" data-toggle="tooltip" title="Сhoose drawing fill color"><span class="color-fill-icon dropdown-color-fill-icon"></span>&nbsp;<b class="caret"></b>
															</button>

															<button type="button" class="btn btn-default color-picker" data-color="stroke" data-toggle="tooltip" title="Сhoose drawing stroke color"><span class="color-fill-icon dropdown-color-fill-icon"></span>&nbsp;<b class="caret"></b>
															</button>

															<select class="selectpicker" id="select-stroke-settings" title="Stroke settings" data-style="btn-lg" data-width="121" multiple>
																<optgroup label="Stroke width" data-max-options="1">
																	<option data-settings="width" value="0">0 px</option>
																	<option data-settings="width" value="1" selected>1 px</option>
																	<option data-settings="width" value="2">2 px</option>
																	<option data-settings="width" value="3">3 px</option>
																	<option data-settings="width" value="4">4 px</option>
																	<option data-settings="width" value="5">5 px</option>
																</optgroup>
																<optgroup label="Stroke dash" data-max-options="1">
																	<option value="6" data-settings="type" selected>solid</option>
																	<option value="7" data-settings="type">dotted</option>
																	<option value="8" data-settings="type">dashed</option>
																</optgroup>
															</select>
														</div>
														<div class="btn-group">
															<button type="button" data-action-type="unSelectedAnnotation" class="btn btn-default" aria-label="Center Align" data-toggle="tooltip" title="Cursor">
																<i class="ac ac-mouse-pointer" aria-hidden="true"></i>
															</button>
														</div>

														<div class="select-container">
															<select class="selectpicker choose-drawing-tools" title="Drawing tools" data-style="btn-lg" data-width="133" data-max-options="1">
																<optgroup label="Lines, Trend lines and Rays:">
																	<option data-icon="ac-line" data-annotation-type="line">Line Segment</option>
																	<option data-icon="ac-horizontal-line" data-annotation-type="horizontal-line">Horizontal
																		Line
																	</option>
																	<option data-icon="ac-vertical-line" data-annotation-type="vertical-line">Vertical Line
																	</option>
																	<option data-icon="ac-infinite-line" data-annotation-type="infinite-line">Infinite Line
																	</option>
																	<option data-icon="ac-ray" data-annotation-type="ray">Ray</option>
																</optgroup>
																<optgroup label="Geometric shapes:">
																	<option data-icon="ac-triangle" data-annotation-type="triangle">Triangle</option>
																	<option data-icon="ac-rectangle" data-annotation-type="rectangle">Rectangle</option>
																	<option data-icon="ac-ellipse" data-annotation-type="ellipse">Ellipse</option>
																</optgroup>
																<optgroup label="Other tools:">
																	<option data-icon="ac-horizontal-range" data-annotation-type="horizontal-range">
																		Horizontal Range
																	</option>
																	<option data-icon="ac-vertical-range" data-annotation-type="vertical-range">
																		Vertical Range
																	</option>
																</optgroup>
																<optgroup label="Other tools:">
																	<option data-icon="ac-trend-channel" data-annotation-type="trend-channel">Trend Channel
																	</option>
																	<option data-icon="ac-finite-trend-channel" data-annotation-type="finite-trend-channel">Trend Channel
																	</option>
																	<option data-icon="ac-andrews-pitchfork" data-annotation-type="andrews-pitchfork">
																		Andrew's
																		Pitchfork
																	</option>
																</optgroup>
																<optgroup label="Fibonacci tools:">
																	<option data-icon="ac-fibonacci-fan" data-annotation-type="fibonacci-fan">Fibonacci Fan
																	</option>
																	<option data-icon="ac-fibonacci-arc" data-annotation-type="fibonacci-arc">Fibonacci Arc
																	</option>
																	<option data-icon="ac-fibonacci-retracement" data-annotation-type="fibonacci-retracement">Fibonacci
																		Retracement
																	</option>
																	<option data-icon="ac-fibonacci-timezones" data-annotation-type="fibonacci-timezones">
																		Fibonacci Time
																		Zones
																	</option>
																</optgroup>
															</select>
														</div>

														<div class="btn-group hidden-xs">
															<button data-annotation-type="line" type="button" class="btn btn-default" aria-label="Center Align" data-toggle="tooltip" title="Line Segment">
																<i class="ac ac-line" aria-hidden="true"></i>
															</button>
															<button data-annotation-type="horizontal-line" type="button" class="btn btn-default" aria-label="Center Align" data-toggle="tooltip" title="Horizontal Line">
																<i class="ac ac-horizontal-line" aria-hidden="true"></i>
															</button>
															<button data-annotation-type="vertical-line" type="button" class="btn btn-default" aria-label="Center Align" data-toggle="tooltip" title="Vertical Line">
																<i class="ac ac-vertical-line" aria-hidden="true"></i>
															</button>
															<button data-annotation-type="infinite-line" type="button" class="btn btn-default" aria-label="Center Align" data-toggle="tooltip" title="Infinite Line">
																<i class="ac ac-infinite-line" aria-hidden="true"></i>
															</button>
															<button data-annotation-type="ray" type="button" class="btn btn-default" aria-label="Center Align" data-toggle="tooltip" title="Ray">
																<i class="ac ac-ray" aria-hidden="true"></i>
															</button>
														</div>

														<div class="btn-group hidden-xs">
															<button data-annotation-type="triangle" type="button" class="btn btn-default" aria-label="Center Align" data-toggle="tooltip" title="Triangle">
																<i class="ac ac-triangle" aria-hidden="true"></i>
															</button>
															<button data-annotation-type="rectangle" type="button" class="btn btn-default" aria-label="Center Align" data-toggle="tooltip" title="Rectangle">
																<i class="ac ac-rectangle" aria-hidden="true"></i>
															</button>
															<button data-annotation-type="ellipse" type="button" class="btn btn-default" aria-label="Center Align" data-toggle="tooltip" title="Ellipse">
																<i class="ac ac-ellipse" aria-hidden="true"></i>
															</button>
														</div>

														<div class="btn-group hidden-xs">
															<button data-annotation-type="horizontal-range" type="button" class="btn btn-default" aria-label="Center Align" data-toggle="tooltip" title="Horizontal Range">
																<i class="ac ac-horizontal-range" aria-hidden="true"></i>
															</button>
															<button data-annotation-type="veertical-range" type="button" class="btn btn-default" aria-label="Center Align" data-toggle="tooltip" title="Vertical Range">
																<i class="ac ac-vertical-range" aria-hidden="true"></i>
															</button>
														</div>

														<div class="btn-group hidden-xs">
															<button data-annotation-type="trend-channel" type="button" class="btn btn-default" aria-label="Center Align" data-toggle="tooltip" title="Trend Channel">
																<i class="ac ac-trend-channel" aria-hidden="true"></i>
															</button>
															<button data-annotation-type="finite-trend-channel" type="button" class="btn btn-default" aria-label="Center Align" data-toggle="tooltip" title="Finite Trend Channel">
																<i class="ac ac-finite-trend-channel" aria-hidden="true"></i>
															</button>
															<button data-annotation-type="andrews-pitchfork" type="button" class="btn btn-default" aria-label="Center Align" data-toggle="tooltip" title="Andrew's Pitchfork">
																<i class="ac ac-andrews-pitchfork" aria-hidden="true"></i>
															</button>
														</div>

														<div class="btn-group hidden-xs">
															<button data-annotation-type="fibonacci-fan" type="button" class="btn btn-default" aria-label="Center Align" data-toggle="tooltip" title="Fibonacci Fan">
																<i class="ac ac-fibonacci-fan" aria-hidden="true"></i>
															</button>
															<button data-annotation-type="fibonacci-arc" type="button" class="btn btn-default" aria-label="Center Align" data-toggle="tooltip" title="Fibonacci Arc">
																<i class="ac ac-fibonacci-arc" aria-hidden="true"></i>
															</button>
															<button data-annotation-type="fibonacci-retracement" type="button" class="btn btn-default" aria-label="Center Align" data-toggle="tooltip" title="Fibonacci Retracement">
																<i class="ac ac-fibonacci-retracement" aria-hidden="true"></i>
															</button>
															<button data-annotation-type="fibonacci-timezones" type="button" class="btn btn-default" aria-label="Center Align" data-toggle="tooltip" title="Fibonacci Time Zones">
																<i class="ac ac-fibonacci-timezones" aria-hidden="true"></i>
															</button>

														</div>

														<div class="btn-group-container">
															<div class="btn-group">
																<select class="selectpicker select choose-marker" id="select-marker-type" title="Marker" data-style="btn-lg" data-width="90" data-max-options="1">
																	<option data-icon="ac-arrow-up-square" data-annotation-type="marker" data-marker-type="arrowUp" data-marker-anchor="center-top">Up Arrow
																	</option>
																	<option data-icon="ac-arrow-down-square" data-annotation-type="marker" data-marker-type="arrow-down" data-marker-anchor="center-bottom">Down Arrow
																	</option>
																	<option data-icon="ac-arrow-left-square" data-annotation-type="marker" data-marker-type="arrow-left" data-marker-anchor="left-center">Left Arrow
																	</option>
																	<option data-icon="ac-arrow-right-square" data-annotation-type="marker" data-marker-type="arrow-right" data-marker-anchor="right-center">Right Arrow
																	</option>
																	<option data-icon="ac-head-arrow" data-annotation-type="marker" data-marker-type="arrowHead" data-marker-anchor="right-center">Head Arrow
																	</option>
																	<option data-icon="ac-cross" data-annotation-type="marker" data-marker-type="cross" data-marker-anchor="center">Cross
																	</option>
																	<option data-icon="ac-diagonal-cros" data-annotation-type="marker" data-marker-type="diagonal-cross" data-marker-anchor="center">Diagonal cross
																	</option>
																	<option data-icon="ac-diamond" data-annotation-type="marker" data-marker-type="diamond" data-marker-anchor="center">Diamond
																	</option>
																	<option data-icon="ac-pentagon" data-annotation-type="marker" data-marker-type="pentagon" data-marker-anchor="center">Pentagon
																	</option>
																	<option data-icon="ac-square" data-annotation-type="marker" data-marker-type="square" data-marker-anchor="center">Square
																	</option>
																	<option data-icon="ac-star-1" data-annotation-type="marker" data-marker-type="star10" data-marker-anchor="center">Star 1
																	</option>
																	<option data-icon="ac-star-2" data-annotation-type="marker" data-marker-type="star4" data-marker-anchor="center">Star 2
																	</option>
																	<option data-icon="ac-star-3" data-annotation-type="marker" data-marker-type="star5" data-marker-anchor="center">Star 3
																	</option>
																	<option data-icon="ac-star-4" data-annotation-type="marker" data-marker-type="star6" data-marker-anchor="center">Star 4
																	</option>
																	<option data-icon="ac-star-5" data-annotation-type="marker" data-marker-type="star7" data-marker-anchor="center">Star 5
																	</option>
																	<option data-icon="ac-trapezium" data-annotation-type="marker" data-marker-type="trapezium" data-marker-anchor="center">Trapezium
																	</option>
																	<option data-icon="ac-triangle-up" data-annotation-type="marker" data-marker-type="triangle-up" data-marker-anchor="center-top">Triangle Up
																	</option>
																	<option data-icon="ac-triangle-down" data-annotation-type="marker" data-marker-type="triangle-down" data-marker-anchor="center-bottom">Triangle Down
																	</option>
																	<option data-icon="ac-triangle-left" data-annotation-type="marker" data-marker-type="triangle-left" data-marker-anchor="left-center">Triangle Left
																	</option>
																	<option data-icon="ac-triangle-right" data-annotation-type="marker" data-marker-type="triangle-right" data-marker-anchor="right-center">Triangle Right
																	</option>
																</select>

																<button type="button" class="btn btn-default volume-btn" data-el-size="marker" data-volume="20" data-toggle="popover">Marker size
																</button>

															</div>
														</div>
														<div class="btn-group-container">
															<div class="btn-group">
																<button data-annotation-type="label" type="button" class="btn btn-default" aria-label="Center Align" data-toggle="tooltip" title="Label">
																	<i class="ac ac-font"></i>
																</button>

																<button type="button" class="btn btn-default" id="annotation-label-autosize" aria-label="Auto-resize" data-toggle="tooltip" title="Auto-resize">
																	<i class="ac ac-enlarge" aria-hidden="true"></i>
																</button>

																<button type="button" class="btn btn-default color-picker" data-color="fontColor" data-toggle="tooltip" title="Сhoose font color"><span class="color-fill-icon dropdown-color-fill-icon" data-color="black"></span>&nbsp;<b class="caret"></b>
																</button>

																<button type="button" class="btn btn-default volume-btn" data-el-size="label" data-volume="15" data-toggle="popover">Font size
																</button>

																<select class="selectpicker" id="select-font-style" title="Font settings" data-style="btn-lg" data-width="121" multiple>
																	<optgroup label="Font style" data-max-options="2">
																		<option data-icon="ac-italic" data-label-method="fontStyle" value="italic">Italic
																		</option>
																		<option data-icon="ac-bold" data-label-method="fontWeight" value="bold">Bold
																		</option>
																	</optgroup>
																	<optgroup label="Font decoration" data-max-options="1" data-label-method="fontDecoration">
																		<option data-icon="ac-strikethrough" value="line-through">Line-through</option>
																		<option data-icon="ac-overline" value="overline">Overline</option>
																		<option data-icon="ac-underline" value="underline">Underline</option>
																	</optgroup>
																	<optgroup label="Horizontal align" data-max-options="1" data-label-method="hAlign">
																		<option data-icon="ac-align-center" value="center">Center</option>
																		<option data-icon="ac-align-left" value="left">Left</option>
																		<option data-icon="ac-align-right" value="right">Right</option>
																		<option data-icon="ac-position-left" value="start">Start</option>
																		<option data-icon="ac-position-right" value="end">End</option>
																	</optgroup>
																	<optgroup label="Anchor" data-max-options="1" data-label-method="anchor">
																		<option data-icon="ac-anc-cb" value="center-bottom">Center bottom</option>
																		<option data-icon="ac-anc-ct" value="center-top">Center top</option>
																		<option data-icon="ac-anc-lb" value="left-bottom">Left bottom</option>
																		<option data-icon="ac-anc-lc" value="left-center">Left center</option>
																		<option data-icon="ac-anc-lt" value="left-top">Left top</option>
																		<option data-icon="ac-anc-rb" value="right-bottom">Right bottom</option>
																		<option data-icon="ac-anc-rc" value="right-center">Right center</option>
																		<option data-icon="ac-anc-rt" value="right-top">Right top</option>
																		<option data-icon="ac-anc-c" value="center">Center</option>
																	</optgroup>
																	<optgroup label="Vertical align" data-max-options="1" data-label-method="vAlign">
																		<option data-icon="ac-position-top" value="top">Top</option>
																		<option data-icon="ac-position-center2" value="middle">Middle</option>
																		<option data-icon="ac-position-bottom" value="bottom">Bottom</option>
																	</optgroup>
																</select>

															</div>
														</div>
														<div class="btn-group-container">
															<div class="btn-group">
																<button data-action-type="removeSelectedAnnotation" type="button" class="btn btn-default" aria-label="Center Align" data-toggle="tooltip" title="Delete selected drawing">
																	<i class="ac ac-remove-thin" aria-hidden="true"></i>
																</button>
																<button data-action-type="removeAllAnnotations" type="button" class="btn btn-default" aria-label="Center Align" data-toggle="tooltip" title="Delete all drawings">Remove All
																</button>
															</div>
														</div>
													</div>
												</td>
											</tr>
										</table>
										<div id="chart_2" class="chart" style="height: 90vh;"></div>
										<div id="chart_3" class="chart" style="height: 90vh;"></div>
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
<!-- 
		<script src="assets/jquery.min.js" type="text/javascript"></script>
		<script src="assets/jquery-migrate.min.js" type="text/javascript"></script> -->
		<!-- IMPORTANT! Load jquery-ui.min.js before bootstrap.min.js to fix bootstrap tooltip conflict with jquery ui tooltip -->
		<!-- <script src="assets/jquery-ui.min.js" type="text/javascript"></script>
		<script src="assets/bootstrap.min.js" type="text/javascript"></script>
		<script src="assets/bootstrap-hover-dropdown.min.js" type="text/javascript"></script>
		<script src="assets/jquery.slimscroll.min.js" type="text/javascript"></script>
		<script src="assets/jquery.blockui.min.js" type="text/javascript"></script>
		<script src="assets/jquery.cokie.min.js" type="text/javascript"></script>
		<script src="assets/jquery.uniform.min.js" type="text/javascript"></script> -->

		<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<!-- Include all compiled plugins (below), or include individual files as needed -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-colorpicker/2.5.1/js/bootstrap-colorpicker.min.js"></script>
		<script src="https://cdn.anychart.com/releases/v8/js/anychart-base.min.js"></script>
		<script src="https://cdn.anychart.com/releases/v8/js/anychart-stock.min.js"></script>
		<script src="https://cdn.anychart.com/releases/v8/js/anychart-annotations.min.js"></script>
		<script src="https://cdn.anychart.com/releases/v8/js/anychart-exports.min.js"></script>
		<script src="https://cdn.anychart.com/releases/8.9.0/js/anychart-data-adapter.min.js"></script>
		<script src="https://cdn.anychart.com/releases/v8/js/anychart-vml.min.js"></script>
		<script src="https://cdn.anychart.com/releases/v8/js/anychart-ui.min.js"></script>
		<script src="https://cdn.anychart.com/csv-data/msft-daily-short.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.10.0/js/bootstrap-select.min.js"></script>

		<!-- This library enables the automatic resizing of the height and width of
both same and cross domain iFrames to fit their contained content.   -->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.6.3/iframeResizer.contentWindow.min.js"></script>
		<!-- END CORE PLUGINS -->
		<!-- BEGIN PAGE LEVEL PLUGINS -->

		<!-- END PAGE LEVEL PLUGINS -->

		<script src="assets/metronic.js" type="text/javascript"></script>
		<script src="assets/layout.js" type="text/javascript"></script>
		<script src="assets/custom/getDigitalTwinAndDatasetOptions.js"></script>
		<script src="assets/custom/compareTo.js"></script>
		<script src="assets/custom/drawChart.js"></script>
		<script src="assets/custom/impExp.js"></script>

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