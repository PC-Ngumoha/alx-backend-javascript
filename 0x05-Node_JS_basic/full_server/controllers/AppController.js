
/**
 * AppController class
 */
export default class AppController {
  static getHomepage(request, response) {
    response.statusCode = 200;
    response.write('Hello Holberton School!');
    console.log(response.text);
    response.end();
  }
}