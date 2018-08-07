import api from './apiService';

class Profile {
  static getCurrentUserProfile(id) {
    return api.get(`/users/${id}`);
  }
  static updateCurrentUserProfile(id, user) {
    return api.put(`/users/${id}`, user);
  }
}

export default Profile;
