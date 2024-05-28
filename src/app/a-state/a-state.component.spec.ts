import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AStateComponent } from './a-state.component';

describe('AStateComponent', () => {
  let component: AStateComponent;
  let fixture: ComponentFixture<AStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AStateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
