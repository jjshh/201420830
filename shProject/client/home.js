Router.route('/','home');
Template.home.helpers({
  email: function() {
    var user = Meteor.user();
    if (user) {
      return Meteor.user().emails[0].address;
    }
  }
});

Template.home.events({
  'click #Logout': function(evt, tmpl) {
    evt.preventDefault();
    Meteor.logout();
  },
  "click #submit": function(evt, tmpl) {
    evt.preventDefault();
    console.log('login');
    var ID = $('#id').val();
    var PW = $('#pw').val();
    if(!ID) {
      //return alert('ID를 입력해주세요.');
      Meteor.call('customLogin', ID, PW, function(err, rslt){
        if (err) {
          //로그인 실패시 액션
          alert(err);
        }
        else {
          //로그인 성공시 액션
        }
      })
    }
    if(!PW) {
      return alert('PW를 입력해주세요.');
    }
    Meteor.loginWithPassword(ID, PW);
  }
});