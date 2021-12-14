import { createSlice } from "@reduxjs/toolkit";

const nftSlice = createSlice({
    name: "savedNft",
    initialState: [],
    reducers: {
        saveNft: (state, action) => {
            // some logic
        },
        unSaveNft: (id) => {
            // some logic
        }
    }
});

export const { saveNft, unSaveNft } = nftSlice.actions;
// export default 