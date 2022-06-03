import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showimg',
  templateUrl: './showimg.component.html',
  styleUrls: ['./showimg.component.scss'],
})
export class ShowimgComponent implements OnInit {
  mode = environment.mode;
  errorMessage = '';
  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  onAPIOutput(data) {
    if (data.isApiSuccess) {
      this.errorMessage = '';
      localStorage.setItem('res', JSON.stringify(data));
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = data.response.message
    }
  }
}
