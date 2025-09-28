import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoComponent1 } from './info-component1';

describe('InfoComponent1', () => {
  let component: InfoComponent1;
  let fixture: ComponentFixture<InfoComponent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoComponent1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
