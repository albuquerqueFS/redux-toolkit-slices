import React from "react";
import { useSelector } from "react-redux";

export function CarValue() {
  const totalCost = useSelector(({ cars: { list, searchTerm } }: any) => {
    return list
      .filter((car: any) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc: any, curr: any) => acc + curr.cost, 0);
  });

  return <div className="car-value">Total cost: ${totalCost}</div>;
}
