import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ules_grad:
    typeof window !== "undefined" && localStorage.getItem("grad") === "true"
      ? true
      : false,
  ules_undergrad:
    typeof window !== "undefined" &&
    localStorage.getItem("undergrad") === "true"
      ? true
      : false,
  ules_general:
    typeof window !== "undefined" && localStorage.getItem("general") === "true"
      ? true
      : false,
};

const checkSlice = createSlice({
  name: "check",
  initialState,
  reducers: {
    setGrad: (state) => {
      state.ules_grad = true;
      localStorage.setItem("grad", "true");
    },
    setUndergrad: (state) => {
      state.ules_undergrad = true;
      localStorage.setItem("undergrad", "true");
    },
    setGeneral: (state) => {
      state.ules_general = true;
      localStorage.setItem("general", "true");
    },
  },
});

export const { setGrad, setUndergrad, setGeneral } = checkSlice.actions;

export default checkSlice.reducer;
