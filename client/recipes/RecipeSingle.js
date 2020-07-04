
Template.RecipeSingle.onCreated(function()  {
        this.autorun(() => {
            const id = FlowRouter.getParam('_id')

            this.subscribe('singleRecipe', id)
        })
})

Template.RecipeSingle.helpers({
    recipe: () => {
        const id = FlowRouter.getParam('_id')
        return Recipes.findOne({_id: id})
    }
})