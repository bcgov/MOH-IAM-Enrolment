import * as coreUser from '../../../common/i-coreuser';

export interface IUser extends coreUser.ICoreUser {}

export function getIUser(formValues): IUser[] {
    if (!formValues) return;
    return coreUser.getICoreUser(formValues);
}

export function getIUserReviewItems(iuser: IUser[]): any {
    return coreUser.getICoreUserReviewItems(iuser as coreUser.ICoreUser[]);
}
