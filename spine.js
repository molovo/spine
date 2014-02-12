/* global Backbone */
/* global $ */
/* global _ */

var Spine = (function(urlRoot, parentSelector, templateSelector, uri){
  'use strict';

  if (typeof uri === 'undefined')
    uri = '';

  return {

    initialize: function() {
      // Create the Backbone Models
      var Model = Backbone.Model.extend({
          urlRoot: urlRoot,
      });

      // Create the Backbone Collections and link to Models
      var Collection = Backbone.Collection.extend({
          url: urlRoot + uri,
          model: Model,
      });

      // Initialise our Collection
      var c = new Collection();

      // Fetch the data
      c.fetch();

      // Allow handlebars syntax to be used
      _.templateSettings = {
          interpolate : /\{\{(.+?)\}\}/g
      };

      // Create the Backbone View
      var View = Backbone.View.extend({

        // Our Container
        el: parentSelector,

        // Call the render function immediately
        initialize: function () {
          // 'use strict';

          this.collection.on('add', this.render, this);
          this.render();
        },

        // Grab the templates from above
        template: _.template( $(templateSelector).html() ),
        //list: slug ? '' : _.template( $('#post-list-template').html() ),

        // Render it
        render: function () {
          // 'use strict';

          var self = this;

          // Empty the container first
          self.$el.html('');

          // Loop through posts
          self.collection.each(function(data) {

            self.$el.append( self.template(data.toJSON()) );

          });
        }
      });

      // Initialise the Views
      var initialisedView = new View({collection: c});
      return initialisedView;
    }

  };

});