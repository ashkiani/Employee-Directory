
export default {
  // Gets all users
  getUsers: function() {

    return fetch('https://randomuser.me/api/?results=200&nat=us');
  }
};
