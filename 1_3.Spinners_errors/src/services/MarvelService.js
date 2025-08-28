class MarvelService {
    _apiBase = 'https://marvel-server-zeta.vercel.app/';
    _apiKey = 'd4eecb0c66dedbfae4eab45d312fc1df';

    getResource = async (url) => {
        let res = await fetch(url);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async () => {
        const res = await this.getResource(`${this._apiBase}characters?apikey=${this._apiKey}`);
        return res.data.results.map(this._transformCharacter);
    }

    getCharacter = async(id) => {
        const res = await this.getResource(`${this._apiBase}characters?id=${id}&apikey=${this._apiKey}`);
        return this._transformCharacter(res, id);
    }

    _transformCharacter = (res, id) => {
        return {
            name: res.data.results[id].name,
            description: res.data.results[id].description,
            thumbnail: res.data.results[id].thumbnail.path + '.' + res.data.results[id].thumbnail.extension,
            homepage: res.data.results[id].urls[0].url,
            wiki: res.data.results[id].urls[1].url
        }
    }
}

export default MarvelService;