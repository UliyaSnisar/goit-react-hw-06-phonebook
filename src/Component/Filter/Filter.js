// import PropTypes from 'prop-types';
import React from 'react';
import styles from './Filter.module.css';
import { connect } from 'react-redux';
import contactActions from '../../redux/phonebook/phonebook-action';

const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.label}>
      Find contact by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </label>
  );
};
// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactActions.changeFilter(e.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
