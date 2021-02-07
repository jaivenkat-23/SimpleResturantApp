import { Component, OnInit, Inject } from '@angular/core';
import {Leader} from '../shared/leader';
import {LeaderService} from '../services/leader.service';
import {Dish} from '../shared/dish';
import {DishService} from '../services/dish.service';
import {Promotion} from '../shared/promotion';
import {PromotionService} from '../services/promotion.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  dishErrMess: string;
  promotionErrMess: string;
  leaderErrMess: string;
  leaders:Leader[];
  errMess: string;
  constructor(private dishservice: DishService ,
    private promotionservice: PromotionService ,
    private leaderservice: LeaderService ,
    @Inject('BaseURL') public BaseURL) {
}
ngOnInit() {
this.leaderservice.getLeaders()
.subscribe(leaders => this.leaders = leaders ,
errmess => this.errMess = <any>errmess);
this.dishservice.getFeaturedDish().subscribe(dish => this.dish = dish ,
  dishErrMess => this.dishErrMess = <any>dishErrMess);

this.leaderservice.getFeaturedleader().subscribe(leader => this.leader = leader ,
  leaderErrMess => this.leaderErrMess = <any>leaderErrMess);
}

}
