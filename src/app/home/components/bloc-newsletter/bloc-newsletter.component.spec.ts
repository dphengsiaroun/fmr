import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocNewsletterComponent } from './bloc-newsletter.component';

describe('BlocNewsletterComponent', () => {
  let component: BlocNewsletterComponent;
  let fixture: ComponentFixture<BlocNewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocNewsletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
