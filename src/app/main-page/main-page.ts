import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { StudentID } from '../models/student';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule,RouterModule ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css'
})
export class MainPage {
student: StudentID[] =[
{sno:1, name:'Alice Anderson ', course:'BCSA'},
{sno:2, name:'Bian Smith', course:'HRM'},
{sno:3, name:'Catherine Lee ', course:'BSA'},
{sno:4, name:'David kim', course:'BSBA'},
{sno:5, name:'Ella Brown', course:'BSE'}
];
}
