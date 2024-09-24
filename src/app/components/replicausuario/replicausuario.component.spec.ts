import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplicausuarioComponent } from './replicausuario.component';

describe('ReplicausuarioComponent', () => {
  let component: ReplicausuarioComponent;
  let fixture: ComponentFixture<ReplicausuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReplicausuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReplicausuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
