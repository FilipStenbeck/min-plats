'use strict';

class minplats.Routers.ApprouterRouter extends Backbone.Router

	routes:
		'hemmesta' : 'loadHemmesta'
		'slussen' : 'loadSlussen'
		'holmviksskogen' : 'loadHolmviksskogen'
		'gustavsberg' : 'loadGurra',
		'centralen' : 'loadCentralen'


	loadHemmesta:->
		minplats.depList.load('4500')
		
	loadSlussen:->
		minplats.depList.load('9192')
		
	loadHolmviksskogen:->
		minplats.depList.load('4245')

	loadGurra:->
		minplats.depList.load('4200')

	loadCentralen:->
		minplats.depList.load('9002') 

