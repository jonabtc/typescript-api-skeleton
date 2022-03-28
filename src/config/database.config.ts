import { Sequelize } from "sequelize";

export default class Database {
  private static sequelize: Sequelize;

  public static async connect(): Promise<Sequelize> {
    if (Database.sequelize) {
      return Database.sequelize;
    }

    Database.sequelize = new Sequelize({
      dialect: "mysql",
      database: "shippify5", //process.env.DB_NAME,
      host: "shippify-hiring.cv2sgxogwffx.sa-east-1.rds.amazonaws.com", //process.env.DB_HOST,
      password: "ubnpS3rySnj88Sum", //process.env.DB_PASSWORD,
      // port: Number(process.env.DB_PORT),
      username: "candidate5", //process.env.DB_USER
      logging: console.log
    });
    try {
      await Database.sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }

    return Database.sequelize;
  }
  public static async disconnect(): Promise<void> {
    if (Database.sequelize) {
      await Database.sequelize.close();
    }
  }
  public static getInstance(): Sequelize {
    return Database.sequelize;
  }
}
