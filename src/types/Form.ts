export type RoleType = 'student' | 'employer';

export type NewUserType = {
    username: string;
    password: string;
    email: string;
}

export type NewUserStateType = NewUserType | string;

type UserType = {
    username: string;
    email: string;
    password: string;
    role: string;
}

export type thenDataType = {
    Userdata: UserType;
    Token:string;
}