import { useState } from 'react';
import styled from 'styled-components';

const FilterSection = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const FilterTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  padding: 10px;
  &:hover {
    color: rgba(0, 0, 0, 0.7);
  }
`;

const FilterOptions = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding: 0 10px;
`;

const FilterOption = styled.div`
  padding: 5px 0;
  color: #555;
  cursor: pointer;
  &:hover {
    color: rgba(0, 0, 0, 0.7);
  }
`;

const Sidebar = styled.aside`
  width: 20%;
  padding: 10px;
  border-right: 1px solid #ddd;
`;

const SidebarTitle = styled.h3`
  font-size: 1.2rem;
  padding: 10px;
`;

const SidebarContainer: React.FC = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    size: false,
    fit: false,
    color: false,
    heelHeight: false,
    shaftHeight: false,
    heelType: false,
    toeType: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <Sidebar>
      <SidebarTitle>Filters</SidebarTitle>
      {Object.keys(openSections).map((section) => (
        <FilterSection key={section}>
          <FilterTitle onClick={() => toggleSection(section)}>
            {section.replace(/([A-Z])/g, ' $1')} {/* Makes CamelCase into regular words */}
            <span>{openSections[section] ? '▲' : '▼'}</span>
          </FilterTitle>
          <FilterOptions isOpen={openSections[section]}>
            <FilterOption>Option 1</FilterOption>
            <FilterOption>Option 2</FilterOption>
            <FilterOption>Option 3</FilterOption>
          </FilterOptions>
        </FilterSection>
      ))}
    </Sidebar>
  );
};

export default SidebarContainer;
