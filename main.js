const api_key = 'AIzaSyDEaSTlK1dDt9zpwN9iP3BOVbGMHyKr52U'
const buseURL = 'https://www.googleapis.com/youtube/v3/playlistItems'
const pid = 'PLIJIst4Jupsuzo-GHZ--Fwsb4VgZzkq5_'
const num = 5
const resultURL = `${buseURL}?key=${api_key}&part-snippet&playlistId=${pid}&maxResults=${num}`
fetch(resultURL)
  .then((data)=>data.json())
  .then((json)=>{
    console.log(json)
  })








