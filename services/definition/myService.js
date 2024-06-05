const myService = {
  MyService: {
    MyPort: {
      MyFunction: function (args) {
        return {
          name: args.name,
        };
      },
    },
  },
};

exports.myService = myService;
