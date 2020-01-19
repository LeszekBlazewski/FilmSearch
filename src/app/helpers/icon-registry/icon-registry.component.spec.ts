import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconRegistryComponent } from './icon-registry.component';

describe('IconRegistryComponent', () => {
  let component: IconRegistryComponent;
  let fixture: ComponentFixture<IconRegistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconRegistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
