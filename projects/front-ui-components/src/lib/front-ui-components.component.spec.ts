import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontUiComponentsComponent } from './front-ui-components.component';

describe('FrontUiComponentsComponent', () => {
  let component: FrontUiComponentsComponent;
  let fixture: ComponentFixture<FrontUiComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontUiComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontUiComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
