import axios from 'axios';

const { REACT_APP_YELP_API_KEY } = process.env;

const fetchShops = async (sort_by = 'rating') => {

    assureInRange(sort_by, ['best_match', 'rating', 'review_count'])

    const config = {
        method: 'get',
        url: `/v3/businesses/search?categories=icecream&location=Alpharetta&limit=5&sort_by=${sort_by}`,
        headers: {
            'Authorization': `Bearer ${REACT_APP_YELP_API_KEY}`,
            "accepts": "application/json"
        }
    };

    const { data } = await axios(config);

    const allShopsData = data.businesses.map((element) => {
        const { id, name, image_url: img, url, rating, review_count } = element;
        return ({ id, name, img, url, rating, review_count });
    })



    return allShopsData;

};

const assureInRange = (value, range = []) => {
    if (!range.includes(value)) {
        throw new RangeError(`Value out of range. Accepted: ${JSON.stringify(range)}`);
    }
};

export default fetchShops;
