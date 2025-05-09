'use strict';

describe('fillTank', () => {
  const { fillTank } = require('./fillTank');

  it(
    // eslint-disable-next-line max-len
    'Should tank to full if amount to fill is greater than max tank capacity minus fuel remains', () => {
      const customer = {
        money: 1000,
        vehicle: {
          maxTankCapacity: 50,
          fuelRemains: 0,
        },
      };

      const fuelPrice = 1;
      const amountToFill = 100;

      fillTank(customer, fuelPrice, amountToFill);

      expect(customer.vehicle.fuelRemains).toBe(50);
      expect(customer.money).toBe(950);     
    }
  );

  it(
    // eslint-disable-next-line max-len
    'Should tank to amount given by customer ', () => {
      const customer = {
        money: 1000,
        vehicle: {
          maxTankCapacity: 50,
          fuelRemains: 0,
        },
      };

      const fuelPrice = 10;
      const amountToFill = 30;

      fillTank(customer, fuelPrice, amountToFill);

      expect(customer.vehicle.fuelRemains).toBe(30);
      expect(customer.money).toBe(700);     
    }
  );

  it(
    // eslint-disable-next-line max-len
    'Should tank to full if no amount is given ', () => {
      const customer = {
        money: 1000,
        vehicle: {
          maxTankCapacity: 50,
          fuelRemains: 0,
        },
      };

      const fuelPrice = 10;

      fillTank(customer, fuelPrice);

      expect(customer.vehicle.fuelRemains).toBe(50);
      expect(customer.money).toBe(500);     
    }
  );

  it(
    // eslint-disable-next-line max-len
    'Should tank to full if amount is greater than max tank capacity', () => {
      const customer = {
        money: 1000,
        vehicle: {
          maxTankCapacity: 50,
          fuelRemains: 0,
        },
      };

      const fuelPrice = 10;
      const amountToFill = 60;

      fillTank(customer, fuelPrice, amountToFill);

      expect(customer.vehicle.fuelRemains).toBe(50);
      expect(customer.money).toBe(500);     
    }
  );

  it(
    // eslint-disable-next-line max-len
    'Should tank only the amount customer can pay', () => {
      const customer = {
        money: 1000,
        vehicle: {
          maxTankCapacity: 50,
          fuelRemains: 0,
        },
      };

      const fuelPrice = 100;
      const amountToFill = 50;

      fillTank(customer, fuelPrice, amountToFill);

      expect(customer.vehicle.fuelRemains).toBe(10);
      expect(customer.money).toBe(0);     
    }
  );

  it(
    // eslint-disable-next-line max-len
    'Should round to tenth value', () => {
      const customer = {
        money: 1000,
        vehicle: {
          maxTankCapacity: 50,
          fuelRemains: 0,
        },
      };

      const fuelPrice = 44.1;
      const amountToFill = 12.5;

      fillTank(customer, fuelPrice, amountToFill);

      expect(customer.vehicle.fuelRemains).toBe(12.5);
      expect(customer.money).toBe(448.75);   
    }
  );

  it(
    // eslint-disable-next-line max-len
    'Should not pour if the amount value is lower than 2', () => {
      const customer = {
        money: 1000,
        vehicle: {
          maxTankCapacity: 50,
          fuelRemains: 0,
        },
      };

      const fuelPrice = 431;
      const amountToFill = 1.9;

      fillTank(customer, fuelPrice, amountToFill);

      expect(customer.vehicle.fuelRemains).toBe(0);
      expect(customer.money).toBe(1000);   
    }
  );

  it(
    // eslint-disable-next-line max-len
    'Should round the price to the nearest hundredth', () => {
      const customer = {
        money: 10,
        vehicle: {
          maxTankCapacity: 50,
          fuelRemains: 0,
        },
      };

      const fuelPrice = 1.333;
      const amountToFill = 5;

      fillTank(customer, fuelPrice, amountToFill);

      expect(customer.money).toBeCloseTo(3.33, 2);
    }
  );
  // write tests here
});
