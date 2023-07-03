import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebiteursInterfaceComponent } from './debiteurs-interface.component';

describe('DebiteursInterfaceComponent', () => {
  let component: DebiteursInterfaceComponent;
  let fixture: ComponentFixture<DebiteursInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebiteursInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebiteursInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
