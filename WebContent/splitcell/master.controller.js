sap.ui.controller("splitcell.master", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf splitcell.master
*/
	onInit: function() {
		var oModel = new sap.ui.model.json.JSONModel("http://services.odata.org/V3/Northwind/Northwind.svc/Categories?$format=json");
		sap.ui.getCore().setModel(oModel,'data');
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf splitcell.master
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf splitcell.master
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf splitcell.master
*/
//	onExit: function() {
//
//	}
	itemsSelected: function(){
		var app = sap.ui.getCore().byId("appId");
		var list = sap.ui.getCore().byId("listid");
		
		var selItem = list.getSelectedItem();
		var selPath = selItem.oBindingContexts.data.sPath;
		
		var item = sap.ui.getCore().getModel('data').getProperty(selPath);
		var itemText = sap.ui.getCore().getModel('data').getProperty(selPath).CategoryID;
		var catName = sap.ui.getCore().getModel('data').getProperty(selPath).CategoryName;
		//console.log(catName);
		var oModel1 = new sap.ui.model.json.JSONModel(item,'sel');
		sap.ui.getCore().byId("idLabel").setText(itemText);
		sap.ui.getCore().byId("idLabel2").setText(catName);
		//sap.ui.getCore().setModel(oModel,'item1');
		
//		
		
		
		sap.ui.controller("splitcell.detail").itemSelected();
		
		app.toDetail('iddetail1','showHide');
	}
});