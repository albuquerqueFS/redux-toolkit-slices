import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

export function CarList() {
  const dispatch = useDispatch();
  const { cars, name } = useSelector(
    ({ form, cars: { list, searchTerm } }: any) => {
      const filteredCars = list.filter((car: any) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return {
        cars: filteredCars,
        name: form.name,
      };
    }
  );

  const handleCarDelete = (car: any) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car: any) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
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
