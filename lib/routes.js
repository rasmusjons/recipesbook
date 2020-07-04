
// if (Meteor.isClient){

    Accounts.onLogin(function(){
        console.log('onLogin event');
        FlowRouter.go('recipe-book');
    });


    Accounts.onLogout(function(){
        console.log('onLogout event');
        FlowRouter.go('home');
    });
// }

FlowRouter.triggers.enter([function(context, redirect){
    if (!Meteor.userId()){
        FlowRouter.go('home')
    }
}])

FlowRouter.route('/', {
    name: 'home',
    action() {
        if (Meteor.userId()){
            FlowRouter.go('/recipe-book')
        }
        GAnalytics.pageview()
        BlazeLayout.render('HomeLayout')
    }
})

FlowRouter.route('/recipe-book', {
    name: 'recipe-book',
    action() {
        GAnalytics.pageview()
        //Detta är en rout som visar MainLayout template. MainLayout-templaten accepterar ett argument (en annan tempalte), som sedan visas inom den tempalten. Argumentet är ett object {main: 'string"}
        BlazeLayout.render('MainLayout', {main: 'Recipes'})
    }
})


FlowRouter.route('/recipie/:_id', {
    name: 'recipe',
    action() {
        GAnalytics.pageview()
        BlazeLayout.render('MainLayout', {main: 'RecipeSingle'})
    }
})

FlowRouter.route('/menu', {
    name: 'menu',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Menu'})
    }
});

FlowRouter.route('/shopping-list', {
    name: 'shopping-list',
    action() {
        BlazeLayout.render('MainLayout', {main: 'ShoppingList'})
    }
});