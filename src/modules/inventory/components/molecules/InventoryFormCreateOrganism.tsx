import { useState } from 'react';
import { useStore } from '../../../../store/store';
import CoreButtonAtom from '../../../core/components/atoms/CoreButtonAtom';
import CoreInputAtom from '../../../core/components/atoms/CoreInputAtom';
import CoreLabelAtom from '../../../core/components/atoms/CoreLabelAtom';
import { inventoryCreateService } from '../../services/inventory.service';

export default function InventoryFormCreateOrganism() {
  const { authCurrentUser } = useStore();

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const quantityNew = Number(quantity);
    const priceNew = Number(price);

    await inventoryCreateService(
      {
        name,
        sku,
        price: priceNew,
        quantity: quantityNew,
        userId: authCurrentUser.userId,
      },
      authCurrentUser.token,
    );
  };

  return (
    <form className="w-80 mt-4 flex flex-col gap-6" onSubmit={handleSubmit}>
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
