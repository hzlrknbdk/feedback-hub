import React, { FC } from "react";
import { redirect } from "next/navigation";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  redirect("/login");
};

export default Home;
