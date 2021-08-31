import { Request, Response } from 'express';

import axios from 'axios';

export const postTrainer = async (req: Request, res: Response) => {
  try {
    const answer = await axios.post('http://localhost:3010/trainer', req.body);
    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllTrainer = async (req: Request, res: Response) => {
  try {
    const answer = await axios.get('http://localhost:3010/trainer');
    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getTrainerByUserID = async (req: Request, res: Response) => {
  try {
    const answer = await axios.get(
      `http://localhost:3010/trainer/${req.params.trainerId}`
    );
    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteTrainer = async (req: Request, res: Response) => {
  try {
    const answer = await axios.delete(
      `http://localhost:3010/trainer/${req.params.trainerId}`
    );
    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateAge = async (req: Request, res: Response) => {
  try {
    const answer = await axios.patch(
      `http://localhost:3010/trainer/age/${req.params.trainerId}`,
      req.body
    );
    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const putClassInTrainer = async (req: Request, res: Response) => {
  try {
    const answer = await axios.put(
      `http://localhost:3010/trainer/class/${req.params.trainerId}`,
      req.body
    );
    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteClassFromTrainer = async (req: Request, res: Response) => {
  try {
    const answer = await axios.delete(
      `http://localhost:3010/trainer/class/${req.params.trainerId}`,
      req.body
    );
    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
