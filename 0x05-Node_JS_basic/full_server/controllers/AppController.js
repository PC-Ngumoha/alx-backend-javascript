/**
 * AppController class
 */
export default class AppController {
  static getHomepage(req, res) {
    res.statusCode = 200;
    res.write('Hello Holberton School!');
    res.end();
  }
}
