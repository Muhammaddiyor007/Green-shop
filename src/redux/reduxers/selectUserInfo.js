import { createSelector } from '@reduxjs/toolkit';

export const selectAuth = (state) => state.auth;

export const selectUserInfo = createSelector(
  [selectAuth],
  (auth) => ({
    token: auth.token,
    email: auth.email,
    name: auth.name,
    surname: auth.surname,
  })
);