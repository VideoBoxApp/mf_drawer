import { createSlice, configureStore } from "@reduxjs/toolkit";

const INITIAL_SHOW_DRAWER: any = false;

const showDrawerSlice = createSlice({
  name: "showDrawer",
  initialState: {
    value: INITIAL_SHOW_DRAWER,
  },
  reducers: {
    showDrawer: (state) => {
      state.value = true;
    },
    hideDrawer: (state) => {
      state.value = false;
    },
  },
});

export const { showDrawer, hideDrawer } = showDrawerSlice.actions;

export const storeDrawer = configureStore({
  reducer: showDrawerSlice.reducer,
});

storeDrawer.subscribe(() => {
  const drawerBackground = document.getElementById("drawerBackground")!;
  drawerBackground!.style.display = storeDrawer.getState().value
    ? "block"
    : "none";
});
