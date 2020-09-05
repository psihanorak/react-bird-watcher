import PropTypes from 'prop-types';

const birbShape = PropTypes.shape({
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  seenAt: PropTypes.string.isRequired,
  altColor: PropTypes.string.isRequired,
  wasSleeping: PropTypes.bool.isRequired,
  location: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { birbShape };
