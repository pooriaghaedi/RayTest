export default class ServerConfig {
  static SERVER_HOST = ((process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') ? 'localhost' : '0.0.0.0');
  static SERVER_PORT = (process.env.PORT || '3030');
  static SERVER_TEST = 'http://localhost:3030';
  static MONGO_DB = (process.env.NODE_ENV === 'test' ? 'test' : 'my_app');
  static MONGO_DB_URL = "mongodb://root:lkfdgdskjfsdfds@db:27017/";
  static REDIS_HOST = 'redis';
  static REDIS_PORT = (process.env.REDIS_PORT || '6379');
  // In second.
  static REDIS_CACHE_TIMEOUT = 120;
}

