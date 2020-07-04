// Meteor.subscribe('recipes')


Template.Recipes.onCreated(function()  {
        this.autorun(() => {
            this.subscribe('recipes')
        })
})

Template.Recipes.helpers({
    recipes: () => {
        return Recipes.find({})
    }
})


Template.Recipes.events( {
    'click .new-recipe-btn': function () {
        Session.set('newRecipe', true)
    }
})
