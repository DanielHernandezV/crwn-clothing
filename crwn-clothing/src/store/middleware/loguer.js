export const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) return next(action);

  console.log(action.type);
  console.log(action.payload);
  console.log("currentState", store.getState());
  next(action);

  console.log("Next State", store.getState());
};
