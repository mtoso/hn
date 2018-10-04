const fetchStories = async (value, page) => {
    const response = await fetch(`/api/search?query=${value}&page=${page}`);
    const body = await response.json();
    console.log('=======> response: ', body);

    if (response.status !== 200) throw Error(body.message);

    return body;
}

export default {
    fetchStories
}