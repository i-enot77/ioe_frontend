export type DetailProp = {
  title?: string;
  devNameClass?: string;
  statusClass?: string;
  detailStyle?: string;
  detailPage: boolean;
};

export type EditInputProp =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;
