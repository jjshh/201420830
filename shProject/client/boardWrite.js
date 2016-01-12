Router.route('/boardWrite', 'boardWrite');

Template.boardWrite.events({
  //4
  "click #cancel": function(e, tmpl) {
    $('#작성자').val('');
    $('#제목').val('');
    $('#본문').val('');
  },
  "click #write": function(e, tmpl) {
    if (!Meteor.user()) {
      return alert('로그인을 해주세요!!!');
    }
    var obj = {};
    obj.작성자 = Meteor.user().emails[0].address;
    obj.제목 = $('#제목').val();
    if(obj.작성자.length <= 0 || obj.제목.length <= 0) {
      //error
      return alert('작성자와 제목을 모두 입력해주세요!!');
    }
    obj.본문 = $('#본문').val();

    Meteor.call('boardWrite', obj, function(err, rslt) {
      if(err) {
        //실패시 화면에서 해야 할 액션
        alert(err);
      }
      else {
        //성공시 화면에서 해야 할 액션
        $('#작성자').val('');
        $('#제목').val('');
        $('#본문').val('');

        Router.go('/boardList');
      }
    });


  }
});

