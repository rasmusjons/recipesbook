
Template.Menu.onCreated(function()  {
    this.autorun(() => {
        this.subscribe('recipes')
    })
})

Template.Menu.helpers({
recipes1: () => {
    return Recipes.find({inMenu: true})
}
})