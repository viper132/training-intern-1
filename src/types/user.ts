export interface IUser {
  username: string;
  password: string;
  handleUser: (type: 'username' | 'password') => (ev: React.ChangeEvent<HTMLInputElement>) => void;
  open: boolean;
  handleOpen: VoidFunction;
}
