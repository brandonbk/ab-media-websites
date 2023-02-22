/* eslint-disable no-await-in-loop */
const { error } = console;

setInterval(async () => {
  try {
    const res = await fetch('http://localhost:80', { method: 'get' });
    if (!res.ok) {
      error('Response not ok!', res.status, res.statusText);
      process.exit(1);
    } else {
      const html = await res.text();
      const found = /.*<\/head>.*<\/body>.*<\/html>.*/is.test(html);
      if (!found) {
        error('Unable to find closing HTML tags!');
        process.exit(1);
      }
      process.exit(0);
    }
  } catch (e) {
    // noop
  }
}, 100);
