<%= bigshortname %>.init = function() {

    // serviceWorker check
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').then(function(registration) {
            console.log('Service worker registration successful');
        }).catch(function(err) {
            console.error('Service worker registration failed', err);
        });
    }

    // instantiate collections
    <%= bigshortname %>.objects.bases = new <%= bigshortname %>.collections.Base();

    // instantiate views
    <%= bigshortname %>.singletonViews.base = new <%= bigshortname %>.views.Base();

    // attach views
    $("main").appendChild(<%= bigshortname %>.singletonViews.base.render().$el);

    // load questions and choices
    <%= bigshortname %>.objects.bases.fetch();

    console.info('<%= bigshortname %> initialized');

};

<%= bigshortname %>.init();
