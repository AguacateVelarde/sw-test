import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SwapiService } from 'src/app/services/swapi.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

enum TypeError {
  UNKNOW,
  ERROR_404,
  NORMAL
}
@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.scss']
})
export class StarshipDetailComponent implements OnInit {
  id : number = 0
  data : any = null
  content : Object = null
  type: TypeError =  TypeError.UNKNOW

  registerForm: FormGroup;
  submitted = false;

  errormsn:string = ''
  status:string = ''

   constructor(
    private route : ActivatedRoute,
    private swapi : SwapiService,
    private formBuilder: FormBuilder,
    private formService : FormService
  ) { 
    
  }

  async ngOnInit() {
    this.route.params.subscribe( async (params) => {
      this.id = +params['id'];
      console.log( 'id', this.id )
      this.swapi.getStarshipById( this.id )
      .subscribe( 
        data =>{
          this.type = TypeError.NORMAL
          this.content = data 
          this.loadinData( this.content )
        }, error => this.errorHandler( error)
      )
   });

   
  }

  loadinData( content ){
    this.registerForm = this.formBuilder.group({
      name: [content.name, Validators.required],
      manufacturer: [content.manufacturer, Validators.required ],
      passengers: [content.passengers, [
        Validators.required, 
        Validators.pattern("^[0-9]*$")
      ]],
    });
  }


  get eval() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid)
          return;
      console.log( 'Send form to my API')
      console.log( this.registerForm.value )

      this.formService.insertForm(this.registerForm.value)
      .subscribe(
        data => this.saveForm( data ),
        error => this.handlerForm( error )
      )

  }

  saveForm( data ){
    console.log( data )
    this.status = 'Ok'
    this.errormsn = ''
  }

  handlerForm( error ){
    this.errormsn = error.error.message
    this.status = ''
  }


  errorHandler( error ){
    this.type = TypeError.ERROR_404
  }
}
