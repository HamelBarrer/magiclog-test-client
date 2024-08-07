import CoreButtonAtom from '../../../core/components/atoms/CoreButtonAtom';
import CoreButtonLineAtom from '../../../core/components/atoms/CoreButtonLineAtom';

export default function InventoryEmptyOrganism() {
  return (
    <div className="bg-[#f8faf9]">
      <h2 className="text-[#5a6473] font-semibold text-3xl">
        Crea tu producto
      </h2>
      <p className="text-[#5a6473] font-medium">
        Organiza de manera profesional tu inventario
      </p>
      <CoreButtonLineAtom>Conocer más</CoreButtonLineAtom>
      <CoreButtonAtom>Crear producto</CoreButtonAtom>
    </div>
  );
}
