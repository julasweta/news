
class NewsService {
  options = {
    method: "GET",
    headers: {
      "Accept-Language": "ua",
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": "1422af4841msh910ee0fad1ed95bp123d8djsnce14a5644a99",
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  };

  getResourse = async (url) => {
    let res = await fetch(url /* , this.options */);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };

  getAllPosts = async () => {
    let url = "https://reqres.in/api/users?page=2";
    const res = await this.getResourse(url);
    return res.data.map(this._transformData);
  };

  getPost = async (id = 0) => {
    let url = "https://reqres.in/api/users?page=2";
    const res = await this.getResourse(url); //дані з json
    return this._transformData(res.data[id]);
  };

  /*дані записуємо як в  state і передаємо сюди дані в методі getPost*/
  _transformData = (res) => {
    return {
      name: res.first_name,
      description: res.avatar,
      thumbnail:
        res.avatar ||
        "https://cdn.pixabay.com/photo/2022/03/03/13/00/heart-7045303__480.jpg",
      homepage: res.avatar,
      id: res.id,
    };
  };
}
export default NewsService;
