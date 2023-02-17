import React from "react";
import { useSelector } from "react-redux";

export function CarValue() {
  const totalCost = useSelector(({ cars: { list, searchTerm } }: any) => {
    const filteredCars = list.filter((car: any) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const cost = filteredCars.reduce(
      (acc: any, curr: any) => acc + curr.cost,
      0
    );
    return cost;
  });

  return <div className="car-value">Total cost: ${totalCost}</div>;
}
