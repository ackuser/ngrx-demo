import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoreConstants } from './../../core/core.constants';
import { Employee } from './../../in-memory-api/employee.interface';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent  implements OnChanges, OnInit {

  public crudForm: FormGroup;
  @Input() public employeeToEdit: Employee;
  @Input() public isEditing: boolean;
  @Output() public addEmployee = new EventEmitter<any>();
  @Output() public updateEmployee = new EventEmitter<any>();
  @Output() public cancel = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  /**
   * Life-cycle hook `ngOnChanges` is used here to pre-fill this employee form
   * form with data(employeeToEdi) received from click of Edit button in the another
   * sibling dump component `app-employee-table`. Also we do check value of `employeeToEdi`
   * because, during first time (i.e before user clicks the edit button) the employeeToEdit
   * value will be empty, so to avoid null pointer issue we do this additonal check
   */
  ngOnChanges(changes: SimpleChanges) {
    if (this.employeeToEdit) {
      this.crudForm.setValue(this.employeeToEdit);
    }
  }

  private buildForm() {
    this.crudForm = this.formBuilder.group({
      name: ['', {
        validators: [
          Validators.required,
          Validators.maxLength(35),
          Validators.pattern(CoreConstants.NAME_REGEXP),
        ]
      }],
      title: ['', {
        validators: [
          Validators.required,
          Validators.maxLength(25),
          Validators.pattern(CoreConstants.NAME_REGEXP)
        ]
      }],
      salary: ['', {
        validators: [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern(CoreConstants.NUMERIC_REGEXP)
        ]
      }],
      city: ['', {
        validators: [
          Validators.required,
          Validators.maxLength(15),
          Validators.pattern(CoreConstants.NAME_REGEXP)
        ]
      }],
      id: '',

    });
  }

  // convenience getter for easy access to form fields
  public get name() {
    return this.crudForm.get('name');
  }

  public get title() {
    return this.crudForm.get('title');
  }

  public get salary() {
    return this.crudForm.get('salary');
  }

  public get city() {
    return this.crudForm.get('city');
  }

  public getNameControlErrorMessage() {
    return this.name.hasError('required') ? 'Name is required' :
    this.name.hasError('maxlength') ? 'Maximum 35 characters are allowed' :
    this.name.hasError('pattern') ? 'Only alphabets are allowed' :
    '';
  }

  public getTitleControlErrorMessage() {
    return this.title.hasError('required') ? 'Title is required' :
    this.title.hasError('maxlength') ? 'Maximum 25 characters are allowed' :
    this.title.hasError('pattern') ? 'Only alphabets are allowed' :
    '';
  }

  public getSalaryControlErrorMessage() {
    return this.salary.hasError('required') ? 'Salary is required' :
    this.salary.hasError('maxlength') ? 'Maximum 10 characters are allowed' :
    this.salary.hasError('pattern') ? 'Only numeric values are allowed' :
    '';
  }

  public getCityControlErrorMessage() {
    return this.city.hasError('required') ? 'City is required' :
    this.city.hasError('maxlength') ? 'Maximum 15 characters are allowed' :
    this.city.hasError('pattern') ? 'Only alphabets are allowed' :
    '';
  }

  public doAdd() {
     // stop here, don't allow to submit the form  if form is invalid
    if (this.crudForm.invalid) {
      return;
    } else {
      this.addEmployee.emit(this.crudForm.value);
      this.doCancel();
    }
  }

  public doUpdate() {
    // stop here, don't allow to submit the form  if form is invalid
    if (this.crudForm.invalid) {
      return;
    } else {
      this.updateEmployee.emit(this.crudForm.value);
      this.doCancel();
    }
  }

  public doCancel() {
    this.cancel.emit(false);
    this.crudForm.reset();
  }

}
