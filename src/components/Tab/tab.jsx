import React, { useState } from "react";
import styles from './tab.module.css';

export const IfcTab = (props) => {
  let keyCounter = 0;
  const [items, setItems] = useState(
    props.items.map((item) => {
      return {name: item.name, selected: keyCounter == 0, content: item.content, key: keyCounter++}
    })
  );

  function selectItem(key) {
    const newItems = [...items];
    newItems.forEach(item => item.selected = false);
    newItems.find(item => item.key == key).selected = true;
    setItems(newItems);
  }

  function selected(item){
    return item.selected ? " tabs__item--active " : "";
  }

  return (
    <div>
    <ul className="tabs ifc-tab">
      {items.map((item) => (
        <li onClick={()=> selectItem(item.key)} 
        className={"tabs__item " + styles.ifcTabItem + selected(item)} 
        key={item.key}> { props.bigTitles ? <h1>{item.name}</h1> : item.name } </li>
      ))}
    </ul>
    <div className={styles.ifcTabContent}>
      {items.find(item => item.selected).content}
    </div>
    </div>
  );
};

