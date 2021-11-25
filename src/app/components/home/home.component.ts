import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../service/api.service";
import {Listing} from "../../models/Listing";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listings: Listing[] = [];
  loading: boolean = true;
  error: boolean = false;
  path: string = '';

  constructor(private service: ApiService, private route: ActivatedRoute) {
  }

  onSearchInputChange(event: any) {
    console.log(event);
  }

  ngOnInit(): void {
    this.loading = true;
    this.route.queryParams.subscribe(params => {
      this.path = (params['path'] == undefined) ? '' : params['path'];
      this.service.getDirectoryListing(this.path)
        .subscribe({
          next: (result: Listing[]) => {this.listings = result},
          error: (err => {this.error = true}),
          complete: () => {this.loading = false; this.error = false}
        })
    })
  }
}
