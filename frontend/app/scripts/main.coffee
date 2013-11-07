window.minplats =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}
  init: ->
    'use strict'
    minplats.depList = new minplats.Views.DepartureslistView(el: '#depatures', id :'4245 ')

    appRouter = new minplats.Routers.ApprouterRouter(pushState: true, silent: false)
    Backbone.history.start()

$ ->
  'use strict'
  minplats.init();
