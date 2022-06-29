import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './student-dto';
import { StudentRsp } from "./student-dto";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[];
  studentUrl: string;

  constructor(private http: HttpClient) {
    // console.log('The URL = ' + window.location.href);
    this.students = undefined;
  }

  getStudentServiceUrl(): string {
    // const theUrl = window.location.href;
    let result: string;

    result = 'http://127.0.0.1:5001/api/students/';

    // This is some seriously bad code.
    // If you do this on a job interview, you did not learn this in my class.
    //if (theUrl.includes('amazonaws')) {
      /* This can change over time */
    //  result = 'ec2-54-242-71-165.compute-1.amazonaws.com:5000/imdb/artists?primaryName=';
   // }
    //else {
    //  result = 'http://127.0.0.1:5002/api/artists?primaryName=';
   // }

    return result;
  }


  /** GET heroes from the server */
  getStudent(uni): Observable<Student> {
    let theUrl: string;

    theUrl = this.getStudentServiceUrl() + uni;
    return this.http.get<Student>(theUrl);
  }
}

