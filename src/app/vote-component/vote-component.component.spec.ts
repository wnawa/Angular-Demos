import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteComponentComponent } from './vote-component.component';

describe('VoteComponentComponent', () => {
  let component: VoteComponentComponent;
  let fixture: ComponentFixture<VoteComponentComponent>;

  beforeEach(async () => {//matcher
    await TestBed.configureTestingModule({
      imports: [VoteComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should increment vote when upvoted',()=>{
    component.upVote()
    expect(component.votes).toBe(1)

  })
  it('Should decrement vote when downvoted',()=>{
    component.downVote()
    expect(component.votes).toBe(-1)

  })
});
