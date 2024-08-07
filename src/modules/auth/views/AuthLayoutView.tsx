import { useEffect, useRef, useState } from 'react';
import AuthLoginView from './AuthLoginView';
import AuthRegisterAccountView from './AuthRegisterAccountView';

interface Props {
  openModel: boolean;
  setOpenModel: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AuthLayoutView({ openModel, setOpenModel }: Props) {
  const refDialog = useRef<HTMLDialogElement | null>(null);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (openModel) {
      refDialog.current?.showModal();
    }
  }, [openModel]);

  useEffect(() => {
    refDialog.current?.addEventListener('close', () => {
      setOpenModel(false);
    });
  }, [setOpenModel]);

  return (
    <dialog
      ref={refDialog}
      className="bg-[#f8faf9] px-8 py-6 rounded-md min-w-[28rem]"
    >
      {isLogin ? (
        <AuthLoginView setIsLogin={setIsLogin} />
      ) : (
        <AuthRegisterAccountView setIsLogin={setIsLogin} />
      )}
    </dialog>
  );
}
