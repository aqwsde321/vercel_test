// src/routes/userRoutes.ts
import express from 'express';
import { User } from '../types';

const router = express.Router();
let users: User[] = [];


/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: 모든 사용자 조회
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: 사용자 목록 반환
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/', (req, res) => {
    res.json(users);
  });
  
  /**
   * @swagger
   * /api/users:
   *   post:
   *     summary: 새 사용자 생성
   *     tags: [Users]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/UserInput'
   *     responses:
   *       201:
   *         description: 생성된 사용자 반환
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/User'
   */
  router.post('/', (req, res) => {
    const newUser: User = {
      id: users.length + 1,
      name: req.body.name,
      email: req.body.email
    };
    users.push(newUser);
    res.status(201).json(newUser);
  });
  
  export default router;