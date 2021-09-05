import * as dotenv from 'dotenv';
import { Request, Response } from 'express';
import axios from 'axios';
import * as config from './config';

dotenv.config();

const { APP } = config;
const { PORTApp } = config;

const PATH = `http://${APP}:${PORTApp}/class`;

export const postClass = async (req: Request, res: Response) => {
  try {
    const answer = await axios.post(PATH, req.body);
    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getClass = async (req: Request, res: Response) => {
  try {
    const answer = await axios.get(PATH);
    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getClassByClassID = async (req: Request, res: Response) => {
  try {
    const answer = await axios.get(`${PATH}/${req.params.classId}`);
    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteClass = async (req: Request, res: Response) => {
  try {
    const answer = await axios.delete(`${PATH}/${req.params.classId}`);
    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateClassName = async (req: Request, res: Response) => {
  try {
    const answer = await axios.patch(
      `${PATH}/name/${req.params.classId}`,
      req.body
    );
    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateStartTime = async (req: Request, res: Response) => {
  try {
    const answer = await axios.patch(
      `${PATH}/starttime/${req.params.classId}`,
      req.body
    );
    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateEndTime = async (req: Request, res: Response) => {
  try {
    const answer = await axios.patch(
      `${PATH}/endtime/${req.params.classId}`,
      req.body
    );
    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
