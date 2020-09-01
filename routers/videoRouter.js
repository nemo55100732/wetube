import express from "express";
import routes from "../routes";
import {
  videos,
  upload,
  editVideo,
  DeleteVideo,
  videoDetail,
} from "../controllers/videoControllers";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, DeleteVideo);

export default videoRouter;
