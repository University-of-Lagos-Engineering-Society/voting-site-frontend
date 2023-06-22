import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  grad:
    typeof window !== "undefined" && localStorage.getItem("grad") === "true"
      ? true
      : false,
  undergrad:
    typeof window !== "undefined" &&
    localStorage.getItem("undergrad") === "true"
      ? true
      : false,
  general:
    typeof window !== "undefined" && localStorage.getItem("general") === "true"
      ? true
      : false,
};

const checkSlice = createSlice({
  name: "check",
  initialState,
  reducers: {
    setGrad: (state) => {
      state.grad = true;
      localStorage.setItem("grad", "true");
    },
    setUndergrad: (state) => {
      state.undergrad = true;
      localStorage.setItem("undergrad", "true");
    },
    setGeneral: (state) => {
      state.general = true;
      localStorage.setItem("general", "true");
    },
  },
});

export const { setGrad, setUndergrad, setGeneral } = checkSlice.actions;

export default checkSlice.reducer;
