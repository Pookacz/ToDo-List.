import React from 'react';
import styles from './Page.module.scss';
import PageItems from '../PageItems/PageItems';
import Button from '../Button/Button';
import AppContext from '../../context';

const Page = ({ items }) => (
  <ul className={styles.ul}>
    {items.map((item, index) => (
      <div key={index}>
        <AppContext.Consumer>
          {(context) => (
            <li className={styles.wrapper}>
              <PageItems {...item} />
              <Button onClick={() => context.deleteTask(items, item)} key={item.ass}>
                {item.type === 'notes' ? 'delete' : 'Done!'}
              </Button>
            </li>
          )}
        </AppContext.Consumer>
      </div>
    ))}
  </ul>
);
export default Page;
