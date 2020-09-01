import express from "express";
import routes from "../routes";
import {
  editVideo,
  DeleteVideo,
  videoDetail,
  getUpload,
  postUpload,
} from "../controllers/videoControllers";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, DeleteVideo);

export default videoRouter;
