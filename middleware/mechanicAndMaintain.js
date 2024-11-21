// updateMechanicStatusMiddleware.js
import Mechanics from '../models/Mechanics.js';

const updateMechanicStatusWhenMaintained = async (req, res, next) => {
  const { maintainceStatus, mechanicUsername } = req.body;

  if (maintainceStatus === 'maintained') {
    try {
      const mechanic = await Mechanics.findOne({ mechanicUsername });
      if (mechanic) {
        mechanic.mechanicStatus = 'free';
        await mechanic.save();
      }
    } catch (error) {
      console.error('Error updating mechanic status:', error);
    }
  }

  next();
};

export default updateMechanicStatusWhenMaintained;


