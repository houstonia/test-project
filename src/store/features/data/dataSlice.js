import { createDataApi, deleteDataApi,fetchDataApi } from '@api/api';
import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState:{
    data:[],
  },
  reducers: {
    setData: (state, action) => {
      state.data=action.payload;
    },
    addData: (state, action) => {
      state.data.push(action.payload);
    },
    deleteData: (state, action) => {
      const id = action.payload;
      const index = state.data.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.data.splice(index, 1);
      }
    },
  },
});

const { setData, addData, deleteData } = dataSlice.actions;

export const fetchDataAsync = () => async (dispatch) => {
  const data = await fetchDataApi();
  dispatch(setData(data));
};

export const createDataAsync = (data) => async (dispatch) => {
  const newData= await createDataApi(data);
  dispatch(addData(newData));
};


export const deleteDataAsync = (id) => async (dispatch) => {
  await deleteDataApi(id);
  dispatch(deleteData(id));
};

export default dataSlice.reducer;