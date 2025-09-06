import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentList } from '../models/student';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.html',
  styleUrls: ['./info.css']   // ✅ correct plural
})
export class Info implements OnInit {
  studentId!: number;
  student?: StudentList;

students: StudentList[] = [
  { 
    sno: 1,
    name: 'Alice Anderson',
    course: 'BSCS',
    gender: 'Female',
    age: 21,
    contact: '09123456789',
    address: '123 Main St, Manila',
    email: 'alice@example.com',
    birthday: '2003-05-14',
    motto: 'Keep learning, keep growing'
  }
];


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // 👇 grab "sno" from the URL parameter
    this.studentId = Number(this.route.snapshot.paramMap.get('sno'));
    this.student = this.students.find(s => s.sno === this.studentId);
  }

  goBack(): void {
    console.log("here");
    this.router.navigate(['/main-page']);
  }
}
