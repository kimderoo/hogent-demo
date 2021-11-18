/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["hogent/hogentdemo/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
