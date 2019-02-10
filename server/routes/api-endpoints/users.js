export default router => {
  router
    .get('/:version/users', (req, res) => {
      res.json([
        {
          name: 'elson',
          id: '1'
        }
      ])
    })
    .get('/:version/user/:userId', (req, res) => {
      console.log('-- get user', req.params);
      res.json({
        name: 'elson',
        id: '1'
      })
    })
    .post('/:version/user/:userId', (req, res) => {
      console.log('-- req', req.body, req.params);
      res.sendStatus(200);
    })
};