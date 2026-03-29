import React from 'react'
import { useParams, useLoaderData } from 'react-router'

export default function AppDetails() {
  const { id } = useParams();
  const data = useLoaderData();
  console.log(data, "sdsd")
  return (
    <>
    <div>App Id {id} here present!!</div>
    <div>
        {data.title}
    </div>
    </>
  )
}
