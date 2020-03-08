import React, { useEffect } from 'react';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Link } from 'react-router-dom';
import { IListState, IStory } from 'common/interfaces';
import { ListSt } from './List.css';

interface IProps {
  error: any,
  pending: boolean,
  stories: IStory[],
  fetchStories: ThunkAction<void, IListState, unknown, Action<string>>,
}

const List = ({ fetchStories, stories }: IProps) => {
  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <ListSt>
      { stories?.map(({ id, title }) => <Link key={id} to={`/story/${id}`}>{title}</Link>) }
    </ListSt>
  );
};

export default List;
