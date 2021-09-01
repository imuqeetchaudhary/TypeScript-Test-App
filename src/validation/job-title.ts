import * as yup from "yup";

const addJobTitle : any = yup.object({
  titleName: yup.string().required(),
  allowedLeaves: yup.number().required(),
});

export { addJobTitle };
