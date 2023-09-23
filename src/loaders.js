// const URL = "http://localhost:4000"
const URL = "https://express-react-lab-backend-cmxs.onrender.com"


export const projectsLoader = async () => {
    const response = await fetch(URL + "/projects")
    console.log(response.headers.get("Content-Type"));
    console.log(response);
    const projects = await response.json()
    return projects
}

export const aboutLoader = async () => {
    const response = await fetch(URL + "/about")
    const about = await response.json()
    return about
}