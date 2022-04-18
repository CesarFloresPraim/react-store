import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Hero from "../../components/Hero/Hero";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import NavHeader from "../../components/NavHeader/NavHeader";

import {
  verifyAuth,
} from "../../middleware/reducers/auth/auth.thunks";

export default function Home() {
  const { accessToken, isTokenValid, lastLoginTime } = useSelector((state) => state.auth);
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(verifyAuth({token: accessToken}))
  }, []);

  return (
    <>
      <NavHeader isAuth={false}></NavHeader>
      <Hero></Hero>
      <CategoryPreview></CategoryPreview>
    </>
  );
}
