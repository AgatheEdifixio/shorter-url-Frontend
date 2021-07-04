import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectCompComponent } from './redirect-comp.component';

describe('RedirectCompComponent', () => {
  let component: RedirectCompComponent;
  let fixture: ComponentFixture<RedirectCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirectCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
