export const TestState: AJA.IStateSchema = {
  entity: 'Test',
  actions: {
    create: {
      api: {
        verb: AJA.Verb.POST,
        endpoint: '/tests',
        hasBody: true,
      },
    },
    custom: {
      api: {
        verb: AJA.Verb.GET,
        endpoint: '/tests/custom',
        hasBody: false,
      },
    },
  },
};
