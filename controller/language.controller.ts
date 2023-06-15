import { Request, Response } from "express";
import LanguageModel from "../model/language.model";

export class LanguageController {
  static async listLanguages(req: Request, res: Response): Promise<void> {
    try {
      const languages = await LanguageModel.find();
      res.status(200).send(languages);
    } catch (error) {}
  }
}
