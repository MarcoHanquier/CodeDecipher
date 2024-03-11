import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtbashComponent } from './atbash.component';

describe('AtbashComponent', () => {
  let component: AtbashComponent;
  let fixture: ComponentFixture<AtbashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtbashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtbashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
