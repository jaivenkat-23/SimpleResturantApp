import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import {Params, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {DishService} from '../services/dish.service';
import { switchMap, findIndex } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import {Comment} from '../shared/comment';
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  
  @ViewChild('commentForm') commentFormDirective;
  dish:Dish;
  dishIds: string[];
  prev:string;
  next:string;
  commentForm: FormGroup;
  comment:Comment;
  errMess: string;
  dishcopy:Dish;
  
  constructor(private dishService:DishService, private activatedRoute: ActivatedRoute, private location: Location, private fb:FormBuilder,  @Inject('BaseURL') private BaseURL) { }
  
  formErrors ={
    author:'',
    rating:5,
    comment:''
  };

  validationMessages ={
    'author':{
      'required': 'Author is required',
      'minlength': 'Author must be at least 2 characters long.'
    },
    'comment':{
      'required': 'Author is required.',
      'minlength': 'comment must be at least 2 characters long.'
    }
  };
  ngOnInit() {
    this.dishService.getDishIds().subscribe(dishIds => this.dishIds = dishIds,errmess => this.errMess = <any>errmess);
    this.activatedRoute.params.pipe(switchMap((params:Params)=>this.dishService.getDish(params['id'])))
    .subscribe(dish =>{this.dish = dish; this.dishcopy = dish; this.setPrevNext(dish.id)},errmess => this.errMess = <any>errmess)
    // const id = this.activatedRoute.snapshot.params['id'];
    //  this.dishService.getDish(id).subscribe((dish)=> this.dish = dish);
    this.createForm();
    console.log(this.commentForm)
  }

  setPrevNext(dishId:string){
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length +index -1)% this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length+ index+1)% this.dishIds.length];
  }

  goBack():void {
    this.location.back();
  }

   private createForm(): void {
     this.commentForm = this.fb.group({
       author:['',[Validators.required, Validators.minLength(2)]],
       rating: 5,
       comment:['',[Validators.required, Validators.minLength(2)]]
     });

     this.commentForm.valueChanges.subscribe(data => this.onValueChanged(data));
   }

   onValueChanged(data?:any){
     if(!this.commentForm){
       return ;
     }
     const form = this.commentForm;
     for(const field in this.formErrors){
       if(this.formErrors.hasOwnProperty(field)){
         this.formErrors[field] = '';
         const control = form.get(field);
         if(control && control.dirty && !control.valid){
           const message = this.validationMessages[field];
           for(const key in control.errors){
             if(control.errors.hasOwnProperty(key)){
               this.formErrors[field] += message[key]+ ' ';
             }
           }
         }
       }
     }
   }

   onSubmit(){
     this.comment = this.commentForm.value;
     this.comment.date = new Date().toISOString();
    //  this.activatedRoute.params.pipe(switchMap((params:Params)=>this.dishService.getDish(params['id'])))
    // .subscribe(dish =>{this.dish.comments.push(this.comment)});
    this.dishcopy.comments.push(this.comment);
    this.dishService.putDish(this.dishcopy)
      .subscribe(dish => {
        this.dish = dish; this.dishcopy = dish;
      },
      errmess => { this.dish = null; this.dishcopy = null; this.errMess = <any>errmess; });
      
    
   
   }

}
