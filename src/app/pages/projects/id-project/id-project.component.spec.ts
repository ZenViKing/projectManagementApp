import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdProjectComponent } from './id-project.component';

describe('IdProjectComponent', () => {
  let component: IdProjectComponent;
  let fixture: ComponentFixture<IdProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
