import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-verification-porte',
  templateUrl: './verification-porte.component.html',
  styleUrls: ['./verification-porte.component.css']
})
export class VerificationPorteComponent implements OnInit{
  form: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {
    this.form = this.fb.group({
      structure: ['', Validators.required],
      organe: ['', Validators.required],
      tablier: ['', Validators.required],
      mecanisme: ['', Validators.required],
      dispoArretMaintien: ['', Validators.required],
      dispoSecu: ['', Validators.required],
      manoeuvre: ['', Validators.required],
      signalisation: ['', Validators.required],
      equipementElect: ['', Validators.required],
    });
  }
  data: string | undefined;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.data = params['data'];
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.form.reset();
  }

}
