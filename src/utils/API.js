
export default {
  // Gets all users
  getUsers: function() {
    console.log("Calling API to get random users");
    return fetch('https://randomuser.me/api/?results=200&nat=us');
  }
};
