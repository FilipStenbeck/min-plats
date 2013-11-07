'use strict';

class minplats.Collections.DeparturesCollection extends Backbone.Collection

	baseUrl = "http://nodeone-filip.rhcloud.com/departures/"

	initialize:  ( options ) ->
		@id = options.id
		@url = baseUrl + @id

	updateUrl: (id) ->
		@id = id
		@url = baseUrl + @id

	getId: ->
		@id