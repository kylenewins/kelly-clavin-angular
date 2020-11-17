import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalIllustrationComponent } from './digital-illustration.component';

describe('DigitalIllustrationComponent', () => {
  let component: DigitalIllustrationComponent;
  let fixture: ComponentFixture<DigitalIllustrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalIllustrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalIllustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
