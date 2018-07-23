import api from './apiService';

class Target {
  static getCurrentUserTargets() {
    return api.get('/targets');
  }
}
 
export default Target;
