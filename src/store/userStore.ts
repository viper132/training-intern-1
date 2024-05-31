import { create } from 'zustand';
import { IUser } from '../types/user';

const userStore = create<IUser>((set, get) => ({
  username: '',
  password: '',
  handleUser: (type) => (ev) => {
    set({ [type]: ev.target.value });
  },
  open: false,
  handleOpen: () => {
    const { open } = get();
    set({ open: !open });
  },
}));

export default userStore;
