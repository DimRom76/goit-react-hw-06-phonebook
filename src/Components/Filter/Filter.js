import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsAction from '../../redux/contacts/contacts-actions';

function Filter({ value, handleInput }) {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        className="form_input"
        type="text"
        name="filter"
        value={value}
        onInput={handleInput}
      ></input>
    </>
  );
}

Filter.propTypes = {
  handleInput: PropTypes.func.isRequired,
  value: PropTypes.string,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  handleInput: e => dispatch(contactsAction.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
