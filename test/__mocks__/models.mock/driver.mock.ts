import { database } from "../database.mock";

const Driver = database.define(
  "Driver",
  {
    id: 1,
    companyId: 1,
    city: 1,
    firstName: "Jennifer",
    lastName: "Jenkins",
    email: "bayer.colt@example.com",
    phone: "793.495.9535x5566",
    avatarUrl: "http://www.barton.com/",
    status: "active",
    creationDate: new Date(" 2022-02-09 23:16:14")
  },
  {}
);

export default Driver;
