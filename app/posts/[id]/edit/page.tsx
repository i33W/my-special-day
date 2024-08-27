"use client";

import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();

  return <div>POST EDIT: {id}</div>;
}
