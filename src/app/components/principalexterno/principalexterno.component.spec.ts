import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalexternoComponent } from './principalexterno.component';

describe('PrincipalexternoComponent', () => {
  let component: PrincipalexternoComponent;
  let fixture: ComponentFixture<PrincipalexternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalexternoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrincipalexternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
