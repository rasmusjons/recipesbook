Recipes = new Mongo.Collection('recipes')


Recipes.allow({
    //vem är tillåten att skriv till recipes collection? om !!userId är true, så är du tillåten. 
    insert: function(userId, doc) {
        return userId !== true; 
    } ,
    update: function(userId, doc) {
        return userId !== true; 

    }
})

Ingredient = new SimpleSchema({
    name: {
        type: String, 
        label: "Name"
    },
    amount: {
        type: String
    }
}),



RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },

    description: {
        type: String,
        label: "Description"
    },
    
    ingredients:{
        type: [Ingredient]
    },
    inMenu: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform: {
            type: "hidden"
        }
    },
    author: {
        type: String,  
        label: "Author",
        autoValue: function() {
            return this.userId
        },
        autoform: {
            type: "hidden"
        }
    },

    createdAt: {
        type: Date, 
        label: "Created At",
        autoValue: function () {
            return new Date()
        }, 
        autoform: {
            type: "hidden"
        }
    }

}) 


//den här metoden kan jag sedan kalla på från klientsidan för att uppdatera collection
Meteor.methods({
    toggleMenuItem: function(id, currentState) {
        Recipes.update(id, {
            $set: {
                inMenu: !currentState
            }
        });
    },
    deleteRecipe: function (id) {
        Recipes.remove(id);
    }
})


Recipes.attachSchema(RecipeSchema);