import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.css']
})
export class InfiniteScrollComponent implements OnInit {

 

  ngOnInit(): void {
  }

  items: any[] = []; // Your data to be loaded
  loading: boolean = false;

  constructor() {
    // Simulated initial data
    for (let i = 0; i < 500; i++) {
      this.items.push(`Item ${i}`);
    }
  }

  onScroll() {
    const container = document.querySelector('.container');
    if (container) {
      const scroll$ = fromEvent(container, 'scroll');
      scroll$.pipe(
        debounceTime(200), // Adjust the debounce time as needed
      ).subscribe(() => {
        if (
          container.clientHeight + container.scrollTop >= container.scrollHeight - 20 &&
          !this.loading
        ) {
          this.loading = true;
          // Simulated loading delay - replace this with actual data fetching logic
          setTimeout(() => {
            this.loadMoreItems();
            this.loading = false;
          }, 1000);
        }
      });
    }
  }

  loadMoreItems() {
    // Simulated data loading - Replace this with actual data fetching logic
    const startIndex = this.items.length;
    const endIndex = startIndex + 10;
    for (let i = startIndex; i < endIndex; i++) {
      this.items.push(`Item ${i}`);
    }
  }

}
