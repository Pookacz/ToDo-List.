import React from 'react';
import styles from './Form.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import RadioInput from './RadioInput';
import AppContext from '../../context';

const radioTypes = {
  notes: 'notes',
  monday: 'monday',
  tuesday: 'tuesday',
  wednesday: 'wednesday',
  thursday: 'thursday',
  friday: 'friday',
  saturday: 'saturday',
  sunday: 'sunday',
};

class Form extends React.Component {
  state = {
    type: radioTypes.notes,
    title: '',
    description: '',
  };

  radioStateChange = (type) => {
    this.setState({
      type: type,
    });
  };
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { type } = this.state;

    return (
      <AppContext.Consumer>
        {(context) => (
          <div className={styles.wrapper}>
            <h1 className={styles.title}>{type}</h1>
            <form
              className={styles.wrapper}
              autoComplete="off"
              onSubmit={(e) => context.addNewItem(e, this.state)}
            >
              <div className={styles.radio}>
                <div className={styles.radioOne}>
                  <RadioInput
                    id={radioTypes.notes}
                    checked={type === radioTypes.notes}
                    onChange={() => this.radioStateChange(radioTypes.notes)}
                  >
                    Notes
                  </RadioInput>

                  <RadioInput
                    id={radioTypes.monday}
                    checked={type === radioTypes.monday}
                    onChange={() => this.radioStateChange(radioTypes.monday)}
                  >
                    Monday
                  </RadioInput>

                  <RadioInput
                    id={radioTypes.tuesday}
                    checked={type === radioTypes.tuesday}
                    onChange={() => this.radioStateChange(radioTypes.tuesday)}
                  >
                    Tuesday
                  </RadioInput>

                  <RadioInput
                    id={radioTypes.wednesday}
                    checked={type === radioTypes.wednesday}
                    onChange={() => this.radioStateChange(radioTypes.wednesday)}
                  >
                    Wednesday
                  </RadioInput>
                </div>
                <div className={styles.radioTwo}>
                  <RadioInput
                    id={radioTypes.thursday}
                    checked={type === radioTypes.thursday}
                    onChange={() => this.radioStateChange(radioTypes.thursday)}
                  >
                    Thursday
                  </RadioInput>

                  <RadioInput
                    id={radioTypes.friday}
                    checked={type === radioTypes.friday}
                    onChange={() => this.radioStateChange(radioTypes.friday)}
                  >
                    Friday
                  </RadioInput>

                  <RadioInput
                    id={radioTypes.saturday}
                    checked={type === radioTypes.saturday}
                    onChange={() => this.radioStateChange(radioTypes.saturday)}
                  >
                    Saturday
                  </RadioInput>

                  <RadioInput
                    id={radioTypes.sunday}
                    checked={type === radioTypes.sunday}
                    onChange={() => this.radioStateChange(radioTypes.sunday)}
                  >
                    Sunday
                  </RadioInput>
                </div>
              </div>

              <Input
                name="title"
                label="title"
                value={this.state.title}
                onChange={this.handleInputChange}
                maxLength={30}
              />
              {type === radioTypes.notes ? (
                <Input
                  tag="textarea"
                  name="description"
                  label="Description"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  maxLength={400}
                />
              ) : null}
              <div className={styles.button}>
                <Button>Add New</Button>
              </div>
            </form>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}
export default Form;
