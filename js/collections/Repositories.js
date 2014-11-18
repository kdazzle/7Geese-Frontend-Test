var Repositories = Backbone.Collection.extend({
    model: Repository,
    url: "https://api.github.com/orgs/7Geese/repos",

    /**
     * Sort the repositories by `forks_count` in descending order.
     * @param {Repository} first
     * @param {Repository} second
     * @returns {number}
     */
    comparator: function (first, second) {
        if (first.get("forks_count") > second.get("forks_count")) {
            // first comes before second
            return -1;
        } else if (first.get("forks_count") === second.get("forks_count")) {
            // the two are equally weighted
            return 0;
        } else {
            // first goes after second
            return 1;
        }
    }
});
