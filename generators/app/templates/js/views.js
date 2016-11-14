/* VIEWS */

<%= bigshortname %>.views.Base = Backbone.View.extend({

    className: '',

    template: `
      <div></div>
    `,

    events: {},

    initialize: function(attrs) {
        this.render();
    },

    render: function() {
        this.$el.html(this.template);
        return this;
    }

});
