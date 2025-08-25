import Joi from 'joi';

export const registerSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    'string.empty': 'Name is required',
  }),
  email: Joi.string().email().lowercase().required().messages({
    'string.email': 'Please enter a valid email',
    'string.empty': 'Email is required',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'Password must be at least 6 characters',
    'string.empty': 'Password is required',
  }),
  role: Joi.string().valid('jobseeker', 'recruiter', 'admin').default('jobseeker').messages({
    'any.only': 'Role must be one of jobseeker, recruiter, or admin',
  }),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().lowercase().required().messages({
    'string.email': 'Please enter a valid email',
    'string.empty': 'Email is required',
  }),
  password: Joi.string().required().messages({
    'string.empty': 'Password is required',
  }),
});
