const getHackerNewsUrl = (value, page) => `https://hn.algolia.com/api/v1/search?query=${value}&page=${page}&hitsPerPage=100`;

module.exports = {
  getHackerNewsUrl
}
