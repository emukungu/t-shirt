import modules from '../modules';
const { returnItems, allDepartments, singleDepartment } = modules;

export default (app) => {
  app.get('/api/tshirts', returnItems);
  app.get('/api/departments', allDepartments);
  app.get('/api/departments/:id', singleDepartment);
}