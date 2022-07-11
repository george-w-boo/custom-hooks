import { useLocaleStorage } from '../customHooks/useLocaleStorage';
import Card from './common/Card';

const LocaleStorage = () => {
  const [value, setValue] = useLocaleStorage("name", { name: "initial" });

  const handleValue = () => {
    setValue({ name: Math.random() * 350 });
  };

  return (
    <Card legend="useLocaleStorage">
      <p onClick={handleValue}>From local storage: {value.name}</p>
    </Card>
  )
}

export default LocaleStorage;
