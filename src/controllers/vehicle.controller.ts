import { Request, RequestHandler, Response } from "express";
import Vehicle from "../models/vehicle.model";
import Database from "../config/database.config";

export default class VehicleController {
  public constructor() {
    Database.connect();
    Vehicle.initialize(Database.getInstance());
  }

  public getVehiclesByDriverId: RequestHandler = async (req: Request, res: Response) => {
    try {
      const { driverId } = req.query;

      if (!driverId) {
        throw new Error("driverId is required");
      }
      const vehicles = await Vehicle.findAll({
        where: {
          driverId: `${driverId}`
        }
      });
      return res.status(200).send(vehicles);
    } catch (error) {
      return res.status(400).send({ message: `The request body is not valid: ${error}` });
    }
  };

  public createVehicle: RequestHandler = async (req: Request, res: Response) => {
    try {
      const { capacity, driverId, model, plate, type } = req.body;

      if (!capacity || !driverId || !model || !plate || !type) {
        throw new Error("capacity, driverId, model, plate, type are required");
      }
      const creationDate = new Date();
      const vehicle = await Vehicle.create({
        capacity,
        creationDate,
        driverId,
        model,
        plate,
        type
      });

      return res.status(201).send(vehicle);
    } catch (error) {
      return res.status(400).send({ message: `The request body is not valid: ${error}` });
    }
  };

  public updateVehicle: RequestHandler = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { capacity, driverId, model, plate, type } = req.body;

      if (!id) {
        throw new Error("id is required");
      }
      const vehicle = await Vehicle.findOne({
        where: {
          id: `${id}`
        }
      });

      if (!vehicle) {
        throw new Error("Vehicle not found");
      }

      await vehicle.update({
        capacity,
        driverId,
        model,
        plate,
        type
      });

      return res.status(240);
    } catch (error) {
      return res.status(400).send({ message: `The request body is not valid: ${error}` });
    }
  };

  public deleteVehicle: RequestHandler = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      if (!id) {
        throw new Error("id is required");
      }
      const vehicle = await Vehicle.findOne({
        where: {
          id: `${id}`
        }
      });

      if (!vehicle) {
        throw new Error("Vehicle not found");
      }

      await vehicle.destroy();

      return res.status(200).send({ message: "Vehicle deleted" });
    } catch (error) {
      return res.status(400).send({ message: `The request body is not valid: ${error}` });
    }
  };
}
