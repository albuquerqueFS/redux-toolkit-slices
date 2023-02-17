import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

export function CarSearch() {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((state: any) => state.cars.searchTerm);

  const handleSearchTermChange = (e: any) => {
    dispatch(changeSearchTerm(e.target.value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3">My cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          type="text"
          className="input"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
}
