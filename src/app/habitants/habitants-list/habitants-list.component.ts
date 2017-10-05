import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-habitants-list',
  templateUrl: './habitants-list.component.html',
  styleUrls: ['./habitants-list.component.css']
})
export class HabitantsListComponent implements OnChanges {
  @Input('list') list: any;
  public listShow: any[];
  public length = 0;
  public pageSize = 12;
  public city: string;
  public search_input: string;
  public index_page = 0;

  constructor() {}

  onPageChange(event) {
    this.index_page = event.pageIndex;
    let start = this.index_page * this.pageSize;
    let end = start + this.pageSize;
    this.listShow = this.list.slice(start, end);
  }

  ngOnChanges(currentChanges) {
    this.length = this.list.length;
    this.listShow = this.list.slice(0, this.pageSize);
  }
}
