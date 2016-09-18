(function() {
  if (!firebase.auth().currentUser) {
    window.location.href = "/invalid-access.html";
  } else {
    var userTeam = firebase.auth().currentUser.teamId;
    var teamInfo = firebase.database().ref('teamId').orderByChild('memberPosition').on("child_added", function(snapshot) {
      addListGroupItem('#pas-content', snapshot.name, snapshot.href, snapshot.description, snapshot.contactInfo);
    });
  }

  var addListGroupItem = function(destElement, name, href, description, contactInfo) {
    $(destElement).append(
      '<a class="list-group-item" + href="' + href '">' +
      '<h3 class="list-group-item-heading">' + name +
      '</h3>' +
      '<p class="list-group-item-text"><em>'+ description + '\n</em>' + contactInfo + '</p></a>'
    );
  }
  }
})
