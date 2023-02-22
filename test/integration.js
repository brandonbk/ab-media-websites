/* eslint-disable no-await-in-loop */
(async () => {
  while (true) {
    try {
      console.log('start req');
      const res = await fetch('http://localhost:80', { method: 'get' });
      console.log('end req');
      if (!res.ok) {
        console.log('response not okay!');
      } else {
        console.log('start html');
        const html = await res.text();
        console.log('end html');
        const found = /.*<\/head>.*<\/body>.*<\/html>.*/.test(html);
        console.log(html);
        console.log({ found });
        process.exit(0);
      }
    } catch (e) {
      console.log('catch error');
    }
  }
})().catch((e) => setImmediate(() => { throw e; }));
