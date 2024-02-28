import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdventurerComponent } from './create-adventurer.component';

describe('CreateAdventurerComponent', () => {
  let component: CreateAdventurerComponent;
  let fixture: ComponentFixture<CreateAdventurerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAdventurerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateAdventurerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
