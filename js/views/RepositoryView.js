var RepositoryView = Backbone.View.extend({
    tagName: "tr",
    className: "repository",
    template: $("#repositoryTemplate").html(),
    render: function () {
        var template = _.template(this.template),
            html = template(this.model.toJSON());
        this.$el.html(html);
        $("table#repositories tbody").append(this.$el);
        return this;
    }
});
