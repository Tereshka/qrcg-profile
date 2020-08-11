import http from './http-common';

class UserService {
  getAll() {
    return http.get('/users');
  }

  get(id: number) {
    return http.get(`/users/${id}`);
  }

  update(id: number, data: any) {
    return http.put(`/users/${id}`, data);
  }

  patch(id: number, data: any) {
    return http.patch(`/users/${id}`, data);
  }

  getStatistics(userId: number) {
    return http.get(`/statistics?userId=${userId}`);
  }
}

export default new UserService();