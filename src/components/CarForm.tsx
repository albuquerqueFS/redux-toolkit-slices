import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

export function CarForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state: any) => state.form);

  function handleNameChange(e: any) {
    dispatch(changeName(e.target.value));
  }

  function handleCostChange(e: any) {
    const carCost = parseInt(e.target.value) || 0;
    dispatch(changeCost(carCost));
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    dispatch(addCar({ name, cost }));
    dispatch(changeCost(0));
    dispatch(changeName(""));
  }

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              type="text"
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || ""}
              onChange={handleCostChange}
              type="number"
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
