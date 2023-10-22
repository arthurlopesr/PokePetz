import { useId, useState } from "react";

import { ChevronArrow } from "../icons/ChevronDown";
import { REGION_MOCKS } from "./mock";
import {
  DropdownButton,
  DropdownContainer,
  DropdownContent,
  DropdownItem,
  Label,
} from "./styles";

interface DropdownProps {
  placeholder: string;
  label?: string;
  selected: string;
  setSelected: (selected: string) => void;
}

export function Dropdown({
  placeholder,
  label,
  setSelected,
  selected,
}: DropdownProps) {
  const dropdownId = useId();
  const [isOpen, seIsOpen] = useState(false);

  return (
    <DropdownContainer>
      <Label htmlFor={dropdownId}>{label}</Label>
      <DropdownButton onClick={(e) => seIsOpen(!isOpen)}>
        <div>
          <p>{selected ? selected : placeholder}</p>
          <ChevronArrow />
        </div>
      </DropdownButton>
      {isOpen && (
        <DropdownContent>
          {REGION_MOCKS.map((region) => (
            <DropdownItem
              key={region.url}
              onClick={(e) => {
                setSelected(region.name);
                seIsOpen(false);
              }}
            >
              {region.name}
            </DropdownItem>
          ))}
        </DropdownContent>
      )}
    </DropdownContainer>
  );
}
