import MenuCount from './MenuCount.js';
import MenuInput from './MenuInput.js';
import MenuList from './MenuList.js';

export default function App($app) {
  this.$target = $app;
  this.state = [];

  this.setState = (nextState) => {
    this.state = nextState;
    menuList.setState(nextState);
    menuCount.setState(nextState);
  };

  const menuCount = new MenuCount({
    initialState: this.state,
  });

  const menuInput = new MenuInput({
    addMenu: (newMenu) => {
      this.setState([...this.state, newMenu]);
    },
  });

  const menuList = new MenuList({
    initalState: this.state,
    editMenu: (index, editedMenu) => {
      const nextMenu = [...this.state];
      nextMenu.splice(index, 1, editedMenu);
      this.setState(nextMenu);
    },
    removeMenu: (currentIndex) => {
      this.setState(this.state.filter((_, index) => index !== currentIndex));
    },
  });
}
