// Challenge 04 - GET /cars/stats
//
// Goal: calculate car statistics from an array of objects and return a
// plain-text report from an Express GET endpoint.
//
// Rules:
// - Do not hard-code the final totals, city counts, average, or car names.
// - Use for...of loops. Do not use map, filter, reduce, or sort yet.
// - Calculate the statistics from the cars array.
// - Find the most and least expensive cars without changing the array order.
// - Ask for a hint before asking for the full solution.

const cars = [
  { brand: "Dacia", model: "Logan", city: "Casablanca", price: 80000 },
  { brand: "Renault", model: "Clio", city: "Casablanca", price: 120000 },
  { brand: "Hyundai", model: "i20", city: "Casablanca", price: 130000 },
  { brand: "Peugeot", model: "208", city: "Rabat", price: 140000 },
  { brand: "Volkswagen", model: "Golf", city: "Rabat", price: 150000 },
  { brand: "Ford", model: "Focus", city: "Rabat", price: 160000 },
  { brand: "Kia", model: "Sportage", city: "Marrakech", price: 170000 },
  { brand: "Nissan", model: "Qashqai", city: "Marrakech", price: 180000 },
  { brand: "Seat", model: "Leon", city: "Tanger", price: 190000 },
  { brand: "Mercedes", model: "A-Class", city: "Tanger", price: 200000 },
  { brand: "Fiat", model: "Tipo", city: "Fès", price: 89992 },
  { brand: "Toyota", model: "C-HR", city: "Agadir", price: 300000 },
];

// Questions to answer before coding:
// 1. What value will you use to store the total of all prices?
// Answer:
//
// 2. What object shape can store a count for every city?
// Answer:
//
// 3. Which car should be the first value of the cheapest and mostExpensive
//    variables before the loop starts?
// Answer:
//
// 4. Why should the final average use Math.round()?
// Answer:

// Tasks:
// 1. Create the GET /cars/stats route in your Express application.
// 2. Get the total number of cars from the array.
// 3. Create an empty cityCounts object.
// 4. Use one main for...of loop to:
//    - add every price to a totalPrice variable;
//    - count how many cars belong to each city;
//    - find the most expensive car;
//    - find the cheapest car.
// 5. Calculate the average price and round it with Math.round().
// 6. Build the response from the calculated values.
// 7. Return the response as plain text, not JSON.
// 8. Test the endpoint in the browser or Postman.
//
// The result of GET /cars/stats must be exactly:
//
// Total cars: 12
// Casablanca: 3
// Rabat: 3
// Marrakech: 2
// Tanger: 2
// Fès: 1
// Agadir: 1
// Average price: 159166
// Most expensive: Toyota C-HR
// Cheapest: Dacia Logan
//
// Express reminder:
// app.get("/cars/stats", (req, res) => {
//   // Write your solution here.
// });

// Write your calculation code below this line before moving it into the route.

import express from "express";
const route = express.Router();

class Cars {
  constructor() {
    this.cars = cars;
  }

  totalCars() {
    const total = this.cars.map((car) => car.model).length;
    return total;
  }

  totalPrice() {
    const totalPrice = this.cars.reduce((totalCars, car) => {
      totalCars = totalCars + car.price;
      return totalCars;
    }, 0);
    return totalPrice;
  }

  belongsCarsCount() {
    // const city = {
    //   casa: 4,
    //   rabat: 7
    // }

    const group = this.cars.reduce((totalCars, car) => {
      if (!totalCars[car.city]) {
        totalCars[car.city] = 1;
      }

      totalCars[car.city] += 1;
      return totalCars;
    }, {});
    return group;
  }
  expensiveCar() {
    const expensive = this.cars.reduce((ex, car) => {
      return ex.price > 0 ? ex : car;
    }, 0);
    return expensive;
  }

  avgPrice() {
    const avg = this.totalPrice() / this.totalCars();
    return avg;
  }

  info(req, res) {
    res.render("test", {
      totalCars: this.totalCars(),
      totalPrice: this.totalPrice(),
      belongsCarsCount: this.belongsCarsCount(),
      expensiveCar: this.expensiveCar(),
    });
  }
}

const test = new Cars();
route.get("/statistics", (req, res) => {
  test.info(req, res);
});

export default route;
