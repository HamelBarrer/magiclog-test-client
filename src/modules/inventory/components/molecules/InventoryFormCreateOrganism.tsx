import { useState } from 'react';
import CoreButtonAtom from '../../../core/components/atoms/CoreButtonAtom';
import CoreInputAtom from '../../../core/components/atoms/CoreInputAtom';
import CoreLabelAtom from '../../../core/components/atoms/CoreLabelAtom';

export default function InventoryFormCreateOrganism() {
  const [form, setForm] = useState({
    name: '',
    sku: '',
    quantity: 0,
    price: 0,
  });
  const { name, sku, quantity, price } = form;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="w-80 mt-4 flex flex-col gap-6">
      <CoreLabelAtom>
        Name
        <CoreInputAtom name="name" value={name} onChange={handleChange} />
      </CoreLabelAtom>
      <CoreLabelAtom>
        SKU
        <CoreInputAtom name="sku" value={sku} onChange={handleChange} />
      </CoreLabelAtom>
      <CoreLabelAtom>
        Cantidad
        <CoreInputAtom
          type="number"
          name="quantity"
          value={quantity}
          onChange={handleChange}
        />
      </CoreLabelAtom>
      <CoreLabelAtom>
        Precio
        <CoreInputAtom
          type="number"
          name="price"
          value={price}
          onChange={handleChange}
        />
      </CoreLabelAtom>
      <div className="flex justify-end">
        <CoreButtonAtom type="submit">Crear</CoreButtonAtom>
      </div>
    </form>
  );
}
