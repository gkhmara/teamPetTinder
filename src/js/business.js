
export default class keyCall {

  static async getAccess(species, children, dogs, cats, special) {
    const key = process.env.API_KEY;
    const secret = process.env.SECRET;
		
    const out = await fetch('https://api.petfinder.com/v2/oauth2/token', {
      method: 'POST',
      body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(function (resp) {

      // Return the response as JSON
      return resp.json();
 
    }).then(function (data) { 

      // Log the API data
      console.log('token', data);

      // API Call Example - Justice: https://api.petfinder.com/v2/animals?types=cat&types=dog&page=2&limit=5&good_with_children=false&good_with_dogs=false
      // Return a second API call
      // This one uses the token we received for authentication
      return fetch(`https://api.petfinder.com/v2/animals?types=${species}&page=2&limit=5&special_needs=${special}&good_with_children=${children}&good_with_dogs=${dogs}&good_with_cats=${cats}&status=adoptable`, {
        headers: {
          'Authorization': data.token_type + ' ' + data.access_token,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

    }).then(function (resp) {

      // Return the API response as JSON
      return resp.json();

    }).then(function (data) {

      // Log the pet data
      return data;

    }).catch(function (err) {

      // Log any errors
      console.log('something went wrong', err);

    });

    return out;
  }
}