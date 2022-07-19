import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { allClear } from "./../../store/actions/birthdayAction";
import { useSelector } from "react-redux/";
const useListSection = () => {
  const allBirthdayList = useSelector(
    (store) => store.birthdayReducer.birthdaysList
  );
  const dispatch = useDispatch();
  const clearAll = () => {
    if (allBirthdayList.length > 0) {
      dispatch(allClear());
      toast.error("All Birthdays have been deleted");
    } else {
      toast.error("Birthday list is already empty!");
    }
  };
  return { clearAll };
};

export default useListSection;
