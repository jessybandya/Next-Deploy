import Allrepos from "./Allrepos/page";
import React from "react";

async function getAllData() {
  const username = 'jessybandya'
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  const data = await res.json();
  return data;
}

export default async function Repos() {
  const allData = await getAllData();
  return (
   <Allrepos allData={allData} />
  )
}
