import { addUser } from "../controllers/user";

const routes = app => {
    app.route("/").post(addUser);
};

export default routes;
