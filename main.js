fetch('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy',{
    headers : {
        'Authorization': 'Bearer BQDss_AkvIehHLHuLMukJUeh15SHhjKuxV_PZBzUb87xjinSgIVQ0vvC7P3xRLCWpK7gHcVKqP1RiXhQriL6-C8PKH1pp97CEhYlm-LrgkwGvSx9Fbg'
    }
})
      .then(response => response.json())
      .then(json => console.log(json))