import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from './employee.interface';

export class EmployeeInMemoryData implements InMemoryDbService {

    createDb() {
        const employees: Employee[] = [
          {
              'id': 1,
              'name': 'James Smith',
              'title': 'Architect',
              'salary': 110000,
              'city': 'orlando'
          }, {
            'id': 2,
            'name': 'Susan Miller',
            'title': 'Project Manager',
            'salary': 105000,
            'city': 'orlando'
          }, {
            'id': 3,
            'name': 'Michael Jones',
            'title': 'Senior Architect',
            'salary': 130000,
            'city': 'orlando'
          }, {
            'id': 4,
            'name': 'William Wilson',
            'title': 'UI Developer',
            'salary': 70000,
            'city': 'orlando'
          }
        ];
        return { employees };
    }
}
