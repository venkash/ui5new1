sap.ui.jsview("splitcell.master", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf splitcell.master
	*/ 
	getControllerName : function() {
		return "splitcell.master";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf splitcell.master
	*/ 
	createContent : function(oController) {
		
		var oList = new sap.m.List("listid", {
			mode: sap.m.ListMode.SingleSelect,
			select: function(){
				oController.itemsSelected();
			}
		});
		
		var oItemTemplate = new sap.m.StandardListItem("sList", {
			title: "{data>CategoryName}",
			description: "{data>Description}"
				
		});
		
		oList.bindAggregation("items","data>/value",oItemTemplate);
		
 		var oPage = new sap.m.Page({
			title: "Select a Category below",
			content: [
			        oList
			]
		});
 		return oPage;
 		
	}

});