import { observer } from 'mobx-react';
import { useStore } from '@/contexts/StoreContext';
const WelcomeItem: React.FC = () => {
  const { userStore } = useStore();
  return (
    <div>
      <h1>Welcome to the WelcomeItem page</h1>
      <h2>{userStore.username}</h2>
    </div>
  );
};
export default observer(WelcomeItem);
