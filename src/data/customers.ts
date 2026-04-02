import bharatForgeLogo from "@/assets/logos/bharat-forge.png";
import sandharLogo from "@/assets/logos/sandhar.png";
import generalMotorsLogo from "@/assets/logos/general-motors.png";
import faureciaLogo from "@/assets/logos/faurecia.png";
import jcbLogo from "@/assets/logos/jcb.png";
import yazakiLogo from "@/assets/logos/yazaki.png";
import tataBatteriesLogo from "@/assets/logos/tata-batteries.png";
import leeboyLogo from "@/assets/logos/leeboy.png";
import wikaiLogo from "@/assets/logos/wikai.png";
import kspgLogo from "@/assets/logos/kspg.png";
import skhLogo from "@/assets/logos/skh.png";
import ronchLogo from "@/assets/logos/ronch.png";
import amtekLogo from "@/assets/logos/amtek.png";
import shardaMotorLogo from "@/assets/logos/sharda-motor.png";

export type Customer = { name: string; logo: string };

export const customers: Customer[] = [
  { name: "JCB", logo: jcbLogo },
  { name: "TATA Batteries", logo: tataBatteriesLogo },
  { name: "Bharat Forge", logo: bharatForgeLogo },
  { name: "WIKAI", logo: wikaiLogo },
  { name: "YAZAKI", logo: yazakiLogo },
  { name: "KSPG Automotive", logo: kspgLogo },
  { name: "SKH", logo: skhLogo },
  { name: "FAURECIA", logo: faureciaLogo },
  { name: "SANDHAR", logo: sandharLogo },
  { name: "RONCH", logo: ronchLogo },
  { name: "AMTEK", logo: amtekLogo },
  { name: "SHARDA MOTOR", logo: shardaMotorLogo },
  { name: "LeeBoy", logo: leeboyLogo },
  { name: "GM", logo: generalMotorsLogo },
];
