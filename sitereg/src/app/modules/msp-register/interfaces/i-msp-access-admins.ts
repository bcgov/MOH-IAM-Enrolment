import { IUserMsp } from './base/i-user-msp';

export interface IMspAccessAdmins {
    admins: IMspAccessAdmin[];
}

export interface IMspAccessAdmin extends IUserMsp {}
