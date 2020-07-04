Template.Recipe.events({
    'click .toggle-menu': function () {
        console.log(this._id)
        Meteor.call('toggleMenuItem', this._id, this.inMenu)
    },
    'click .fa-trash': function () {
        Meteor.call('deleteRecipe', this._id )
    },
    'click .fa-pencil': function (event, template) {
        template.editMode.set(!template.editMode.get())

    }
})

Template.Recipe.helpers({
    updateRecipeId: function () {
        return this._id
    },

    editMode: function () {
        //retunerar bara den spcifika templates editsmod-variabel
        return Template.instance().editMode.get()
    }
})

Template.Recipe.onCreated(function() {
    //skapar ett object på blaze.TemplateInstance. 
    this.editMode = new ReactiveVar(false)
    this.tjolahopp = new ReactiveVar(false)
})

console.log(Template.Recipe)

//TEMPLATES OCH TEMPLATES INSTANCES:
// When you write a template as <template name="foo"> ... </template> in an HTML file in your app, Meteor generates a “template object” named Template.foo. Note that template name cannot contain hyphens and other special characters.

// The same template may occur many times on a page, and these occurrences are called template instances. Template instances have a life cycle of being created, put into the document, and later taken out of the document and destroyed. Meteor manages these stages for you, including determining when a template instance has been removed or replaced and should be cleaned up. You can associate data with a template instance, and you can access its DOM nodes when it is in the document.
