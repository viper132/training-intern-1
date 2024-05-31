import { create } from 'zustand';
import { IUser } from '../types/user';

const userStore = create<IUser>((set) => ({
  username: '',
  password: '',
  handleUser: (type) => (ev) => {
    set({ [type]: ev.target.value });
  },
}));

export default userStore;
