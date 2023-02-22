(async () => {
  throw new Error('FAIL');
})().catch((e) => setImmediate(() => { throw e; }));
