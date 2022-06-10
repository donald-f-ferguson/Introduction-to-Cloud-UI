import { Component, OnInit } from '@angular/core';
import {Student} from './student-dto';
import {StudentService} from './student.service';

@Component({
  selector: 'app-intro-to-cloud',
  templateUrl: './intro-to-cloud.component.html',
  styleUrls: ['./intro-to-cloud.component.css']
})
export class IntroToCloudComponent implements OnInit {

  currentStudent: Student;
  allStudents: Student[];
  testInp : string;
  showStudents = false;
  showClasses = false;
  studentService = null;
  studentUni = null;

  //onSomethingInput(e: Event) : void {
  //  console.log("Input = ", (<HTMLInputElement> e.target).value);
  //  this.testInp = (<HTMLInputElement> e.target).value;
  //}

  toggleStudents(): void {
    this.showStudents = !this.showStudents;
  }
  toggleClasses(): void {
    this.showClasses = !this.showClasses;
  }

  active = 1;

  constructor(studentService: StudentService) {
    console.log("In constructor ... ...");
    this.studentService = studentService;
  }

  ngOnInit(): void {
  }

  setStudentInfo(theStudents: Student): void {
    console.log("Students = \n" + JSON.stringify(theStudents, null, 2));
    this.allStudents = [theStudents]
  }


  onSomethingInput(e: Event) : void {
    // console.log("Input = ", (<HTMLInputElement> e.target).value);
    this.studentUni = (<HTMLInputElement> e.target).value;
    if (this.studentUni.length > 2) {
      this.studentService.getStudent(this.studentUni)
        .subscribe((data) => this.setStudentInfo(data.data));
    }
  }

  onLookup(): void {
    if (this.studentUni.length > 3) {
      this.studentService.getStudent(this.studentUni)
        .subscribe((data) => this.setStudentInfo(data));
    }
  }

}
