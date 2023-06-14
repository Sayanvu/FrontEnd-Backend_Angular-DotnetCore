import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSayanComponent } from './new-sayan.component';

describe('NewSayanComponent', () => {
  let component: NewSayanComponent;
  let fixture: ComponentFixture<NewSayanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSayanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSayanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
