import { Request, Response } from 'express';

import axios from 'axios';

export const postClass = async (req: Request, res: Response) => {
  try {
    const answer = await axios.post('http://localhost:3010/class', req.body);
    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getClass = async (req: Request, res: Response) => {
  try {
    const answer = await axios.get('http://localhost:3010/class');
    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getClassByClassID = async (req: Request, res: Response) => {
  try {
    const answer = await axios.get(
      `http://localhost:3010/class/${req.params.classId}`
    );
    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteClass = async (req: Request, res: Response) => {
  try {
    const answer = await axios.delete(
      `http://localhost:3010/class/${req.params.classId}`
    );
    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateClassName = async (req: Request, res: Response) => {
  try {
    const answer = await axios.patch(
      `http://localhost:3010/class/name/${req.params.classId}`,
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
      `http://localhost:3010/class/starttime/${req.params.classId}`,
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
      `http://localhost:3010/class/endtime/${req.params.classId}`,
      req.body
    );
    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
