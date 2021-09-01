import * as dotenv from 'dotenv';

import { Request, Response } from 'express';

import axios from 'axios';

dotenv.config();

const PATH = process.env.PATH1;
export const postTrainer = async (req: Request, res: Response) => {
  try {
    const answer = await axios.post(`${PATH}/trainer`, req.body);
    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

console.log(`${PATH}/trainer`);

export const getAllTrainer = async (req: Request, res: Response) => {
  try {
    const answer = await axios.get(`${PATH}/trainer`);
    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getTrainerByUserID = async (req: Request, res: Response) => {
  try {
    const answer = await axios.get(`${PATH}/trainer/${req.params.trainerId}`);
    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteTrainer = async (req: Request, res: Response) => {
  try {
    const answer = await axios.delete(
      `${PATH}/trainer/${req.params.trainerId}`
    );
    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateAge = async (req: Request, res: Response) => {
  try {
    const answer = await axios.patch(
      `${PATH}/trainer/age/${req.params.trainerId}`,
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
      `${PATH}/trainer/class/${req.params.trainerId}`,
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
      `${PATH}/traine/class/${req.params.trainerId}`,
      req.body
    );
    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
