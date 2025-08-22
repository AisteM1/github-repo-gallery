const overview = document.querySelector(".overview");
const username = "AisteM1";

const gitUserInfo = async function () {
const userInfor = await fetch (`https://api.github.com/users/${username}`);
const data = await userInfor.json()
displayUserInfo (data)
};

gitUserInfo();

const displayUserInfo = function (data) {
    const div = document.createElement ("div");
    div.classList.add("user-info");
    div.innerHTML = `
    <figure>
      <img alt="user avatar" src=${data.avatar_url} />
    </figure>
    <div>
     <p><strong>Name: </strong> ${data.name}</p>
     <p><strong>Bio: </strong>${data.bio}</p>
     <p><strong>Location: </strong>${data.location}</p>
     <p><strong>Number of public repos: </strong>${data.public_repos}</p>
    </div>
`;
overview.append(div);
};