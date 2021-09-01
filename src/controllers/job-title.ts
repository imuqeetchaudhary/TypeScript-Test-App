import { Request, Response, RequestHandler } from "express";
import JobTitle from "../db/models/job-title";

export const addJobTitle: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const body = req.body;

    const newJobTitle = new JobTitle({
      ...body,
    });

    await newJobTitle.save();

    console.log("body:", body);

    res
      .status(200)
      .json({ message: "Successfully saved a new job title", newJobTitle });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
