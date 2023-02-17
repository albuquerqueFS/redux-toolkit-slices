import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

export function CarList() {
  const dispatch = useDispatch();
  const cars = useSelector((state: any) => state.cars.list);

  const handleCarDelete = (car: any) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car: any) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          onClick={() => handleCarDelete(car)}
          className="button is-danger"
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}
