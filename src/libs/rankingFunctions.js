const axios = require('axios');

export async function doGoogleSearch(keyword) {
  const data = {'country': 'us','query':{'q':keyword,num:100},num:100};
  const url = //Your Bright Data URL
  const headers = {'Authorization': 'Bearer "Your BrightData API Key" '};
  const response = await axios.post(url, data, {headers});
  console.log(keyword);
  if (!response?.headers) {
    console.error('no header in response '+url);
    console.error(data);
    return null;
  } else {
    console.log('responseId:'+response?.headers.get('x-response-id'));
    return response?.headers.get('x-response-id');
  }
}
