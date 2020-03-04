import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StorySt, { TitleSt, ContentSt } from './Story.css';
import { IStory } from '../../interfaces/Story';
import stories from '../../stories';

const Story = () => {
  const { id } = useParams();
  const [story, setStory] = useState();

  useEffect(() => {
    setStory(stories.find((item: IStory) => id === item.id));
  }, [id]);

  return (
    <StorySt>
      <TitleSt>
        {story?.title || 'Title loading'}
      </TitleSt>
      <ContentSt>
        {story?.content || 'Content loading'}
      </ContentSt>
    </StorySt>
  );
};

export default Story;
