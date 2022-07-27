class NewsService {
  options = {
    method: "GET",
    /*  headers: {
      "Accept-Language": "ua",
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": "1422af4841msh910ee0fad1ed95bp123d8djsnce14a5644a99",
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    }, */
  };


  getResourse = async (url) => {
    let res = await fetch(url/* , this.options */);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };

  getAllPosts = async () => {
    let url = "http://localhost:3000/jsonarray";
    //let url ="https://newsdata.io/api/1/news?apikey=pub_9575caba4863420bb7991f98c8e25390b0c9&q=ukraine&language=uk";
    const res = await this.getResourse(url);
    return res.map(this._transformData);
  };

  getPost = async (id = 0) => {

    let url = "http://localhost:3000/jsonarray";
    const res = await this.getResourse(url); //дані з json
    return this._transformData(res[id]);
  };

  /*дані записуємо як в  state і передаємо сюди дані в методі getPost*/
  _transformData = (res) => {
    return {
      name: res.name,
      description: res.description,
      thumbnail:
        res.img||
        "https://cdn.pixabay.com/photo/2022/03/03/13/00/heart-7045303__480.jpg",
      homepage: res.link,
      id: res.id,
      breed: res.breed,
    };
  };
}
export default NewsService;
