import { FC } from 'react';
import magnifier from '../../images/magn.png';
import styles from './SearchingForm.module.scss';

type TProps = {
  setSearch: (arg0: string) => void;
};

const SearchingForm: FC<TProps> = (props: TProps) => {
  const { setSearch } = props;

  return (
    <form className={styles.searchForm}>
      <div className={styles.searchForm__inputContainer}>
        <input
          className={styles.searchForm__input}
          type="name"
          name="search"
          id="search"
          placeholder="Введите слово"
          required
          onChange={(e) => setSearch(e.target.value)}
        />
        <img className={styles.searchForm__img} src={magnifier} alt="Лупа" />
      </div>
    </form>
  );
};

export default SearchingForm;
