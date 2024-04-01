const base = "https://api.stackexchange.com/";

const fetchTags = async () => {
  const response = await fetch(
    `${base}2.3/tags?order=desc&sort=popular&site=stackoverflow`
  );
  if (!response.ok) {
    throw new Error("Response is not okay");
  }

  return response.json();
};

export { fetchTags };
