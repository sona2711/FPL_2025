export type UserRole = "Admin"| "User" | "Guest"
export type PageRoute = "./" | "./AdminPage" | "./UserAccount"
export type Status = "sucsess"| "loading" | "error"| "idle"


export type Login = {
    role: UserRole;
    route: PageRoute;
    status?: Status
}


export interface ILoginForm {
    email: string;
    password: string | number;
}

export interface ISignupForm extends ILoginForm {
    username: string;
    confirmPassword: string | number;

}
export type ApiResponse<T> = {
    status: Status;
    data: T;
    error?: string;
}

export type MessageStatus = "scheduled" | "sent"| "delivered" | "seen"| "failed"| "rejected"

export interface IMessage{
    id: number, 
    status: MessageStatus;
    body: string;
    starred?: false;
}
