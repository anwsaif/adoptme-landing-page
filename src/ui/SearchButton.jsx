import React from "react";
import { Icon } from '@iconify/react';

function SearchButton(props) {
  return (
    <button type="button" className="text-primary lg:hidden" {...props}>
      <Icon icon="cil:search" width={24} />
    </button>
  );
}

export default SearchButton;
