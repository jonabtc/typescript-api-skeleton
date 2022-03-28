// import SequelizeMock from "sequelize-mock";

// export default class DatabaseMock {
//   private static sequelize: SequelizeMock;

//   public static async connect(): Promise<SequelizeMock> {
//     if (DatabaseMock.sequelize) {
//       return DatabaseMock.sequelize;
//     }

//     DatabaseMock.sequelize = new SequelizeMock({
//       dialect: "mysql"
//     });
//     try {
//       await DatabaseMock.sequelize.authenticate();
//       await DatabaseMock.sequelize.sync();
//       console.log("Connection has been established successfully.");
//     } catch (error) {
//       console.error("Unable to connect to the database:", error);
//     }

//     return DatabaseMock.sequelize;
//   }
//   public static async disconnect(): Promise<void> {
//     if (DatabaseMock.sequelize) {
//       await DatabaseMock.sequelize.close();
//     }
//   }
//   static getInstance(): SequelizeMock {
//     return DatabaseMock.sequelize;
//   }
// }

import { DataTypes } from "sequelize/types";
import SequelizeMock from "sequelize-mock";

const database = new SequelizeMock();

database.define("Vehicle", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  driverId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "driver_id",
    references: {
      model: "Driver",
      key: "id"
    }
  }
});

export default database;
