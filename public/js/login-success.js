(function() {
  if (!firebase.auth().currentUser) {
    window.location.href = "/invalid-access.html";
  } else {
    var userId = firebase.auth().currentUser.uid;
    var addListGroupItem = function(destElement, name, href, description, note) {
      $(destElement).append(
        '<a class="list-group-item" + href="' + href '">' +
        '<h3 class="list-group-item-heading">' + name +
        '</h3>' +
        '<p class="list-group-item-text"><em>'+note+'\n</em>'+
        description + '</p></a>'
      );
    }

    var recentEventsRef = firebase.database().ref('events').limitToFirst(3).on("child_added", function(snapshot) {
      addListGroupItem('#pas-upcoming-events .list-group', snapshot.name, snapshot.href, snapshot.description, snapshot.date);
    });

    var teamLeaderRef = firebase.database().ref('teamleader').on("child_added", function(snapshot) {
      addListGroupItem('#pas-leader-info .list-group', snapshot.name, snapshot.href, snapshot.description, snapshot.contactInfo)
    });
});
