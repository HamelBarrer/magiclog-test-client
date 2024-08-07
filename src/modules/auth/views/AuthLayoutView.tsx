import { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';

interface Props {
  openModel: boolean;
  setOpenModel: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AuthLayoutView({ openModel, setOpenModel }: Props) {
  const refDialog = useRef<HTMLDialogElement | null>(null);

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
    <dialog ref={refDialog} className="p-4 rounded-md">
      <Outlet />
    </dialog>
  );
}
