import { create } from 'zustand';
import { OnGoingState } from '../types/ongoing';
import ongoingData from '../data/ongoing';

const useOnGoing = create<OnGoingState>((set, get) => ({
  onGoing: ongoingData,
  paginedOnGoing: ongoingData,
  currentPage: 1,
  rowPerPage: 5,
  handleRemove: (key) => {
    const { onGoing } = get();
    set({ onGoing: onGoing.filter((_val, idx) => idx !== key) });
  },
  handlePage: (type) => {
    const { onGoing, currentPage, rowPerPage } = get();
    const tempPage = type === 'next' ? currentPage + 1 : currentPage - 1;
    const endRow = rowPerPage * tempPage - 1;
    const startRow = endRow - rowPerPage + 1;
    const filter = onGoing.filter((_val, key) => key >= startRow && key <= endRow);
    set({ currentPage: tempPage, paginedOnGoing: filter });
  },
}));

export default useOnGoing;
