'use strict';

class minplats.Views.SearchView extends Backbone.View

	initialize:->
		@collection = new minplats.Collections.SearchresultCollection
		@listenTo(@collection, 'sync', @onResult)
		

	render:->
		#$(@el).html("search #{this} here")
		$(@el).removeClass('hidden')
		$(minplats.depList.el).addClass('hidden')
		template = JST['app/scripts/templates/search.ejs']()
		$(@el).html(_.template(template))

	search:(event)->
		$('#search_loader').removeClass('hidden')
		query =  $($(event.target)[0][0]).val()
		@collection.setQuery(query)
		@collection.fetch()

	onResult:->
		$('#search_loader').addClass('hidden')
		minplats.depList.load(@collection.models[0].get('Number'))
		minplats.appRouter.navigate("result/#{@collection.models[0].get('Name')}")


	events: 
		"submit" : "search"
