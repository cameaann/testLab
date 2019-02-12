import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogModComponent } from './dialog-mod.component';

describe('DialogModComponent', () => {
  let component: DialogModComponent;
  let fixture: ComponentFixture<DialogModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogModComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
