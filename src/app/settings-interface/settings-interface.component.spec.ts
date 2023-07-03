import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsInterfaceComponent } from './settings-interface.component';

describe('SettingsInterfaceComponent', () => {
  let component: SettingsInterfaceComponent;
  let fixture: ComponentFixture<SettingsInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
