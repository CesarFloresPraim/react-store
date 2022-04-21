import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Hero from "../../components/Hero/Hero";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import NavHeader from "../../components/NavHeader/NavHeader";
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'

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
      <div className="bg-indigo-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          <span className="block">Explore our best sellers</span>
          <span className="block text-indigo-600">These are the items that people buy the most</span>
        </h2>
      </div>
    </div>
      <CategoryPreview></CategoryPreview>
    </>
  );
}
