import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySecondNestedComponent } from './my-second-nested.component';

describe('MySecondNestedComponent', () => {
  let component: MySecondNestedComponent;
  let fixture: ComponentFixture<MySecondNestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySecondNestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySecondNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
