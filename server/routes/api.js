import express from 'express';
const router = express.Router();
import users from './api-endpoints/users';

router.get('/', (req, res) => {
  res.json({
    api: 'ecorreia',
    currentVersion: '1',
    supportedVersions: ['1'],
    description: '',
    documentationUrl: '',
    basePath: '/api/v1'
  })
});

router.get('/v1', (req, res) => {
  res.json({
    availableApiEndpoints: [
      {
        path: '/users',
        requestTypes: ['GET'],
        documentationUrl: ''
      },
      {
        path: '/user(/:userId)',
        requestTypes: ['GET', 'POST'],
        documentationUrl: ''
      }
    ]
  })
});

users(router);

export default router;