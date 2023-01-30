import { useContext, useState } from "react";
import { Header } from "../../components/header";
import { Nav } from "../../components/nav";
import { TechsProfile } from "../../components/tech";
import { AuthContext } from "../../providers/AuthContext";
import { TechContext } from "../../providers/TechContext";
import { ContainerMain } from "../../styles/container";

export const DashBoard = ({}) => {
  const { user, loading, userTech } = useContext(AuthContext);
  const { deleteTech } = useContext(TechContext);

  if (loading) {
    return;
  }

  return (
    <ContainerMain>
      <Nav />
      <Header userInfo={user} />
      <TechsProfile userTech={userTech} deleteTech={deleteTech} />
    </ContainerMain>
  );
};
