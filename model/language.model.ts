import { Schema, model } from "mongoose";

interface ILanguages {
  name: String;
}

const languageSchema = new Schema<ILanguages>({
  name: { type: String, required: true },
});

const LanguageModel = model<ILanguages>("Language", languageSchema);

export default LanguageModel;
