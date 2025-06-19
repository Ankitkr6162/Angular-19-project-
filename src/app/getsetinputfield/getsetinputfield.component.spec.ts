import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsetinputfieldComponent } from './getsetinputfield.component';

describe('GetsetinputfieldComponent', () => {
  let component: GetsetinputfieldComponent;
  let fixture: ComponentFixture<GetsetinputfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetsetinputfieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetsetinputfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
