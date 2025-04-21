import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { onCloseDateModal, onOpenDateModal } from "../store";

export const useUiStore = () => {
  const dispatch = useDispatch();

  const { isDateModalOpen } = useSelector((state) => state.ui); //conseguir algo del slice(state)

  const openDateModal = () => {
    dispatch(onOpenDateModal());
  };

  const closeDateModal = () => {
    dispatch(onCloseDateModal());
  };

  return {
    // *Propiedades
    isDateModalOpen,
    // *Metodos
    openDateModal,
    closeDateModal,
  };
};
