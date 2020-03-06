import render from "./render.js";
import app from "../app.js";

function SetRoutes(data) {

  let notFound = function() {

  }

  let home = function() {
    //   location.reload()
      console.log("hallo")
  }

  let getBooks = async function(){
      let data = await app.fetchData()
      console.log(data)
      render.Data(data),
      console.log("getBooks maken!")
  }

  let hulp = function(){
      render.Hulp()
  }

  let search = function(){
    app.fetchData()  
    render.Search(data),
console.log("zoeken!")}

let werkstuk = function(){
    render.Werkstuk()
}

  let routes = {
    "/": home,
    "/onderwerp-kiezen": search,
    "/hoemaakikeenwerkstuk": hulp,
    "/mijnwerkstukken": werkstuk,
    "/:stringParam": getBooks,
    "/:*": notFound 
  };

  let router = Router(routes);
  console.log("Director loaded");

  router.init(['/']);
}


export default {SetRoutes}