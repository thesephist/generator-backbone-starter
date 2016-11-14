/* MODELS */

<%= bigshortname %>.models.Base = Backbone.Model.extend({

    urlRoot: '/api',

    defaults: {
        // defaults
    },

    initialize: function() {
        // defaults
    },

});

/* COLLECTIONS */

<%= bigshortname %>.collections.Base = Backbone.Collection.extend({

    url: '/api',

    initialize: function() {
        // defaults
    },

    fetch: function(options) {
        Backbone.Collection.prototype.fetch.apply(this, _.extend(options, {
            processData: true
        }));
    }

});
