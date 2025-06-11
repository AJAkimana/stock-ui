import { authUserSlice } from './constantSlices';

export { actions } from './apiSliceBuilder';
export const { setUser, resetUser } = authUserSlice.actions;
