import http from './http-common';

class UserService {
  getAll() {
    return http.get('/users');
  }

  get(id: string) {
    return http.get(`/users?id=${id}`);
  }

  update(id: string, data: any) {
    return http.put(`/users?id=${id}`, data);
  }
}

export default new UserService();