const { z } = require('zod');
const Utilities = require('../Utilities');
const User = require('../models/User');

class AuthController {

	async login(req, res) {
		try {
			const validationSchema = z.object({
				name: z.string().min(3).max(50),
				password: z.string(),
			});

			const { name, password } = validationSchema.parse(req.body);

			const user = await User.findOne({ name }, { password: 1 });
			if (!user) {
				return Utilities.apiResponse(res, 422, 'User Not Registered');
			}

			const isMatch = await user.isValidPassword(password);
			if (!isMatch) {
				return Utilities.apiResponse(res, 422, 'Username or Password not valid');
			}

			const accessToken = await Utilities.signAccessToken(user._doc);
			Utilities.apiResponse(res, 200, 'User Loggedin Successfully!', { ...user._doc, accessToken });

		} catch (error) {
			Utilities.apiResponse(res, 500, error);
		}
	}

	async signup(req, res) {
		try {

			const validationSchema = z.object({
				name: z.string().min(3).max(50),
				password: z.string().min(6),
			});

			const { name, password } = validationSchema.parse(req.body);

			const doesExist = await User.findOne({ name }, { _id: 1 });
			if (doesExist) {
				return Utilities.apiResponse(res, 422, 'userName is already registered');
			}

			const user = new User({ name, password });
			const savedUser = await user.save();
			const data = {
				_id: savedUser._id,
				name: savedUser.name,
                                //password: savedUser.password,
			};

			Utilities.apiResponse(res, 200, 'User Created Successfully!', {
				...data,
				accessToken: await Utilities.signAccessToken(data),
			});

		} catch (error) {
			Utilities.apiResponse(res, 500, error);
		}
	}

	async validateToken(req, res) {
		try {
			Utilities.apiResponse(res, 200, "Success");
		} catch (error) {
			Utilities.apiResponse(res, 500, error);
		}
	}
}

module.exports = new AuthController();
