sap.ui.controller("splitcell.detail", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf splitcell.detail
*/
//	onInit: function() {
//		var otext = "";
//		var oData="http://services.odata.org/V3/Northwind/Northwind.svc/Categories("+otext+")/Products?$format=json"
//		var oModel = new sap.ui.model.json.JSONModel(oData);
//		sap.ui.getCore().setModel(oModel,'bar');
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf splitcell.detail
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf splitcell.detail
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf splitcell.detail
*/
//	onExit: function() {
//
//	}
	itemSelected: function(){
	
		var text = sap.ui.getCore().byId("idLabel").getText();
		var text2 = sap.ui.getCore().byId("idLabel2").getText();
		var label = sap.ui.getCore().byId("idLabel");
		var label2 = sap.ui.getCore().byId("idLabel2");
		label.setVisible(false);
		//label2.setVisible(false);
		//console.log(text);
		//var otext = sap.ui.getCore().getModel('data').getProperty(selPath).CategoryID;
		
		var oData="http://services.odata.org/V3/Northwind/Northwind.svc/Categories("+text+")/Products?$format=json";
		var oModel = new sap.ui.model.json.JSONModel(oData);
		sap.ui.getCore().setModel(oModel,'bar');
	}
	
});