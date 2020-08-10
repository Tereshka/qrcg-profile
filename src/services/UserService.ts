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
}

export default new UserService();