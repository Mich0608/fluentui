/** @jsxRuntime classic */
/** @jsx createElement */

import { createElement } from '@fluentui/react-jsx-runtime';

import { getSlotsNext } from '@fluentui/react-utilities';
import type { MenuButtonSlots, MenuButtonState } from './MenuButton.types';

/**
 * Renders a MenuButton component by passing the state defined props to the appropriate slots.
 */
export const renderMenuButton_unstable = (state: MenuButtonState) => {
  const { slots, slotProps } = getSlotsNext<MenuButtonSlots>(state);
  const { icon, iconOnly } = state;

  return (
    <slots.root {...slotProps.root}>
      {slots.icon && <slots.icon {...slotProps.icon} />}
      {!iconOnly && slotProps.root.children}
      {(!iconOnly || !icon?.children) && slots.menuIcon && <slots.menuIcon {...slotProps.menuIcon} />}
    </slots.root>
  );
};
