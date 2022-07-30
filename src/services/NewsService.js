class NewsService {

  options = {
    method: "GET",
  };

  getResourse = async (url) => {
    let res = await fetch(url /* , this.options */);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };

  getAllPosts = async () => {
    let url = "https://my-json-server.typicode.com/julasweta/repo/db";
    //let url ="https://julasweta.ucoz.net/my.json";
    const res = await this.getResourse(url);
    return res.jsonarray.map(this._transformData);
  };

  getPost = async (id = 0) => {
    let url = "https://my-json-server.typicode.com/julasweta/repo/db";
    const res = await this.getResourse(url); //дані з json
    return this._transformData(res.jsonarray[id]);
  };

  /*дані записуємо як в  state і передаємо сюди дані в методі getPost*/
  _transformData = (res) => {
    return {
      name: res.name,
      description: res.description,
      thumbnail:
        res.thumbnail ||
        "https://cdn.pixabay.com/photo/2022/03/03/13/00/heart-7045303__480.jpg",
      homepage: res.homepage,
      id: res.id,
      breed: res.breed,
    };
  };
}
export default NewsService;
