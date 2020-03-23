import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesactivarClienteComponent } from './desactivar-cliente.component';

describe('DesactivarClienteComponent', () => {
  let component: DesactivarClienteComponent;
  let fixture: ComponentFixture<DesactivarClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesactivarClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesactivarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
