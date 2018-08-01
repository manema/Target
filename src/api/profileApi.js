import api from './apiService';

class Profile {
  static getCurrentUserProfile(id) {
    return api.get(`/users/${id}`);
  }
}

export default Profile;
