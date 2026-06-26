export const heroLayout = {
  phone:    { top: "18%", left: "8%",  rotate: -10, z: 5, width: 190 },
  laptop:   { top: "5%",  right: "6%", rotate: -6,  z: 6, width: 280 },
  camera:   { bottom: "0%", left: "20%", rotate: -8, z: 6, width: 150 },
  hope:     { top: "60%", left: "8%",  rotate: -10, z: 6, width: 170 },
  polaroid: { bottom: "6%", right: "6%", rotate: 4, z: 5, width: 220 },
  vinyl:    { top: "3%", left: "calc(50% - 185px)", rotate: 4, z: 4, width: 370 },
  mobile: {
    phone:    { top: "16%", left: "3%",  rotate: -10, z: 5, width: 150 },
    laptop:   { top: "2%",  right: "1%", rotate: -6,  z: 6, width: 230 },
    camera:   { bottom: "10%", left: "8%", rotate: -8, z: 6, width: 130 },
    hope:     { top: "56%", left: "2%",  rotate: -10, z: 6, width: 140 },
    polaroid: { bottom: "1%", right: "1%", rotate: 4, z: 5, width: 180 },
    vinyl:    { top: "-2%", left: "calc(50% - 100px)", rotate: 4, z: 4, width: 200 },
  },
} as const
