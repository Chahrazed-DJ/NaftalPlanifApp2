import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecouvrementsInterfaceComponent } from './recouvrements-interface.component';

describe('RecouvrementsInterfaceComponent', () => {
  let component: RecouvrementsInterfaceComponent;
  let fixture: ComponentFixture<RecouvrementsInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecouvrementsInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecouvrementsInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
