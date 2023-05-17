import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDataComponent } from './button-data.component';

describe('ButtonDataComponent', () => {
  let component: ButtonDataComponent;
  let fixture: ComponentFixture<ButtonDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonDataComponent]
    });
    fixture = TestBed.createComponent(ButtonDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
