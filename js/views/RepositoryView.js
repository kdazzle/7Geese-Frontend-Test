var RepositoryView = Backbone.View.extend({
    tagName: "li",
    className: "repository",
    template: $("#repositoryTemplate").html(),
    render: function () {
        var template = _.template(this.template),
            html = template(this.model.toJSON());
        this.$el.html(html);
        $("#repositories").append(this.$el);
        return this;
    }
});
