"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { fetchProperty } from "@/utils/request"

const PropertyPage = () => {
  const { id } = useParams()

  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return
      try {
        const property = await fetchProperty(id)

        setProperty(property)
      } catch (error) {
        console.Error("Error fetching property: ", error)
      } finally {
        setLoading(false)
      }
    }
    if (property === null) {
      fetchPropertyData()
    }
  }, [id, property])

  return <h1>PropertyPage</h1>
}

export default PropertyPage
