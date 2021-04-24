import React from "react";
import { useStore } from "../components";
import { IconWrapper } from "../elements";
import { BiMoon, BiSun } from "react-icons/bi";

export const Toggle = () => {
  const dark = useStore((state) => state.dark);
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);
  return (
    <IconWrapper onClick={() => toggleDarkMode()}>
      {dark ? <BiMoon /> : <BiSun />}
    </IconWrapper>
  );
};
