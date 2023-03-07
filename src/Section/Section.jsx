import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <div>
    {title && <h2>{title}</h2>}
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any.isRequired,
};

export default Section;
