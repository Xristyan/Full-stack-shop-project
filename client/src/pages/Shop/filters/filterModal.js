import Modal from "../../../UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import Filter from "./filter";
import classes from "./filterModal.module.css";
import { modalActions } from "../../../Store/modalSlice";
const FilterModal = () => {
  const dispatch = useDispatch();
  const showFilterModal = useSelector((state) => state.modal.showFilter);
  const screenWidth = useSelector((state) => state.screenWidth.screenWidth);
  return (
    <Modal className={"filterModal"}>
      <button
        onClick={() => {
          dispatch(modalActions.toggleFilterModal(false));
        }}
        className={classes.closeBtn}
      >
        X
      </button>
      <Filter className={"modalFilter"} />
    </Modal>
  );
};
export default FilterModal;
