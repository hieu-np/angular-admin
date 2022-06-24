import { Component, OnInit, Input } from '@angular/core';
import { cilSearch } from '@coreui/icons';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  icons = { cilSearch };
  @Input() users!:[];
  constructor() { }

  ngOnInit(): void {
  }

}
