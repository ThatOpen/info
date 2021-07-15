import React, { useState } from "react";
import styles from './tab.module.css';

export const IfcTab = (props) => {
  let keyCounter = 0;

  const [items, setItems] = useState(
    props.items.map((item) => {
      return {name: item.name, selected: keyCounter === 0, content: item.content, key: keyCounter++, link: item.link}
    })
  );

  const [isHovered, setIsHovered] = useState(false);

  function selectItem(key) {
    const newItems = [...items];
    newItems.forEach(item => item.selected = false);
    newItems.find(item => item.key === key).selected = true;
    setItems(newItems);
  }

  function selected(item){
    return item.selected ? " tabs__item--active " : "";
  }

  function getLink(){
    const item = current();
    const active = item.link && isHovered;
      return (<div className={ styles.linkContainer + " " + (active ? styles.visible : styles.hidden)}>
        <a href={item.link} target="_blank" className={styles.link}>🚀</a>
      </div>)
  }

  function current(){
    return items.find(item => item.selected);
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
    <div className={styles.ifcTabContent}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
      { current().content }
      { getLink() }
    </div>
    </div>
  );
};

