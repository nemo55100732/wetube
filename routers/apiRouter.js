import express from "express";
import routes from "../routes";
import {
  postRegisterView,
  postAddComment,
} from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post(routes.registerview, postRegisterView);
apiRouter.post(routes.addComment, postAddComment);

export default apiRouter;
