import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TormentComponent } from './torment.component';

describe('TormentComponent', () => {
  let component: TormentComponent;
  let fixture: ComponentFixture<TormentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TormentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TormentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
