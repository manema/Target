import api from './apiService';

class Target {
  static getCurrentUserTargets() {
    return api.get('/targets');
  }

  static getTopics() {
    return api.get('/topics');
  }

  static createTarget(target) {
    return api.post('/targets', target);
  }
}
 
export default Target;
