import { User } from './../../../models/user/user-model';
import { map, BehaviorSubject, Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  constructor() { }
  
  login(login: { email: string; password: string; }) {
    throw new Error('Method not implemented.');
  }
}
