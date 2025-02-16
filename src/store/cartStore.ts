import { create } from "zustand";

export type CoffeeSize = "S" | "M" | "L";

interface CartItem {
  id: string;
  name: string;
  description: string;
  price: string;
  stars: string;
  image: any;
  opinions: string;
  longDescription: string;
  quantity: number;
  size: CoffeeSize;
  specialInstructions?: string;
}

interface DeliveryAddress {
  id: string;
  title: string;
  address: string;
  latitude: number;
  longitude: number;
  icon: string;
}

interface CartState {
  items: CartItem[];
  deliveryMode: "delivery" | "pickup";
  selectedAddress: DeliveryAddress | null;
  addresses: DeliveryAddress[];
  selectedTime: "now" | "later";
  scheduledTime?: Date;

  addToCart: (
    item: Omit<CartItem, "quantity" | "size">,
    size: CoffeeSize
  ) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  updateSize: (itemId: string, size: CoffeeSize) => void;
  updateSpecialInstructions: (itemId: string, instructions: string) => void;
  clearCart: () => void;

  setDeliveryMode: (mode: "delivery" | "pickup") => void;
  setSelectedAddress: (address: DeliveryAddress | null) => void;
  addAddress: (address: DeliveryAddress) => void;
  removeAddress: (addressId: string) => void;
  setSelectedTime: (time: "now" | "later", scheduledTime?: Date) => void;

  getItemTotal: (itemId: string) => number;
  getSubtotal: () => number;
  getDeliveryFee: () => number;
  getTotal: () => number;
}

const sizePriceMultipliers = {
  S: 1,
  M: 1.2,
  L: 1.4,
};

const defaultAddresses: DeliveryAddress[] = [
  {
    id: "home",
    title: "Home",
    address: "123 Main St, New York, NY 10001",
    latitude: 40.7128,
    longitude: -74.006,
    icon: "home",
  },
  {
    id: "work",
    title: "Work",
    address: "456 Office Ave, New York, NY 10002",
    latitude: 40.7112,
    longitude: -74.0055,
    icon: "business",
  },
];

const useCartStore = create<CartState>((set, get) => ({
  items: [],
  deliveryMode: "delivery",
  selectedAddress: defaultAddresses[0],
  addresses: defaultAddresses,
  selectedTime: "now",

  
  addToCart: (item, size) => {
    const { items } = get();
    const existingItem = items.find((i) => i.id === item.id && i.size === size);

    if (existingItem) {
      set({
        items: items.map((i) =>
          i.id === item.id && i.size === size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        ),
      });
    } else {
      set({
        items: [...items, { ...item, quantity: 1, size }],
      });
    }
  },

  removeFromCart: (itemId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== itemId),
    })),

  updateQuantity: (itemId, quantity) => {
    if (quantity < 1) return;
    set((state) => ({
      items: state.items.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      ),
    }));
  },

  updateSize: (itemId, size) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === itemId ? { ...item, size } : item
      ),
    })),

  updateSpecialInstructions: (itemId, instructions) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === itemId
          ? { ...item, specialInstructions: instructions }
          : item
      ),
    })),

  clearCart: () => set({ items: [] }),

  setDeliveryMode: (mode) => set({ deliveryMode: mode }),

  setSelectedAddress: (address) => set({ selectedAddress: address }),

  addAddress: (address) =>
    set((state) => ({
      addresses: [...state.addresses, address],
    })),

  removeAddress: (addressId) =>
    set((state) => ({
      addresses: state.addresses.filter((addr) => addr.id !== addressId),
      selectedAddress:
        state.selectedAddress?.id === addressId
          ? state.addresses[0]
          : state.selectedAddress,
    })),

  setSelectedTime: (time, scheduledTime) =>
    set({ selectedTime: time, scheduledTime }),

  getItemTotal: (itemId) => {
    const item = get().items.find((i) => i.id === itemId);
    if (!item) return 0;
    const basePrice = parseFloat(item.price.replace("$", ""));
    const sizeMultiplier = sizePriceMultipliers[item.size];
    return basePrice * item.quantity * sizeMultiplier;
  },

  getSubtotal: () => {
    const { items } = get();
    return items.reduce((total, item) => {
      const basePrice = parseFloat(item.price.replace("$", ""));
      const sizeMultiplier = sizePriceMultipliers[item.size];
      return total + basePrice * item.quantity * sizeMultiplier;
    }, 0);
  },

  getDeliveryFee: () => {
    const { deliveryMode, getSubtotal } = get();
    const subtotal = getSubtotal();
    if (deliveryMode === "pickup" || subtotal >= 30) return 0;
    return 2.0;
  },

  getTotal: () => {
    const { getSubtotal, getDeliveryFee } = get();
    return getSubtotal() + getDeliveryFee();
  },
}));

export default useCartStore;
