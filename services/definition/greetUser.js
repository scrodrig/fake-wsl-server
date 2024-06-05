const greeterService = {
  GreeterService: {
    GreeterPort: {
      Greet: function (args) {
        return {
          greeting: args.name,
        };
      },
    },
  },
};

exports.greeterService = greeterService;