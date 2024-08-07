import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function AuthButtonLineAtom({ ...props }: Props) {
  return (
    <button
      type="button"
      className="border-b border-[#789bae] text-[#789bae]"
      {...props}
    />
  );
}
