import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-detail',
    template: `
      <h3>View user Details</h3>
    `
})
export class UserDetailComponent implements OnInit {
    ngOnInit() {
        console.log("OnInit");
    }
}
