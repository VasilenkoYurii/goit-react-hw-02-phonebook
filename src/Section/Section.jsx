import PropTypes from 'prop-types';
import { SectionDiv, SectionTitle } from './Section.styled';

const Section = ({ title, children }) => (
  <SectionDiv>
    {title && <SectionTitle>{title}</SectionTitle>}
    {children}
  </SectionDiv>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any.isRequired,
};

export default Section;
