import * as dotenv from 'dotenv';
import { Request, Response } from 'express';
import axios from 'axios';
import * as config from './config';

dotenv.config();

const { APP } = config;
const { PORTApp } = config;

const PATH = `http://${APP}:${PORTApp}/trainer`;
export const postTrainer = async (req: Request, res: Response) => {
  try {
    const answer = await axios.post(PATH, req.body);
    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllTrainer = async (req: Request, res: Response) => {
  try {
    const answer = await axios.get(PATH);
    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getTrainerByUserID = async (req: Request, res: Response) => {
  try {
    const answer = await axios.get(`${PATH}/${req.params.trainerId}`);
    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteTrainer = async (req: Request, res: Response) => {
  try {
    const answer = await axios.delete(`${PATH}/${req.params.trainerId}`);
    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateAge = async (req: Request, res: Response) => {
  try {
    const answer = await axios.patch(
      `${PATH}/age/${req.params.trainerId}`,
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
      `${PATH}/class/${req.params.trainerId}`,
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
      `${PATH}/class/${req.params.trainerId}`,
      req.body
    );
    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
