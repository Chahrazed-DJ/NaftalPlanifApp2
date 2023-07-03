import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsInterfaceComponent } from './operations-interface.component';

describe('OperationsInterfaceComponent', () => {
  let component: OperationsInterfaceComponent;
  let fixture: ComponentFixture<OperationsInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationsInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationsInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
