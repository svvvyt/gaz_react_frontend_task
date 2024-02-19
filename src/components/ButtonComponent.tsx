import { FC } from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Button } from '@consta/uikit/Button';

interface ButtonComponentProps {
  onClick: () => void;
  label: string;
}

const ButtonComponent: FC<ButtonComponentProps> = ({ onClick, label }) => {
  return (
    <Theme preset={presetGpnDefault} className="App">
      <Button onClick={onClick} label={label} size="s" />
    </Theme>
  );
};

export default ButtonComponent;
