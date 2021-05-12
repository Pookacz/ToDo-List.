import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import AppContext from '../../context';
import Menu from '../../components/Menu/Menu';
import PopUp from '../../components/PopUp/PopUp';
import NotesView from '../Notes/NotesView';
import MondayView from '../Monday/MondayView';
import TuesdayView from '../Tuesday/TuesdayView';
import WednesdayView from '../Wednesday/WednesdayView';
import ThursdayView from '../Thursday/ThursdayView';
import FridayView from '../Friday/FridayView';
import SaturdayView from '../Saturday/SaturdayView';
import SundayView from '../Sunday/SundayView';

class Root extends React.Component {
  state = {
    notes: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
    isPopUpOpen: false,
  };

  addNewItem = (e, newItem) => {
    e.preventDefault();

    this.setState((prevState) => ({
      [newItem.type]: [...prevState[newItem.type], newItem],
    }));

    this.closePopUp();
  };

  openPopUp = () => {
    this.setState({
      isPopUpOpen: true,
    });
  };
  closePopUp = () => {
    this.setState({
      isPopUpOpen: false,
    });
  };
  deleteTask = (items, item) => {
    const newItems = items.filter((items) => {
      return items !== item;
    });
    this.setState({
      [item.type]: [...newItems],
    });
  };
  render() {
    const { isPopUpOpen } = this.state;
    const contextElements = {
      addNewItem: this.addNewItem,
      deleteTask: this.deleteTask.bind(this),
      ...this.state,
    };
    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Menu openPopUp={this.openPopUp} />
          <Switch>
            <Route exact path="/" component={NotesView} />
            <Route path="/monday" component={MondayView} />
            <Route path="/tuesday" component={TuesdayView} />
            <Route path="/wednesday" component={WednesdayView} />
            <Route path="/thursday" component={ThursdayView} />
            <Route path="/friday" component={FridayView} />
            <Route path="/saturday" component={SaturdayView} />
            <Route path="/sunday" component={SundayView} />
          </Switch>
          {isPopUpOpen && <PopUp closePopUp={this.closePopUp} />}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
