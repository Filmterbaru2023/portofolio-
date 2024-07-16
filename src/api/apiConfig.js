const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '2b9b88a820b600db159adbb042a7b5f2',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;