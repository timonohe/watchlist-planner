import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistAddComponent } from './watchlist-add.component';

describe('WatchlistAddComponent', () => {
  let component: WatchlistAddComponent;
  let fixture: ComponentFixture<WatchlistAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WatchlistAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WatchlistAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
