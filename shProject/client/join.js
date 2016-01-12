Router.route('join','join');
Template.join.events({
  "click #btnJoin": function(evt, tmpl){
    console.log("join???");
    evt.preventDefault();
    var email = $("#joinid").val()
    var pw = $('#password').val()

    options = {};
    options.username = email;
    options.email = email;
    options.password = pw;
    var rslt = Accounts.createUser(options);
    Router.go('/');
  }
});