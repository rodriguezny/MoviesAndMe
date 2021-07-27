const API_TOKEN = "50a00d69d1f745298b5884a1c16d3195";

export async function getFilmsFromApiWithSearchedText (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text 

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        return console.log(error);
    }
}

export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}