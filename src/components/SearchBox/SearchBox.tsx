import * as React from 'react';

import type { IMenuItem, SearchResult } from '../../services/types';
import type { SearchStore } from '../../services/SearchStore';
import type { MarkerService } from '../../services/MarkerService';

import { MenuItem } from '../SideMenu/MenuItem';
import { OptionsContext } from '../OptionsProvider';
import { bind, debounce } from 'decko';
import { PerfectScrollbarWrap } from '../../common-elements/perfect-scrollbar';
import {
  ClearIcon,
  SearchIcon,
  SearchInput,
  SearchResultsBox,
  SearchWrap,
} from './styled.elements';
import { l } from '../../services/Labels';

export interface SearchBoxProps {
  search: SearchStore<string>;
  marker: MarkerService;
  getItemById: (id: string) => IMenuItem | undefined;
  onActivate: (item: IMenuItem) => void;

  className?: string;
}

export interface SearchBoxState {
  results: SearchResult[];
  noResults: boolean;
  term: string;
  activeItemIdx: number;
}

export class SearchBox extends React.PureComponent<SearchBoxProps, SearchBoxState> {
  activeItemRef: MenuItem | null = null;

  static contextType = OptionsContext;
  declare context: React.ContextType<typeof OptionsContext>;

  constructor(props) {
    super(props);
    this.state = {
      results: [],
      noResults: false,
      term: '',
      activeItemIdx: -1,
    };
  }

  clearResults(term: string) {
      throw new Error("STUB");
  }

  clear = () => {
      throw new Error("STUB");
  };

  handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      throw new Error("STUB");
  };

  setResults(results: SearchResult[], term: string) {
      throw new Error("STUB");
  }

  @bind
  @debounce(400)
  searchCallback(searchTerm: string) {
      throw new Error("STUB");
  }

  search = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { minCharacterLengthToInitSearch } = this.context;
    const q = event.target.value;
    if (q.length < minCharacterLengthToInitSearch) {
      this.clearResults(q);
      return;
    }

    this.setState(
      {
        term: q,
      },
      () => { throw new Error("STUB"); },
    );
  };

  render() {
    const { activeItemIdx } = this.state;
    const results = this.state.results
      .filter(res => { throw new Error("STUB"); })
      .map(res => { throw new Error("STUB"); })
      .sort((a, b) => { throw new Error("STUB"); });

    return (
      <SearchWrap role="search">
        {this.state.term && <ClearIcon onClick={this.clear}>×</ClearIcon>}
        <SearchIcon />
        <SearchInput
          value={this.state.term}
          onKeyDown={this.handleKeyDown}
          placeholder="Search..."
          aria-label="Search"
          type="text"
          onChange={this.search}
        />
        {results.length > 0 && (
          <PerfectScrollbarWrap
            options={{
              wheelPropagation: false,
            }}
          >
            <SearchResultsBox data-role="search:results">
              {results.map((res, idx) => { throw new Error("STUB"); })}
            </SearchResultsBox>
          </PerfectScrollbarWrap>
        )}
        {this.state.term && this.state.noResults ? (
          <SearchResultsBox data-role="search:results">{l('noResultsFound')}</SearchResultsBox>
        ) : null}
      </SearchWrap>
    );
  }
}
