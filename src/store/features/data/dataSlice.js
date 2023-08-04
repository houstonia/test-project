import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';

import { API } from '../../constants';

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async function(_, {rejectWithValue,dispatch}) {
    try {
      const response = await fetch(`${API}/data`); 
      if (!response.ok) {
        throw new Error('Server Error!');
      }
      const data = await response.json();
      dispatch(getData(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteData = createAsyncThunk(
  'data/deleteData',
  async function(id, {rejectWithValue, dispatch}) {
    try {
      const response = await fetch(`${API}/data/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Can\'t delete data. Server error.');
      }

      dispatch(removeData({id}));

    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);


export const addNewData = createAsyncThunk(
  'data/addNewData',
  async function (newData, {rejectWithValue, dispatch}) {
    try {
      const response = await fetch(`${API}/data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });
      if (!response.ok) {
        throw new Error('Can\'t add data. Server error.');
      }

      const data = await response.json();
      dispatch(addData(data));

    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
};

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    status: null,
    error: null,
  },
  reducers: {
    getData: (state, action) => {
      state.data=action.payload;
    },
    addData(state, action) {
      state.data.push(action.payload);
    },
    removeData(state, action) {
      state.data = state.data.filter(item => item.id !== action.payload.id);
    },
  },
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.todos = action.payload;
    },
    [fetchData.rejected]: setError,
    [deleteData.rejected]: setError,
  },
});

const {addData,getData, removeData} = dataSlice.actions;

export default dataSlice.reducer;