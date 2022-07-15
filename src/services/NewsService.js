
class NewsService {
    getResourse = async (url) => {
    let res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return  await (res.json());
  };


  getAllPosts = ()=>{
  let url =
      "https://newsapi.org/v2/top-headlines?" +
      "country=ua&" +
      "apiKey=057bc5d15563454c99925a94dc795432";
  //let url = "https://my-json-server.typicode.com/typicode/demo/posts";
  return(this.getResourse(url))
  };



}

export default NewsService;
