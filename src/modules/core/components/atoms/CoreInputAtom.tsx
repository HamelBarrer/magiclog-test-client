import { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function CoreInputAtom({ ...props }: Props) {
  return (
    <input
      type="text"
      className="px-4 py-2 bg-inherit border-2 border-gray-400"
      {...props}
    />
  );
}
