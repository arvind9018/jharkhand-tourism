import axios from "axios"

export const api = axios.create({
  baseURL: "http://localhost:5000/api", // backend later
})

// TEMP fallback (until backend ready)
export async function fetchDestinations() {
  return [
    {
      id: 1,
      name: "Netarhat",
      district: "Latehar",
      image: "https://picsum.photos/400/300?1",
    },
    {
      id: 2,
      name: "Hundru Falls",
      district: "Ranchi",
      image: "https://picsum.photos/400/300?2",
    },
    {
      id: 3,
      name: "Dassam Falls",
      district: "Ranchi",
      image: "https://picsum.photos/400/300?3",
    },
  ]
}
