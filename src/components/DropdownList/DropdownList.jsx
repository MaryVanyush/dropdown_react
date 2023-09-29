import './DropdownList.css';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export const DropdownList = (props) =>{
    const { list } = props;
    const [selectedItem, setSelectedItem] = useState(null);
    const toSelectItem = (item) => {
        setSelectedItem(item);
    }

    const styles = useSpring({
        opacity: 1,
        from: { opacity: 0 },
      });

    return <animated.ul style={styles} className="dropdown">{list.map(item => <DropdownItem 
                item = {item} 
                selectedItem = {selectedItem}
                toSelectItem = {toSelectItem}
                key ={crypto.randomUUID()}/>)}</animated.ul>
}

const DropdownItem = (props) =>{
    const { item, toSelectItem, selectedItem } = props;

    return <li className="item"
        style={{
            color: selectedItem === item ? '#5380F7' : '#666',
        }}
        onClick={() => toSelectItem(item)}><div>{item}</div></li>
}
