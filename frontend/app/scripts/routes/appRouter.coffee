'use strict';

class minplats.Routers.ApprouterRouter extends Backbone.Router

	routes:
		'hemmesta' : 'loadHemmesta'
		'slussen' : 'loadSlussen'
		'holmviksskogen' : 'loadHolmviksskogen'
		'gustavsberg' : 'loadGurra',
		'centralen' : 'loadCentralen',
		'search' : 'search'
		'result' : 'result'
		'*path' :  'loadHolmviksskogen'


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

	search:->
		minplats.search.render()

	result:->
		console.log "result from search" 

