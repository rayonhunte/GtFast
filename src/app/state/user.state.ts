import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';
import { UserModel } from '../shared/models/user.model';

interface UserStateModel  {
    user: UserModel
}

@State<UserStateModel> ({
    name: 'user',
    defaults: {
        user: undefined
    }
})

@Injectable()
export class UserState {
    
}