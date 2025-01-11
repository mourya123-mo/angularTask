import { Component } from '@angular/core';
import { AccountApiService } from '../account-api.service';

@Component({
  selector: 'app-accounts-api',
  templateUrl: './accounts-api.component.html',
  styleUrls: ['./accounts-api.component.css'],
})
export class AccountsApiComponent {
  accounts: any = [];
  term: string = '';
  column: string = '';
  order: string = '';
  limit: number = 0;
  page: number = 0;

  constructor(private accountService: AccountApiService) {
    this.pageReload();
  }
  pageReload() {
    this.accountService.getAccounts().subscribe((data: any) => {
      this.accounts = data;
      console.log(this.accounts);
    });
  }
  filter() {
    this.accountService.filterAccounts(this.term).subscribe(
      (data: any) => {
        this.accounts = data;
        console.log(this.accounts);
      },
      (err: any) => {
        alert('internal error');
      }
    );
  }
  sort() {
    this.accountService
      .getSortedAccounts(this.column, this.order)
      .subscribe((data: any) => {
        this.accounts = data;
        console.log(this.accounts);
      });
  }
  pagination() {
    this.accountService
      .getPaginatedAccounts(this.limit, this.page)
      .subscribe((data: any) => {
        this.accounts = data;
        console.log(this.accounts);
      });
  }
  delete(id: number) {
    this.accountService.delete(id).subscribe(
      (data: any) => {
        this.accounts = data;
        this.pageReload();
        console.log(this.accounts);
      },
      (err) => {
        alert('internal error');
      }
    );
  }
}
