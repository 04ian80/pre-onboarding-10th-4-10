import {
  SearchResultType,
  SetStateType,
  TodoDataType,
} from '../../types/types';
import './Dropdown.css';
import DropdownItem from './DropdownItem';

type DropdownListProps = {
  handleChange: (value: string) => void;
  keywordData: SearchResultType;
  setTodos: SetStateType<TodoDataType[]>;
};

const DropdownList = ({
  handleChange,
  keywordData,
  setTodos,
}: DropdownListProps) => {
  return (
    <ul className="dropdown-list">
      {keywordData.map((keyword, index) => (
        <DropdownItem
          key={index}
          keyword={keyword}
          handleChange={handleChange}
          setTodos={setTodos}
        />
      ))}
    </ul>
  );
};

export default DropdownList;
