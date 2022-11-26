import axios from "axios"

export const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: "Client-ID W05zb4dPUhkcz2iGqkgtJz0yg1Z11MNtTy0qk94Ua1k"
    },
    params: {
      query: term
    }
  })

  console.log("response:", response)
  return response.data.results
}
