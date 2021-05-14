import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import AppContext from '../../context';
import Menu from '../../components/Menu/Menu';
import PopUp from '../../components/PopUp/PopUp';
import MenuRoute from '../../components/Menu/MenuRoute';

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

  linkInfo = [
    { navTitle: 'Notes', navLink: '/', navType: 'notes' },
    { navTitle: 'Monday', navLink: '/monday', navType: 'monday' },
    { navTitle: 'Tuesday', navLink: '/tuesday', navType: 'tuesday' },
    { navTitle: 'Wednesday', navLink: '/wednesday', navType: 'wednesday' },
    { navTitle: 'Thursday', navLink: '/thursday', navType: 'thursday' },
    { navTitle: 'Friday', navLink: '/friday', navType: 'friday' },
    { navTitle: 'Saturday', navLink: '/saturday', navType: 'saturday' },
    { navTitle: 'Sunday', navLink: '/sunday', navType: 'sunday' },
  ];

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
      linkInfo: this.linkInfo,
      ...this.state,
    };
    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Menu openPopUp={this.openPopUp} />
          <MenuRoute />
          {isPopUpOpen && <PopUp closePopUp={this.closePopUp} />}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
