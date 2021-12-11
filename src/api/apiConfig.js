const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '147e41b2a2ac40ba23544865dd49f7c9',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;