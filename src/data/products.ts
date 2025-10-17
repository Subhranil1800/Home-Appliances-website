import { Product } from "@/types/product";
import refrigeratorImg from "@/assets/refrigerator.jpg";
import washingMachineImg from "@/assets/washing-machine.jpg";
import microwaveImg from "@/assets/microwave.jpg";
import airConditionerImg from "@/assets/air-conditioner.jpg";
import televisionImg from "@/assets/television.jpg";
import dishwasherImg from "@/assets/dishwasher.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Premium French Door Refrigerator",
    price: 89999,
    description: "Spacious 650L French door refrigerator with smart cooling technology and water dispenser. Features advanced temperature control and energy-efficient operation.",
    image: refrigeratorImg,
    category: "Refrigerators",
    specs: [
      "650L Total Capacity",
      "Smart Cooling Technology",
      "Water & Ice Dispenser",
      "Energy Star 5 Rating",
      "Digital Temperature Control"
    ],
    rating: 4.8,
    reviews: 234
  },
  {
    id: "2",
    name: "Front Load Washing Machine",
    price: 42999,
    description: "Advanced 8kg front load washing machine with AI-powered wash cycles and steam cleaning. Delivers exceptional cleaning performance while saving water and energy.",
    image: washingMachineImg,
    category: "Washing Machines",
    specs: [
      "8kg Load Capacity",
      "AI Smart Wash",
      "Steam Cleaning",
      "1400 RPM Spin Speed",
      "15 Wash Programs"
    ],
    rating: 4.6,
    reviews: 189
  },
  {
    id: "3",
    name: "Convection Microwave Oven",
    price: 18999,
    description: "Versatile 32L convection microwave with grill and baking capabilities. Perfect for modern kitchens with multiple cooking modes and easy controls.",
    image: microwaveImg,
    category: "Microwaves",
    specs: [
      "32L Capacity",
      "Convection + Grill",
      "Auto Cook Menus",
      "Digital Display",
      "Child Safety Lock"
    ],
    rating: 4.5,
    reviews: 156
  },
  {
    id: "4",
    name: "Inverter Split Air Conditioner",
    price: 38999,
    description: "Energy-efficient 1.5 ton inverter AC with dual rotary compressor. Provides powerful cooling with whisper-quiet operation and smart climate control.",
    image: airConditionerImg,
    category: "Air Conditioners",
    specs: [
      "1.5 Ton Capacity",
      "5 Star Energy Rating",
      "Inverter Technology",
      "Anti-Bacterial Filter",
      "Smart Temperature Control"
    ],
    rating: 4.7,
    reviews: 298
  },
  {
    id: "5",
    name: "4K Ultra HD Smart Television",
    price: 54999,
    description: "Immersive 55-inch 4K Smart TV with HDR support and built-in streaming apps. Experience cinema-quality visuals with vibrant colors and deep contrasts.",
    image: televisionImg,
    category: "Televisions",
    specs: [
      "55 Inch Display",
      "4K Ultra HD Resolution",
      "HDR10+ Support",
      "Smart TV OS",
      "4 HDMI Ports"
    ],
    rating: 4.9,
    reviews: 412
  },
  {
    id: "6",
    name: "Built-in Dishwasher",
    price: 45999,
    description: "Premium built-in dishwasher with 14 place settings and advanced wash programs. Features quiet operation and efficient water usage for spotless dishes.",
    image: dishwasherImg,
    category: "Dishwashers",
    specs: [
      "14 Place Settings",
      "6 Wash Programs",
      "Energy Star Certified",
      "Delay Start Timer",
      "Low Noise Operation"
    ],
    rating: 4.4,
    reviews: 87
  }
];
