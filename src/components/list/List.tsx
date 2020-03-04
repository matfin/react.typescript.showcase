import React from 'react';
import { Link } from 'react-router-dom';
import { IStory } from '../../interfaces/Story';
import ListSt from './List.css';

interface IProps {
  stories?: IStory[]
}

const List = ({ stories }: IProps) => (
  <ListSt>
    { stories?.map(({ id, title }) => <Link key={id} to={`/story/${id}`}>{title}</Link>) }
  </ListSt>
);

export default List;
