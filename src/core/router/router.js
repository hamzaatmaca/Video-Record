import login from "../../components/Login";
import error from "../../components/Error";
import dashboard from "../../components/Dashboard";
let DOMContent;

const pathName = window.location.pathname;
const url = pathName.split("/");
const currentPath = url[1];


switch (currentPath) {
  case "":
    DOMContent = login.render();
    break;
  case "dashboard":
    DOMContent = dashboard.render();
    break;
 
  default:
    DOMContent = error.render();
    break;
}

export default DOMContent;
