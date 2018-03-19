const b = import('./b');

b.then(() => {
  console.log('done');
});
