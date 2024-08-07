import { LabelHTMLAttributes } from 'react';

type Props = LabelHTMLAttributes<HTMLLabelElement>;

export default function AuthLabelAtom({ ...props }: Props) {
  return <label className="flex flex-col gap-1" {...props} />;
}
