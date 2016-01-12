Router.route('/boardDetail', {
  path: '/boardDetail/:_id',
  onRun: function() {
    Session.set('userId', this.params._id);
    this.next();
  }
});

Template.boardDetail.helpers({
  userObj: function() {
    var userId = Session.get('userId');
    var userObj = Boards.findOne({_id: userId});
    //Boards.find({_id: userId}).fetch();
    return userObj;
  }
});