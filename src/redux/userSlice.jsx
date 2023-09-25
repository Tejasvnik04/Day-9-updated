import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null
    },
    reducers:{
        login:(state,action)=>{
            state.user=action.payload;
        },
        logout:(state)=>{
            state.user=null;
        },
        addPlants: (state, action) => {
            state.push(action.payload);
          },
          deleteDonor: (state, action) => {
            return state.filter((donor) => donor.id !== action.payload.id);
          },
    }  
})
export const {login,logout}=userSlice.actions;

export const selectUser =(state)=>state.user.user;
export const { addPlants, deletePlants } =userSlice.actions;

export default userSlice.reducer;