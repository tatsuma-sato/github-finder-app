const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// Get search users
export const searchUsers = async (text) => {
  const params = new URLSearchParams({ q: text });

  const response = await fetch(
    `${GITHUB_URL}/search/users?q=${params.get("q")}`,
    {
      mode: "cors",
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    }
  );
  const { items } = await response.json();

  return items;
};

// get single user
export const getUser = async (login) => {

  const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    mode: "cors",
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  if (response.status === 404) {
    window.location = "/notfound";
  } else {
    const data = await response.json();

    return data
  }
};

export const getUserRepos = async (login) => {

  const params = new URLSearchParams({
    sort: "created_at",
    per_page: 10,
  });

  const response = await fetch(
    `${GITHUB_URL}/users/${login}/repos?${params}`,
    {
      mode: "cors",
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    }
  );
  const data = await response.json();

  return data
};
