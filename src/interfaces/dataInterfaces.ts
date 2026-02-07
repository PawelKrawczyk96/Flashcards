export interface ILoginData {
  email: string;
  password: string;
}

export interface IRegisterData extends ILoginData {
  name: string;
}

export interface IUserData {
  id: string;
  email: string;
  name: string;
}

export interface IUserContext {
  user: IUserData | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  getUserData: () => void;
}
