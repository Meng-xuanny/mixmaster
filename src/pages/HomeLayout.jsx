import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";
  const value = "some value";

  return (
    <div>
      <Navbar />
      <section className="page">
        {isLoading ? <div className="loading" /> : <Outlet context={value} />}
      </section>
    </div>
  );
};

export default HomeLayout;
