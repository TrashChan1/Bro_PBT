const Utilities = require('../Utilities');
const User = require('../models/User');

class CrudController {

	async createUser(req, res) {
		try {

			const validattionSchema = z.object({
				name: z.string().min(3).max(50),
				password: z.string().min(6),
			});

			const { name, password } = validattionSchema.parse(req.body);

			const doesExist = await User.findOne({ name: req.body.name }, { name: 1 })
			if (doesExist) return Utilities.apiResponse(res, 422, 'username is already been registered')

			const user = new User({ name, password })
			await user.save()

			return Utilities.apiResponse(res, 200, 'User Created Successfully!')
		} catch (error) {
			return Utilities.apiResponse(res, 500, error)
		}
	}

	async getUser(req, res) {
		try {
			const user = await User.findOne({ _id: req.params.userId }, { name: 1 })
			return Utilities.apiResponse(res, 200, 'Get User Successfully', user)
		} catch (error) {
			return Utilities.apiResponse(res, 500, error)
		}
	}

	async getUsers(req, res) {
		try {
			const options = {
				page: req.query?.page || 1,
				limit: req.query?.limit || 10,
				select: 'name '
			};
			const users = await User.paginate({}, options)
			return Utilities.apiResponse(res, 200, 'Get Users Successfully', users)
		} catch (error) {
			return Utilities.apiResponse(res, 500, error)
		}
	}

	async updateUser(req, res) {
		try {
			const validattionSchema = z.object({
				name: z.string().min(3).max(50),
				password: z.string().min(6),
			});

			const { name, password } = validattionSchema.parse(req.body);

			const doesExist = await User.findOne({ name: req.body.name }, { name: 1 })
			if (doesExist) return Utilities.apiResponse(res, 422, 'username is already been registered')

			await User.findOneAndUpdate({ _id: req.body.user_id }, { name, password })
			return Utilities.apiResponse(res, 200, 'User Has Been Updated Successfully')
		} catch (error) {
			return Utilities.apiResponse(res, 500, error)
		}
	}

	async deleteUser(req, res) {
		try {
			await User.find({ _id: req.body.user_id }).remove().exec();
			return Utilities.apiResponse(res, 200, 'User Deleted Successfully')
		} catch (error) {
			return Utilities.apiResponse(res, 500, error)
		}
	}
}

module.exports = new CrudController();
