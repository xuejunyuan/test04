/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["btp/test04/test04/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
