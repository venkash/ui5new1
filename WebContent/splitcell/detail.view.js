sap.ui.jsview("splitcell.detail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf splitcell.detail
	*/ 
	getControllerName : function() {
		return "splitcell.detail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf splitcell.detail
	*/ 
	createContent : function(oController) {
	var oLabel = new sap.m.Label("idLabel", {
			
		});
	
	var oLabel2 = new sap.m.Label("idLabel2", {
		//width: "100%",
		//design: sap.m.LabelDesign.Bold
		
	});
 		
		var oVizFrame1 = new sap.viz.ui5.controls.VizFrame({
			//margin:auto,
			width: "100%",
			height:"90%",
			
		});
		
		
		var oDataSet = new sap.viz.ui5.data.FlattenedDataset({
			dimensions : [ {
				name : 'Product',
				value : "{bar>ProductName}"
			} ],
			measures : [ {
				name : 'InStock',
				value : "{bar>UnitsInStock}"
			} ],
			data : {
				path : "bar>/value"
			}
		});
		/* Bar Chart */
		var oFeedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
			'uid' : "valueAxis",
			'type' : "Measure",
			'values' : [ "InStock" ]
		});
		var oFeedCataAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
			'uid' : "categoryAxis",
			'type' : "Dimension",
			'values' : [ "Product" ]
		});

		oVizFrame1.addFeed(oFeedValueAxis);
		oVizFrame1.addFeed(oFeedCataAxis);
		oVizFrame1.setDataset(oDataSet);
		oVizFrame1.setVizType('column');
		 var properties = {
			      'legend' : { 'visible' : false },
			      title : { visible : false  }
			     
			 };
		oVizFrame1.setVizProperties(properties);
		
		return new sap.m.Page({
			title: "Stock Details",
			content: [
			          	oLabel, oLabel2, oVizFrame1
			]
		});
	}

});