import { IUser } from './base/i-user';

export interface IMspUser extends IUser {}

export interface IMspUsers {
    users: IMspUser[];
}
