import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../../core/services/employee.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent {

  @Input() public employees: Employee;
  @Output() public editEmployee = new EventEmitter<any>();
  @Output() public deleteEmployee = new EventEmitter<any>();

  public trackByFn(index: any, item: any) {
    return index;
  }

  public doEdit(employee: Employee) {
    this.editEmployee.emit(employee);
  }

  public doDelete(id: number | null) {
    this.deleteEmployee.emit(id);
  }

}
