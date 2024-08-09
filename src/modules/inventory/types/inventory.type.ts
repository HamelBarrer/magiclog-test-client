export interface IInventory {
  inventoryId?: number;
  name: string;
  sku: string;
  quantity: number;
  price: number;
}

export interface IInventoryCreate extends IInventory {
  userId: number;
}
