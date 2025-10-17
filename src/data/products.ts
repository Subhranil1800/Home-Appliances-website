import { Product } from "@/types/product";
import refrigeratorImg from "@/assets/refrigerator.jpg";
import washingMachineImg from "@/assets/washing-machine.jpg";
import microwaveImg from "@/assets/microwave.jpg";
import airConditionerImg from "@/assets/air-conditioner.jpg";
import televisionImg from "@/assets/television.jpg";
import dishwasherImg from "@/assets/dishwasher.jpg";
import vacuumCleanerImg from "@/assets/vacuum-cleaner.jpg";
import waterPurifierImg from "@/assets/water-purifier.jpg";
import inductionCooktopImg from "@/assets/induction-cooktop.jpg";
import electricKettleImg from "@/assets/electric-kettle.jpg";
import mixerGrinderImg from "@/assets/mixer-grinder.jpg";
import airPurifierImg from "@/assets/air-purifier.jpg";
import waterHeaterImg from "@/assets/water-heater.jpg";
import chimneyImg from "@/assets/chimney.jpg";
import coffeeMakerImg from "@/assets/coffee-maker.jpg";
import electricIronImg from "@/assets/electric-iron.jpg";

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
  },
  {
    id: "7",
    name: "Robotic Vacuum Cleaner",
    price: 24999,
    description: "Smart robotic vacuum cleaner with automatic navigation and app control. Features powerful suction and intelligent mapping for thorough floor cleaning.",
    image: vacuumCleanerImg,
    category: "Vacuum Cleaners",
    specs: [
      "Smart Navigation System",
      "App & Voice Control",
      "2000Pa Suction Power",
      "120 Min Runtime",
      "Auto Return to Dock"
    ],
    rating: 4.6,
    reviews: 178
  },
  {
    id: "8",
    name: "RO Water Purifier",
    price: 15999,
    description: "Advanced RO water purifier with 7-stage purification and mineral retention technology. Ensures safe and healthy drinking water for your family.",
    image: waterPurifierImg,
    category: "Water Purifiers",
    specs: [
      "7 Stage Purification",
      "8L Storage Tank",
      "RO + UV + UF",
      "Mineral Retention",
      "Smart LED Indicators"
    ],
    rating: 4.7,
    reviews: 342
  },
  {
    id: "9",
    name: "Induction Cooktop",
    price: 3999,
    description: "Premium induction cooktop with touch controls and multiple power levels. Energy-efficient cooking with precise temperature control and safety features.",
    image: inductionCooktopImg,
    category: "Cooktops",
    specs: [
      "2000W Power",
      "Touch Control Panel",
      "8 Power Levels",
      "Auto Pan Detection",
      "Child Safety Lock"
    ],
    rating: 4.5,
    reviews: 256
  },
  {
    id: "10",
    name: "Electric Kettle",
    price: 2499,
    description: "Premium stainless steel electric kettle with rapid boil technology and LED indicators. Perfect for making tea, coffee, and instant meals.",
    image: electricKettleImg,
    category: "Kitchen Appliances",
    specs: [
      "1.8L Capacity",
      "1500W Rapid Boil",
      "Stainless Steel Body",
      "LED Indicators",
      "Auto Shut-off"
    ],
    rating: 4.3,
    reviews: 423
  },
  {
    id: "11",
    name: "Mixer Grinder",
    price: 6999,
    description: "Powerful mixer grinder with multiple jars and blades for all your grinding needs. Features durable motor and versatile attachments for Indian cooking.",
    image: mixerGrinderImg,
    category: "Kitchen Appliances",
    specs: [
      "750W Motor",
      "4 Jars Included",
      "3 Speed Settings",
      "Overload Protection",
      "Stainless Steel Blades"
    ],
    rating: 4.6,
    reviews: 567
  },
  {
    id: "12",
    name: "HEPA Air Purifier",
    price: 19999,
    description: "Advanced air purifier with True HEPA filter and smart air quality monitoring. Removes 99.97% of allergens, dust, and pollutants for cleaner air.",
    image: airPurifierImg,
    category: "Air Purifiers",
    specs: [
      "True HEPA Filter",
      "400 sq.ft Coverage",
      "Smart Air Quality Sensor",
      "3 Fan Speeds",
      "Filter Change Indicator"
    ],
    rating: 4.8,
    reviews: 289
  },
  {
    id: "13",
    name: "Instant Water Heater",
    price: 12999,
    description: "Efficient instant water heater with digital temperature control and safety features. Provides hot water on demand with energy-saving technology.",
    image: waterHeaterImg,
    category: "Water Heaters",
    specs: [
      "3kW Instant Heating",
      "Digital Display",
      "Temperature Control",
      "Auto Cut-off",
      "Wall Mounted"
    ],
    rating: 4.4,
    reviews: 198
  },
  {
    id: "14",
    name: "Auto-Clean Kitchen Chimney",
    price: 16999,
    description: "Premium auto-clean chimney with powerful suction and filterless technology. Features touch controls and LED lighting for modern kitchens.",
    image: chimneyImg,
    category: "Kitchen Appliances",
    specs: [
      "1200 m3/hr Suction",
      "Auto Clean Technology",
      "Touch Control Panel",
      "LED Lamp",
      "90cm Width"
    ],
    rating: 4.7,
    reviews: 234
  },
  {
    id: "15",
    name: "Espresso Coffee Maker",
    price: 28999,
    description: "Professional espresso coffee maker with milk frother and multiple brewing options. Create barista-quality coffee at home with ease.",
    image: coffeeMakerImg,
    category: "Kitchen Appliances",
    specs: [
      "19 Bar Pressure",
      "Milk Frother",
      "Digital Control",
      "1.8L Water Tank",
      "Multiple Brew Options"
    ],
    rating: 4.9,
    reviews: 145
  },
  {
    id: "16",
    name: "Steam Iron",
    price: 1999,
    description: "Powerful steam iron with ceramic soleplate and anti-drip technology. Makes ironing effortless with consistent steam output and smooth gliding.",
    image: electricIronImg,
    category: "Home Appliances",
    specs: [
      "2000W Power",
      "Ceramic Soleplate",
      "Steam & Dry Mode",
      "Anti-Drip System",
      "360° Swivel Cord"
    ],
    rating: 4.2,
    reviews: 512
  }
];
