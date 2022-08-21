import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsBoardComponent } from './skills-board.component';

describe('SkillsBoardComponent', () => {
  let component: SkillsBoardComponent;
  let fixture: ComponentFixture<SkillsBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
