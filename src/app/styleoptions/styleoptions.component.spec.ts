import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleoptionsComponent } from './styleoptions.component';

describe('StyleoptionsComponent', () => {
  let component: StyleoptionsComponent;
  let fixture: ComponentFixture<StyleoptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleoptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
