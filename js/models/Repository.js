var Repository = Backbone.Model.extend({

    initialize: function () {
        this.set('readableDate', this.getReadableDate());
        this.set('readableName', this.getReadableName())
    },

    getReadableDate: function () {
        var date = new Date(this.get('created_at')),
            year = date.getFullYear(),
            month = date.getMonth(),
            day = date.getDate();
        return year + "-" + month + "-" + day;
    },

    getReadableName: function () {
        var name = this.get('name').replace(/-/g, " "),
            doNotCapitalize = ["as", "on"],
            name_words = name.split(" ");
        _.each(name_words, function (word, index) {
            var capitalizedWord;

            if (! _.contains(doNotCapitalize, word)) {
                capitalizedWord = word[0].toUpperCase();
                capitalizedWord += word.slice(1);
                name_words[index] = capitalizedWord;
            }
        });

        return name_words.join(" ");
    }
});
