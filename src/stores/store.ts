import {
  configureStore,
  getDefaultMiddleware,
  EnhancedStore
} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export const setupStore = (): EnhancedStore => {
  const middlewares = [...getDefaultMiddleware()];
  return configureStore({
    reducer: rootReducer,
    middleware: middlewares,
    devTools: true
  });
};
