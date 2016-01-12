Meteor.methods({
  customLogin: function(email, pw) {
    if(!email || !pw) {
      throw new Meteor.Error('ID/PW를 확인해주세요');
    }
    Meteor.loginWithPassword(email, pw);
  },
  'insertOneItem': function(obj) {
    Likes.insert(obj);
  },
  'removeOneItem': function(obj) {
    Boards.remove({
      _id: obj._id
    });
  },
  'boardWrite': function(obj) {
    //글번호를 알아냅시다. 글번호 === 전체 글 갯수 + 1
    //글번호 max값 + 1로 수정
    var board = Boards.findOne({}, {sort: {'글번호': -1}});
    if(board !== undefined && board !== null) {
      if (board.hasOwnProperty('글번호')) {
        obj.글번호 = parseInt(board.글번호) + 1;
      }
    }
    else {
      obj.글번호 = 0;
    }

    Boards.insert(obj);

  }
});