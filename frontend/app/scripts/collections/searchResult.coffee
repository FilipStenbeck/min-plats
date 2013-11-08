'use strict';

class minplats.Collections.SearchresultCollection extends Backbone.Collection
  
  baseUrl = "http://nodeone-filip.rhcloud.com/search/"

  setQuery: (query)->
  	@url = baseUrl + query

