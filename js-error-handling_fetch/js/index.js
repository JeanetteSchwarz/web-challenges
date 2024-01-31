console.clear();

const userElement = document.querySelector(".user");

async function getUser(url) {
  const response = await fetch(url);
  if (!response.ok) {
    // response.ok ist true bei Fehler 200-399, bei  > 400 = false
    console.log("Network error");
    return (errorElement = `<p class="error">${error}</p>`);
  }
  try {
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.log("Error parsing json.");
    return (errorElement.innerHTML = `<p class="error">${error}</p>`);
  }
}

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    const user = await getUser(event.target.dataset.url);
    try {
      userElement.innerHTML = `
    <h2>${user.first_name} ${user.last_name}</h2>
    <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
    `;
      console.clear();
    } catch (error) {
      console.log("user not found");
    }
  })
);
