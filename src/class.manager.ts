/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Request, Response } from 'express';

import axios from 'axios';

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
    const answer = await axios.delete(
      `http://localhost:3010/class/name/${req.params.classId}`
    );
    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
