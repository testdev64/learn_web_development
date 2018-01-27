const env = process.env;
exports const nodeEnv = env.NODE_ENV || 'development';

export.default {
  port : env.PORT || 8080
};
