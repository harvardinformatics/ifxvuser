declare class User {
    constructor(user: any);
    user: any;
    get id(): any;
    get ifxid(): any;
    get username(): any;
    set fullName(arg: any);
    get fullName(): any;
    set firstName(arg: any);
    get firstName(): any;
    set lastName(arg: any);
    get lastName(): any;
    set email(arg: any);
    get email(): any;
    get lastUpdate(): any;
    get dateJoined(): any;
    set groups(arg: any);
    get groups(): any;
    addToGroup(group: any): void;
    hasGroup(group: any): boolean;
    isActive(): any;
    isDjangoStaff(): any;
}
declare class UserAPI {
    constructor(apiRoot: any, auth: any);
    apiRoot: any;
    auth: any;
    getUsers(params: any): Promise<any[]>;
    updateUser(user: any): any;
    updateUserAddress(data: any): any;
    getGroups(): any;
    userStyle(user: any): string;
}