import { Request, Response, NextFunction } from "express";

async function validation(schema: any) {
  async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    console.log(body)
    try {
      await schema.isValid(body, { abortEarly: false });
      next();
    } catch (err: any) {
      res.status(422).json({
        message: err.errors,
      });
    }
  };
}

export { validation };
