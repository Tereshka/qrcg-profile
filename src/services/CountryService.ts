import http from './http-common';

class CountryService {
  getAll() {
    return http.get('/countries');
  }

  get(id: number) {
    return http.get(`/countries/${id}`);
  }
}

export default new CountryService();