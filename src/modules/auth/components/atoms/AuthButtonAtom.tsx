import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function AuthButtonAtom({ ...props }: Props) {
  return (
    <button
      type="button"
      className="bg-[#edeef0] text-[#9498a1] font-semibold uppercase text-xs border border-[#9498a1] py-3 rounded-[4px] w-48"
      {...props}
    />
  );
}
