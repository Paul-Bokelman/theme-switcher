import React from "react";
import { Icon } from "../components";
import { useStore } from "./state";
export const Toggle = () => {
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);
  return (
    <>
      <Icon toggleDarkMode={toggleDarkMode} />
    </>
  );
};
