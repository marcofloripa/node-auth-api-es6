import { addUser, getUsers, getUser } from "../controllers/user";

const routes = app => {
    app.route("/api/users")
        .post(addUser)
        .get(getUsers);
    app.route("/api/users/:userId").get(getUser);
};

export default routes;
