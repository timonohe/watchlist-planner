import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistViewComponent } from './watchlist-view.component';

describe('WatchlistViewComponent', () => {
  let component: WatchlistViewComponent;
  let fixture: ComponentFixture<WatchlistViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WatchlistViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WatchlistViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
