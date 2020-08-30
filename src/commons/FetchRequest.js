const fetchRequest = (body) => {
  return new Promise((resolve, reject) => {
    fetch('https://tf.yakovlev.studio', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(body),
    })
      .then((res) => res.json().then((result) => resolve(result)))
      .catch((err) => reject(err));
  });
};

export default fetchRequest;
