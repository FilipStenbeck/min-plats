'use strict';

class minplats.Views.DepartureslistView extends Backbone.View
	
	initialize:  ( options ) ->
		@id = options.id
		@el = "#departures"
		@collection = new minplats.Collections.DeparturesCollection(id: @id)
		#@collection.fetch()
		@listenTo(@collection, 'sync', @render)

	writeTableRow: (row) =>
		template = JST['app/scripts/templates/departuresList.ejs'](
			lineNumber : row.get('LineNumber'), 
			destination : row.get('Destination'), 
			displayTime : row.get('DisplayTime')
		)
		$(@el).find('tbody').append(_.template(template))	 

	render: ->
		$(@el).find('#loader').addClass('hidden')
		$(@el).find('tbody tr').remove()
		if @collection.models.length > 1
			$(@el).find('#stop-name').html(@collection.models[0].get('StopAreaName'))
			_.each(@collection.models, @writeTableRow)
		else
			$(@el).find('#stop-name').html('Hittade ingen hållplats')	
		this

	load : (id) ->
		$(@el).find('#loader').removeClass('hidden')
		$(@el).find('#stop-name').html('')
		@collection.updateUrl(id)
		@collection.fetch()	

