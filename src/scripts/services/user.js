export class UserService {
  static list = async () => {
    try {
      const { data } = await axios.get('https://5dc588200bbd050014fb8ae1.mockapi.io/assessment');
      
      return data;
    } catch(err) {
      console.log(err);
      throw new Error(`API error`);
    }
  };
}
