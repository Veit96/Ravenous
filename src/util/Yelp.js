const apiKey = 'vLH4qP5Ro9o-9kwhKTJLwZUjTx5eXJA0d3Su5JsnEis-pY0G2tDcUfw3A9YjC20qY_M7_zAOMxHazDZTDqf0ceTI9s1d4Xbvlk2yY-AL3zt3vg3B3U7ezHq7Xd-oX3Yx';

const Yelp = {
  search(term, location, sortBy) {
    return  fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=' + term + '&location=' + location + '&sort_by=' + sortBy, {
      headers: {
        Authorization: `Bearer ${apiKey}`
        }
    }).then(response => {
        return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            url: business.url,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          };
        });
      }
    });
  }
};

export default Yelp;
