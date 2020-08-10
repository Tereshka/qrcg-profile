import http from './http-common';

class PlanService {
  getAll() {
    return http.get('/plans');
  }

  get(id: number) {
    return http.get(`/plans/${id}`);
  }
}

export default new PlanService();